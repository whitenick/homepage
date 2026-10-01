// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/button.tsx
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-sm hover:bg-primary-hover hover:shadow-md active:bg-primary-active",
        secondary: "bg-secondary text-white shadow-sm hover:bg-secondary-hover active:bg-secondary-active",
        accent: "bg-accent text-white shadow-sm hover:bg-accent-hover hover:shadow-md active:bg-accent-active",
        outline: "border border-border bg-transparent hover:bg-surface hover:shadow-sm",
        ghost: "bg-transparent hover:bg-surface/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        sm: "h-8 px-3 text-xs gap-1.5",
        md: "h-11 px-5 text-sm",
        lg: "h-14 px-8 text-base gap-3",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = forwardRef(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/card.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = forwardRef2(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
    "div",
    {
      ref,
      className: cn(
        "rounded-xl border border-border bg-surface p-6 shadow-md",
        "transition-all duration-200 ease-out",
        className
      ),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = forwardRef2(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, className: cn("flex flex-col space-y-1.5", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = forwardRef2(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
    "h3",
    {
      ref,
      className: cn("font-headline text-xl font-semibold leading-tight tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
var CardDescription = forwardRef2(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
    "p",
    {
      ref,
      className: cn("text-sm text-text-secondary", className),
      ...props
    }
  )
);
CardDescription.displayName = "CardDescription";
var CardContent = forwardRef2(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, className: cn("pt-4", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = forwardRef2(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
    "div",
    {
      ref,
      className: cn("flex items-center pt-4", className),
      ...props
    }
  )
);
CardFooter.displayName = "CardFooter";

// src/components/input.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = forwardRef3(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ jsxs2("div", { className: "space-y-1.5", children: [
      label && /* @__PURE__ */ jsx3(
        "label",
        {
          htmlFor: inputId,
          className: "text-sm font-medium text-text",
          children: label
        }
      ),
      /* @__PURE__ */ jsx3(
        "input",
        {
          id: inputId,
          className: cn(
            "flex h-11 w-full rounded-md border px-4 py-2 text-sm",
            "bg-surface text-text placeholder:text-text-muted",
            "border-border",
            "transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-semantic-error focus-visible:ring-semantic-error",
            className
          ),
          ref,
          "aria-invalid": !!error,
          "aria-describedby": error ? `${inputId}-error` : void 0,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx3("p", { id: `${inputId}-error`, className: "text-xs text-semantic-error", role: "alert", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/badge.tsx
import { forwardRef as forwardRef4 } from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var badgeVariants = cva2(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary",
        secondary: "bg-secondary/10 text-secondary",
        accent: "bg-accent/10 text-accent",
        success: "bg-semantic-success/10 text-semantic-success",
        warning: "bg-semantic-warning/10 text-semantic-warning",
        error: "bg-semantic-error/10 text-semantic-error",
        outline: "border border-border text-text"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Badge = forwardRef4(
  ({ className, variant, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "span",
      {
        ref,
        className: cn(badgeVariants({ variant }), className),
        ...props
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/dialog.tsx
import { forwardRef as forwardRef5 } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { jsx as jsx5 } from "react/jsx-runtime";
var DialogRoot = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Root, { ...props, children });
};
var DialogTrigger = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  DialogPrimitive.Trigger,
  {
    ref,
    className: cn("cursor-pointer", className),
    ...props
  }
));
DialogTrigger.displayName = "DialogTrigger";
var DialogPortal = DialogPrimitive.Portal;
var DialogBackdrop = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  DialogPrimitive.Backdrop,
  {
    ref,
    className: cn(
      "fixed inset-0 z-[var(--z-modal-backdrop)]",
      "bg-[var(--color-overlay-dark)]",
      "data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      "transition-opacity duration-[var(--duration-slow)] ease-out",
      className
    ),
    ...props
  }
));
DialogBackdrop.displayName = "DialogBackdrop";
var DialogPopup = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  DialogPrimitive.Popup,
  {
    ref,
    className: cn(
      "fixed left-1/2 top-1/2 z-[var(--z-modal)]",
      "w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
      "bg-[var(--color-surface)] text-[var(--color-text)]",
      "rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)]",
      "p-6",
      "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
      "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
      "transition-all duration-[var(--duration-slow)] ease-out",
      "max-h-[85vh] overflow-y-auto",
      className
    ),
    ...props
  }
));
DialogPopup.displayName = "DialogPopup";
var DialogTitle = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-[var(--font-semibold)] text-[var(--color-text)] mb-1",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = "DialogTitle";
var DialogDescription = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  DialogPrimitive.Description,
  {
    ref,
    className: cn(
      "text-sm text-[var(--color-text-secondary)] mb-4",
      className
    ),
    ...props
  }
));
DialogDescription.displayName = "DialogDescription";
var DialogClose = forwardRef5(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx5(
  DialogPrimitive.Close,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center",
      "rounded-[var(--radius-md)] px-4 py-2",
      "text-sm font-medium",
      "bg-[var(--color-primary)] text-white",
      "hover:bg-[var(--color-primary-hover)]",
      "active:bg-[var(--color-primary-active)]",
      "transition-colors duration-[var(--duration-fast)]",
      className
    ),
    ...props,
    children: children || "Close"
  }
));
DialogClose.displayName = "DialogClose";
var Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Popup: DialogPopup,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose
};

// src/components/sidebar.tsx
import { forwardRef as forwardRef6 } from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { jsx as jsx6 } from "react/jsx-runtime";
var SidebarRoot = DrawerPrimitive.Root;
var SidebarTrigger = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DrawerPrimitive.Trigger,
  {
    ref,
    className: cn("cursor-pointer", className),
    ...props
  }
));
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarPortal = DrawerPrimitive.Portal;
var SidebarBackdrop = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DrawerPrimitive.Backdrop,
  {
    ref,
    className: cn(
      "fixed inset-0 z-[var(--z-modal-backdrop)]",
      "bg-[var(--color-overlay-dark)]",
      "data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      "transition-opacity duration-[var(--duration-slow)] ease-out",
      className
    ),
    ...props
  }
));
SidebarBackdrop.displayName = "SidebarBackdrop";
var SidebarPopup = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DrawerPrimitive.Popup,
  {
    ref,
    className: cn(
      "fixed inset-y-0 left-0 z-[var(--z-modal)]",
      "flex w-full max-w-xs flex-col",
      "bg-[var(--color-surface)] text-[var(--color-text)]",
      "shadow-[var(--shadow-xl)]",
      "data-[ending-style]:-translate-x-full",
      "data-[starting-style]:-translate-x-full",
      "transition-transform duration-[var(--duration-slower)] ease-out",
      className
    ),
    ...props
  }
));
SidebarPopup.displayName = "SidebarPopup";
var SidebarContent = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DrawerPrimitive.Content,
  {
    ref,
    className: cn(
      "flex flex-1 flex-col overflow-y-auto px-6 pb-2",
      className
    ),
    ...props
  }
));
SidebarContent.displayName = "SidebarContent";
var SidebarTitle = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DrawerPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-[var(--font-semibold)] text-[var(--color-text)]",
      "flex h-16 shrink-0 items-center",
      className
    ),
    ...props
  }
));
SidebarTitle.displayName = "SidebarTitle";
var SidebarDescription = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DrawerPrimitive.Description,
  {
    ref,
    className: cn(
      "text-sm text-[var(--color-text-secondary)]",
      className
    ),
    ...props
  }
));
SidebarDescription.displayName = "SidebarDescription";
var SidebarClose = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DrawerPrimitive.Close,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center",
      "rounded-[var(--radius-md)] p-2",
      "text-[var(--color-text-muted)]",
      "hover:text-[var(--color-text)] hover:bg-[var(--color-border)]/20",
      "transition-colors duration-[var(--duration-fast)]",
      className
    ),
    ...props
  }
));
SidebarClose.displayName = "SidebarClose";
var SidebarSwipeArea = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DrawerPrimitive.SwipeArea,
  {
    ref,
    className: cn("absolute left-0 top-0 h-full w-8", className),
    ...props
  }
));
SidebarSwipeArea.displayName = "SidebarSwipeArea";
var Sidebar = {
  Root: SidebarRoot,
  Trigger: SidebarTrigger,
  Portal: SidebarPortal,
  Backdrop: SidebarBackdrop,
  Popup: SidebarPopup,
  Content: SidebarContent,
  Title: SidebarTitle,
  Description: SidebarDescription,
  Close: SidebarClose,
  SwipeArea: SidebarSwipeArea
};

