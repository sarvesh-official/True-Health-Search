// app/providers.tsx
"use client";

import { myNewTheme } from "@/styles/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={myNewTheme}>
      <ColorModeScript initialColorMode={myNewTheme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
