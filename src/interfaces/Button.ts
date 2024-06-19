export interface Button {
    name: string;
    important: boolean;
    href?: string;
    onClick?: () => void;
}