import { useQuery } from "@tanstack/react-query";
import { navigationKeys } from "./navigation.keys";
import { fetchHeaderNav, HeaderNavData } from "./navigation.api";

/**
 * Hook to retrieve dynamic navigation menus from Payload CMS with TanStack Query caching
 */
export function useHeaderNav() {
  return useQuery<HeaderNavData>({
    queryKey: navigationKeys.header(),
    queryFn: ({ signal }) => fetchHeaderNav(signal),
    staleTime: 1000 * 60 * 15, // Menus don't change frequently; 15 mins cache
  });
}
