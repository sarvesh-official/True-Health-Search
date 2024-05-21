import { extendTheme } from "@chakra-ui/react";

export const myNewTheme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors: {
    primary: "#0360D9",
    secondary: "#000",
    background: {
      light: "#fff",
      // dark: "#000",
    },

    warning: "#FFC75F",
    danger: "#C34A36",
  },
  fonts: {
    nav: "IBM Plex Sans",
  },
  styles: {
    global: (props: any) => ({
      body: {
        // bg: props.colorMode === "dark" ? "#000000" : "white",
      },
    }),
  },
});
