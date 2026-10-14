/**
 * Query keys for Header & Utility Navigation
 */
export const navigationKeys = {
  all: ["navigation"] as const,
  header: () => [...navigationKeys.all, "header"] as const,
};
