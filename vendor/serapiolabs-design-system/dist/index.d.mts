import { ClassValue } from 'clsx';
import * as react from 'react';
import { ButtonHTMLAttributes, ReactElement, InputHTMLAttributes, HTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as _base_ui_react from '@base-ui/react';
import { Drawer } from '@base-ui/react/drawer';

declare function cn(...inputs: ClassValue[]): string;

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

type CompatChildren = ReactElement | ReactElement[] | string | number | boolean | null | undefined;
interface CardBaseProps {
    className?: string;
    children?: CompatChildren;
}
declare const Card: react.ForwardRefExoticComponent<Omit<CardBaseProps & {
    [key: string]: any;
}, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CardHeader: react.ForwardRefExoticComponent<Omit<CardBaseProps & {
    [key: string]: any;
}, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CardTitle: react.ForwardRefExoticComponent<Omit<CardBaseProps & {
    [key: string]: any;
}, "ref"> & react.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: react.ForwardRefExoticComponent<Omit<CardBaseProps & {
    [key: string]: any;
}, "ref"> & react.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: react.ForwardRefExoticComponent<Omit<CardBaseProps & {
    [key: string]: any;
}, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CardFooter: react.ForwardRefExoticComponent<Omit<CardBaseProps & {
    [key: string]: any;
}, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare const badgeVariants: (props?: ({
    variant?: "secondary" | "accent" | "outline" | "error" | "default" | "success" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

declare const Dialog: {
    Root: ({ children, ...props }: any) => react.JSX.Element;
    Trigger: react.ForwardRefExoticComponent<Omit<_base_ui_react.DialogTriggerProps<unknown> & react.RefAttributes<HTMLElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Portal: react.ForwardRefExoticComponent<Omit<_base_ui_react.AlertDialogPortalProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Backdrop: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogBackdropProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Popup: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogPopupProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Title: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogTitleProps, "ref"> & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
    Description: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogDescriptionProps, "ref"> & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;
    Close: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogCloseProps, "ref"> & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
};

declare const Sidebar: {
    Root: typeof Drawer.Root;
    Trigger: react.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerTriggerProps<unknown> & react.RefAttributes<HTMLElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Portal: Drawer.Portal;
    Backdrop: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerBackdropProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Popup: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerPopupProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Content: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerContentProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Title: react.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerTitleProps, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
    Description: react.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerDescriptionProps, "ref"> & react.RefAttributes<HTMLParagraphElement>>;
    Close: react.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerCloseProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    SwipeArea: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerSwipeAreaProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

declare const NavigationMenu: {
    Root: ({ children, ...props }: any) => react.JSX.Element;
    Trigger: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuTriggerProps, "ref"> & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    List: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuListProps, "ref"> & react.RefAttributes<HTMLUListElement>, "ref"> & react.RefAttributes<HTMLUListElement>>;
    Item: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuItemProps, "ref"> & react.RefAttributes<HTMLLIElement>, "ref"> & react.RefAttributes<HTMLLIElement>>;
    Link: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuLinkProps, "ref"> & react.RefAttributes<HTMLAnchorElement>, "ref"> & react.RefAttributes<HTMLAnchorElement>>;
    Portal: react.ForwardRefExoticComponent<Omit<_base_ui_react.NavigationMenuPortalProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Positioner: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuPositionerProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Popup: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuPopupProps, "ref"> & react.RefAttributes<HTMLElement>, "ref"> & react.RefAttributes<HTMLElement>>;
    Content: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuContentProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Backdrop: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuBackdropProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Viewport: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuViewportProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Icon: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.NavigationMenuIconProps, "ref"> & react.RefAttributes<HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;
};

export { Badge, type BadgeProps, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, Input, type InputProps, NavigationMenu, Sidebar, badgeVariants, buttonVariants, cn };
