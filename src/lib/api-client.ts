/**
 * Production-ready Universal HTTP Client for Next.js & Payload CMS APIs.
 * Features:
 * - Automatic AbortSignal cancellation support (cancels obsolete queries)
 * - 15-second default request timeout protection (prevents hanging connections)
 * - Next.js App Router cache integration (revalidate & tags)
 * - Strict typing and typed error boundaries
 */

export class ApiClientError extends Error {
  public status: number;
  public statusText: string;
  public data: unknown;

  constructor(message: string, status: number, statusText: string, data?: unknown) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
}

export interface RequestOptions extends RequestInit {
  params?: Record<string, unknown>;
  timeoutMs?: number;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

// Default base URL points to Payload CMS or local proxy
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const DEFAULT_TIMEOUT_MS = 15000;

function buildQueryString(params?: Record<string, unknown>): string {
  if (!params || Object.keys(params).length === 0) return "";

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (typeof value === "object" && !Array.isArray(value)) {
      // Serialize nested objects (e.g., Payload CMS `where` queries)
      Object.entries(value as Record<string, unknown>).forEach(([subKey, subVal]) => {
        if (subVal !== undefined && subVal !== null) {
          searchParams.append(`${key}[${subKey}]`, String(subVal));
        }
      });
    } else if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, String(item)));
    } else {
      searchParams.append(key, String(value));
    }
  });

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

/**
 * Core fetch wrapper with typed output, timeout guard, and unified error handling
 */
export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, headers, timeoutMs = DEFAULT_TIMEOUT_MS, signal: userSignal, ...customConfig } = options;

  const url = `${BASE_URL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}${buildQueryString(params)}`;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // Timeout controller to guard against hanging backend connections
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => {
    timeoutController.abort(new Error(`Request timed out after ${timeoutMs}ms`));
  }, timeoutMs);

  // Combine user signal (e.g. from TanStack Query) and internal timeout controller
  const combinedSignal = userSignal
    ? AbortSignal.any
      ? AbortSignal.any([userSignal, timeoutController.signal])
      : userSignal
    : timeoutController.signal;

  try {
    const response = await fetch(url, {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      signal: combinedSignal,
      ...customConfig,
    });

    if (!response.ok) {
      let errorBody: unknown = null;
      try {
        errorBody = await response.json();
      } catch {
        errorBody = await response.text();
      }

      const errorMessage =
        (typeof errorBody === "object" &&
          errorBody !== null &&
          "message" in errorBody &&
          typeof (errorBody as Record<string, unknown>).message === "string" &&
          (errorBody as Record<string, unknown>).message) ||
        `HTTP ${response.status}: ${response.statusText}`;

      throw new ApiClientError(
        String(errorMessage),
        response.status,
        response.statusText,
        errorBody
      );
    }

    // 204 No Content
    if (response.status === 204) {
      return {} as T;
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof ApiClientError) {
      throw error;
    }

    // Preserve cancellation errors for TanStack Query
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }

    throw new ApiClientError(
      error instanceof Error ? error.message : "Unknown Network Error",
      0,
      "NetworkError"
    );
  } finally {
    clearTimeout(timeoutId);
  }
}

// Convenience HTTP helper methods
apiClient.get = <T>(endpoint: string, options?: RequestOptions) =>
  apiClient<T>(endpoint, { ...options, method: "GET" });

apiClient.post = <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
  apiClient<T>(endpoint, {
    ...options,
    method: "POST",
    body: body ? JSON.stringify(body) : undefined,
  });

apiClient.put = <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
  apiClient<T>(endpoint, {
    ...options,
    method: "PUT",
    body: body ? JSON.stringify(body) : undefined,
  });

apiClient.patch = <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
  apiClient<T>(endpoint, {
    ...options,
    method: "PATCH",
    body: body ? JSON.stringify(body) : undefined,
  });

apiClient.delete = <T>(endpoint: string, options?: RequestOptions) =>
  apiClient<T>(endpoint, { ...options, method: "DELETE" });
