"use client";

import { ReactNode } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function ThemeProvider({ children }: { children: ReactNode }) {

  // colors taken from the Nord theme https://www.nordtheme.com/docs/colors-and-palettes
  const theme = extendTheme({
    colors: {
      night: {
        100: "#4C566A",
        200: "#434C5E",
        300: "#3B4252",
        400: "#2E3440",
      },
      storm: {
        100: "#ECEFF4",
        200: "#E5E9F0",
        300: "#D8DEE9",
      },
      frost: {
        100: "#8FBCBB",
        200: "#88C0D0",
        300: "#81A1C1",
        400: "#5E81AC",
      },
      red: {
        100: "#BF616A",
      },
      orange: {
        100: "#D08770",
      },
      yellow: {
        100: "#EBCB8B",
      },
      green: {
        100: "#A3BE8C",
      },
      purple: {
        100: "#B48EAD",
      },
    },
  });

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
