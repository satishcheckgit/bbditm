export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  heading: string;
  items: NavSubItem[];
}

export interface NavItem {
  title: string;
  href: string;
  isMegaMenu?: boolean;
  featured?: {
    title: string;
    description: string;
    href: string;
    badge?: string;
  };
  groups?: NavGroup[];
}

export interface UtilityNavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}
