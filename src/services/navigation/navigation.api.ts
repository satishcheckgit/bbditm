import { apiClient } from "@/lib/api-client";
import { NavItem, UtilityNavItem } from "@/types/navigation";
import { mainNavItems, utilityNavItems } from "@/config/navigation";

interface RawPayloadNavGroupItem {
  id?: string;
  title: string;
  url: string;
  description?: string;
}

interface RawPayloadNavGroup {
  id?: string;
  heading: string;
  items?: RawPayloadNavGroupItem[];
}

interface RawPayloadNavItem {
  id?: string;
  title: string;
  url?: string;
  isMegaMenu?: boolean;
  featured?: {
    badge?: string | null;
    title?: string | null;
    description?: string | null;
    href?: string | null;
  } | null;
  groups?: RawPayloadNavGroup[];
}

interface RawPayloadUtilityItem {
  id?: string;
  title: string;
  url: string;
  isExternal?: boolean;
}

export interface HeaderNavData {
  utilityNav: UtilityNavItem[];
  mainNav: NavItem[];
}

interface RawHeaderNavResponse {
  utilityNav?: RawPayloadUtilityItem[];
  mainNav?: RawPayloadNavItem[];
}

/**
 * Fetches dynamic Navigation Menu from Payload CMS Global endpoint (/api/globals/header-nav).
 * Falls back to local static config if Payload backend is offline.
 */
export async function fetchHeaderNav(signal?: AbortSignal): Promise<HeaderNavData> {
  try {
    const res = await apiClient.get<RawHeaderNavResponse>("/globals/header-nav", {
      signal,
    });

    if (res && (res.mainNav?.length || res.utilityNav?.length)) {
      const utilityNav: UtilityNavItem[] = (res.utilityNav || []).map((item) => ({
        title: item.title,
        href: item.url,
        isExternal: Boolean(item.isExternal),
      }));

      const mainNav: NavItem[] = (res.mainNav || []).map((item) => ({
        title: item.title,
        href: item.url || "#",
        isMegaMenu: Boolean(item.isMegaMenu),
        featured:
          item.featured && item.featured.title
            ? {
                title: item.featured.title,
                description: item.featured.description || "",
                href: item.featured.href || "#",
                badge: item.featured.badge || undefined,
              }
            : undefined,
        groups: (item.groups || []).map((grp) => ({
          heading: grp.heading,
          items: (grp.items || []).map((sub) => ({
            title: sub.title,
            href: sub.url,
            description: sub.description || undefined,
          })),
        })),
      }));

      return { utilityNav, mainNav };
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[Navigation API] Payload endpoint /globals/header-nav unreachable, using fallback navigation."
      );
    }
  }

  return {
    utilityNav: utilityNavItems,
    mainNav: mainNavItems,
  };
}
