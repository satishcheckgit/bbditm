import { QueryClient, defaultShouldDehydrateQuery, isServer } from "@tanstack/react-query";
import { ApiClientError } from "./api-client";

/**
 * Creates and configures a new QueryClient instance with production-grade defenses against API abuse.
 */
function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Data is considered fresh for 3 minutes (Zero network calls on remount within this window)
        staleTime: 1000 * 60 * 3,
        // Inactive cache is purged after 10 minutes to prevent browser memory leaks
        gcTime: 1000 * 60 * 10,
        // PREVENTS API ABUSE: Never refetch merely because user switched tabs or clicked window
        refetchOnWindowFocus: false,
        // Only refetch on reconnect if the data is actually stale
        refetchOnReconnect: "always",
        // Only refetch on component remount if data is stale (avoids spamming on quick route navigations)
        refetchOnMount: true,
        // SMART RETRY POLICY: Do not spam backend on client errors (400, 401, 403, 404) or cancellations
        retry: (failureCount, error) => {
          if (error instanceof DOMException && error.name === "AbortError") {
            return false;
          }
          if (error instanceof ApiClientError && error.status >= 400 && error.status < 500) {
            return false;
          }
          return failureCount < 1;
        },
      },
      mutations: {
        // Prevent accidental multiple submissions for forms/mutations
        retry: 0,
      },
      dehydrate: {
        // Include pending queries during SSR dehydration so streaming/RSC hydration works seamlessly
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
    },
  });
}

// Client-side singleton instance to preserve cache across component re-renders
let browserQueryClient: QueryClient | undefined = undefined;

/**
 * Returns a QueryClient instance:
 * - On the server: always returns a fresh QueryClient to avoid cross-request data leaks.
 * - On the browser: returns the existing singleton QueryClient.
 */
export function getQueryClient(): QueryClient {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}
