import { extendTheme } from "@chakra-ui/react";

// Simple Chakra theme for legacy sub-apps (behavior-buzz, etc.)
// Main homepage uses Tailwind CSS + shadcn/ui
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
};

export const theme = extendTheme({
    colors,
    fonts: {
        heading: "var(--font-inter), Inter, sans-serif",
        body: "var(--font-inter), Inter, sans-serif",
    },
    styles: {
        global: {
            body: {
                bg: "white",
            }
        }
    },
});

export default theme;
