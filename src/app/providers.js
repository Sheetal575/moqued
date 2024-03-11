"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import theme from "./theme.ts";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
    //   attribute="class"
    //   defaultTheme="light"
    //   enableSystem={false}
    //   themes={["light", "dark"]}
    //   theme={theme}
    >
      {children}
    </ThemeProvider>
  );
}
