interface nav {
    icon?: string;
    text: string;
    url: string;
    sub?: nav[]
}

export interface SidebarProps {
    navs: nav[]
}