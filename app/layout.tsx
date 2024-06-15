/**
 * @file layout.tsx
 */
"use client";

// Import styles
import "./globals.css";

// Import dependencies
import React, { useState } from "react";
import { Inter } from "next/font/google";

// Import components and utils
import FloatingActionButton from "../components/floating-action-button";
import { LocaleContext } from "./locale-provider";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

// Declare fonts
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-gradient-orange via-gradient-yellow to-gradient-red`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleContext.Provider
            value={{ isEnglish: isEnglish, setIsEnglish: setIsEnglish }}
          >
            <Navigation />
            {children}
            <FloatingActionButton />
          </LocaleContext.Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
