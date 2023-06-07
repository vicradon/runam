import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1F403C",
    800: "#2E615A",
    700: "#3D8177",
    600: "#4DA195",
    500: "#5CC1B3",
    400: "#77CBC0",
    300: "#92D6CC",
    200: "#AEE0D9",
    100: "#C9EAE6",
    50: "#DEF3F0",
  },
  neutral: {
    900: "#030303",
    800: "#050505",
    700: "#070707",
    600: "#080808",
    500: "#0A0A0A",
    400: "#333333",
    300: "#5C5C5C",
    200: "#858585",
    100: "#ADADAD",
    50: "#CECECE",
  },
};

const Heading = {
  sizes: {
    xl: {
      fontSize: "4xl",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
    lg: {
      fontSize: "3xl",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
    md: {
      fontSize: "2xl",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
    sm: {
      fontSize: "xl",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
  },
  defaultProps: {
    size: "sm",
  },
};

const Button = {
  sizes: {
    xl: {
      fontSize: "4xl",
      fontWeight: "bold",
      padding: "1rem 2rem",
    },
  },
};

const theme = extendTheme({
  colors,
  components: {
    Heading,
    // Button,
  },
});

export default theme;
