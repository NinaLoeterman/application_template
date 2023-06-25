import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider.component";
import { QueryProvider } from "./query-provider.component";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
