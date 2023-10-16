import { createMultiStyleConfigHelpers, extendTheme } from "@chakra-ui/react";
import { accordionAnatomy } from "@chakra-ui/anatomy";
// import '../styles/globals.css'; 
// import './tw.css';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
    container: {
        border: 'none',
    }
});

const accordionTheme = defineMultiStyleConfig({ baseStyle });

// Set theme for Chakra UI
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

export const theme = extendTheme({
    colors,
    fonts: {
        heading: "Open Sans",
        body: "Raleway",
    },
    styles: {
        global: {
            body: {
                bg: "Snow",
            }
        }
    },
    components: { Accordion: accordionTheme }
});

export default theme;