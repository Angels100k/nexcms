interface nav {
    icon?: string;
    text: string;
    url: string;
}

export interface SidebarProps {
    navs: nav[]
}