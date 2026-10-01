"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Dialog: () => Dialog,
  Input: () => Input,
  NavigationMenu: () => NavigationMenu,
  Sidebar: () => Sidebar,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// src/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/button.tsx
var import_react = require("react");
var import_class_variance_authority = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
var Button = (0, import_react.forwardRef)(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, { className: "h-4 w-4 animate-spin" }),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/card.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var CardHeader = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("flex flex-col space-y-1.5", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "h3",
    {
      ref,
      className: cn("font-headline text-xl font-semibold leading-tight tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
var CardDescription = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "p",
    {
      ref,
      className: cn("text-sm text-text-secondary", className),
      ...props
    }
  )
);
CardDescription.displayName = "CardDescription";
var CardContent = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("pt-4", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = (0, import_react3.forwardRef)(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-1.5", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "label",
        {
          htmlFor: inputId,
          className: "text-sm font-medium text-text",
          children: label
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
      error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { id: `${inputId}-error`, className: "text-xs text-semantic-error", role: "alert", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/badge.tsx
var import_react4 = require("react");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
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
var Badge = (0, import_react4.forwardRef)(
  ({ className, variant, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_react5 = require("react");
var import_dialog = require("@base-ui/react/dialog");
var import_jsx_runtime5 = require("react/jsx-runtime");
var DialogRoot = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dialog.Dialog.Root, { ...props, children });
};
var DialogTrigger = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  import_dialog.Dialog.Trigger,
  {
    ref,
    className: cn("cursor-pointer", className),
    ...props
  }
));
DialogTrigger.displayName = "DialogTrigger";
var DialogPortal = import_dialog.Dialog.Portal;
var DialogBackdrop = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  import_dialog.Dialog.Backdrop,
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
var DialogPopup = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  import_dialog.Dialog.Popup,
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
var DialogTitle = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  import_dialog.Dialog.Title,
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
var DialogDescription = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  import_dialog.Dialog.Description,
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
var DialogClose = (0, import_react5.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  import_dialog.Dialog.Close,
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
var import_react6 = require("react");
var import_drawer = require("@base-ui/react/drawer");
var import_jsx_runtime6 = require("react/jsx-runtime");
var SidebarRoot = import_drawer.Drawer.Root;
var SidebarTrigger = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  import_drawer.Drawer.Trigger,
  {
    ref,
    className: cn("cursor-pointer", className),
    ...props
  }
));
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarPortal = import_drawer.Drawer.Portal;
var SidebarBackdrop = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  import_drawer.Drawer.Backdrop,
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
var SidebarPopup = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  import_drawer.Drawer.Popup,
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
var SidebarContent = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  import_drawer.Drawer.Content,
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
var SidebarTitle = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  import_drawer.Drawer.Title,
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
var SidebarDescription = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  import_drawer.Drawer.Description,
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
var SidebarClose = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  import_drawer.Drawer.Close,
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
var SidebarSwipeArea = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  import_drawer.Drawer.SwipeArea,
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
var import_react7 = require("react");
var import_navigation_menu = require("@base-ui/react/navigation-menu");
var import_jsx_runtime7 = require("react/jsx-runtime");
var NavigationMenuRoot = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_navigation_menu.NavigationMenu.Root, { ...props, children });
};
var NavigationMenuTrigger = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Trigger,
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
var NavigationMenuList = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.List,
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
var NavigationMenuItem = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Item,
  {
    ref,
    className: cn("list-none", className),
    ...props
  }
));
NavigationMenuItem.displayName = "NavigationMenuItem";
var NavigationMenuLink = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Link,
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
var NavigationMenuPortal = import_navigation_menu.NavigationMenu.Portal;
var NavigationMenuPositioner = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Positioner,
  {
    ref,
    className: cn("z-[var(--z-dropdown)]", className),
    ...props
  }
));
NavigationMenuPositioner.displayName = "NavigationMenuPositioner";
var NavigationMenuPopup = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Popup,
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
var NavigationMenuContent = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Content,
  {
    ref,
    className: cn("p-2", className),
    ...props
  }
));
NavigationMenuContent.displayName = "NavigationMenuContent";
var NavigationMenuBackdrop = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Backdrop,
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
var NavigationMenuViewport = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Viewport,
  {
    ref,
    className: cn("overflow-hidden", className),
    ...props
  }
));
NavigationMenuViewport.displayName = "NavigationMenuViewport";
var NavigationMenuIcon = (0, import_react7.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  import_navigation_menu.NavigationMenu.Icon,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
