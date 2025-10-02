"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex items-center justify-center rounded-md px-3 py-2 text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="relative h-5 w-5">
        <AnimatePresence initial={false} mode="wait">
          {!isDark ? (
            <motion.span
              key="sun"
              initial={{ scale: 0.6, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.6, rotate: 45, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                <path d="M12 2v2m0 16v2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42M18.36 5.64l1.42-1.42M5.64 18.36l-1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ scale: 0.6, rotate: 45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.6, rotate: -45, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}

export function AnimatedThemeTogglerDemo() {
  return (
    <div>
      <AnimatedThemeToggler />
    </div>
  );
}
