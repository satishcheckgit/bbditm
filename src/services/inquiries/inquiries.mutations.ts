import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  programmeInterested?: string;
  city?: string;
  message?: string;
}

export interface InquiryResponse {
  id?: string;
  success: boolean;
  message: string;
}

/**
 * Pure API call for submitting inquiries to Payload CMS / Node API
 */
export async function submitInquiry(data: InquiryFormData): Promise<InquiryResponse> {
  try {
    return await apiClient.post<InquiryResponse>("/inquiries", data);
  } catch (error) {
    // If backend is not live yet, simulate successful mock submission in development
    if (process.env.NODE_ENV === "development") {
      console.info("[Inquiries API] Simulating inquiry submission during dev:", data);
      return {
        id: "mock-" + Date.now(),
        success: true,
        message: "Your inquiry has been recorded (Dev Mock).",
      };
    }
    throw error;
  }
}

/**
 * Mutation hook for inquiry and lead-capture forms with TanStack Query
 */
export function useSubmitInquiry() {
  return useMutation({
    mutationFn: (data: InquiryFormData) => submitInquiry(data),
  });
}