// src/components/navigation-menu.tsx
import { forwardRef as forwardRef7 } from "react";
import { NavigationMenu as NavMenuPrimitive } from "@base-ui/react/navigation-menu";
import { jsx as jsx7 } from "react/jsx-runtime";
var NavigationMenuRoot = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx7(NavMenuPrimitive.Root, { ...props, children });
};
var NavigationMenuTrigger = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center gap-1",
      "rounded-[var(--radius-md)] px-3 py-2",
      "text-sm font-[var(--font-medium)]",
      "text-[var(--color-text-secondary)]",
      "hover:text-[var(--color-text)] hover:bg-[var(--color-border)]/20",
      "transition-colors duration-[var(--duration-fast)]",
      "data-[open]:text-[var(--color-primary)]",
      className
    ),
    ...props
  }
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
var NavigationMenuList = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.List,
  {
    ref,
    className: cn(
      "flex items-center gap-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = "NavigationMenuList";
var NavigationMenuItem = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Item,
  {
    ref,
    className: cn("list-none", className),
    ...props
  }
));
NavigationMenuItem.displayName = "NavigationMenuItem";
var NavigationMenuLink = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Link,
  {
    ref,
    className: cn(
      "inline-flex items-center rounded-[var(--radius-md)] px-3 py-2",
      "text-sm font-[var(--font-medium)]",
      "text-[var(--color-text-secondary)]",
      "hover:text-[var(--color-text)] hover:bg-[var(--color-border)]/20",
      "transition-colors duration-[var(--duration-fast)]",
      "data-[active]:text-[var(--color-primary)]",
      "no-underline",
      className
    ),
    ...props
  }
));
NavigationMenuLink.displayName = "NavigationMenuLink";
var NavigationMenuPortal = NavMenuPrimitive.Portal;
var NavigationMenuPositioner = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Positioner,
  {
    ref,
    className: cn("z-[var(--z-dropdown)]", className),
    ...props
  }
));
NavigationMenuPositioner.displayName = "NavigationMenuPositioner";
var NavigationMenuPopup = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Popup,
  {
    ref,
    className: cn(
      "rounded-[var(--radius-lg)]",
      "bg-[var(--color-surface)] shadow-[var(--shadow-lg)]",
      "border border-[var(--color-border)]",
      "p-2 min-w-[180px]",
      "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
      "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
      "transition-all duration-[var(--duration-base)] ease-out",
      "origin-top",
      className
    ),
    ...props
  }
));
NavigationMenuPopup.displayName = "NavigationMenuPopup";
var NavigationMenuContent = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Content,
  {
    ref,
    className: cn("p-2", className),
    ...props
  }
));
NavigationMenuContent.displayName = "NavigationMenuContent";
var NavigationMenuBackdrop = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Backdrop,
  {
    ref,
    className: cn(
      "fixed inset-0 z-[var(--z-modal-backdrop)]",
      "bg-[var(--color-overlay-dark)]/20",
      "data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      "transition-opacity duration-[var(--duration-base)]",
      className
    ),
    ...props
  }
));
NavigationMenuBackdrop.displayName = "NavigationMenuBackdrop";
var NavigationMenuViewport = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Viewport,
  {
    ref,
    className: cn("overflow-hidden", className),
    ...props
  }
));
NavigationMenuViewport.displayName = "NavigationMenuViewport";
var NavigationMenuIcon = forwardRef7(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  NavMenuPrimitive.Icon,
  {
    ref,
    className: cn(
      "inline-block transition-transform duration-[var(--duration-fast)]",
      "data-[open]:rotate-180",
      className
    ),
    ...props
  }
));
NavigationMenuIcon.displayName = "NavigationMenuIcon";
var NavigationMenu = {
  Root: NavigationMenuRoot,
  Trigger: NavigationMenuTrigger,
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  Portal: NavigationMenuPortal,
  Positioner: NavigationMenuPositioner,
  Popup: NavigationMenuPopup,
  Content: NavigationMenuContent,
  Backdrop: NavigationMenuBackdrop,
  Viewport: NavigationMenuViewport,
  Icon: NavigationMenuIcon
};
export {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  Input,
  NavigationMenu,
  Sidebar,
  badgeVariants,
  buttonVariants,
  cn
};
