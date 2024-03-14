"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon } from "@/utils/svg/moon";
import { Sun } from "@/utils/svg/sun";
import styles from "./theme-switcher.module.css";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "light" ? (
        <button
          type="button"
          className={styles.button}
          onClick={() => setTheme("dark")}
        >
          <Moon size={20} />
        </button>
      ) : (
        <button
          type="button"
          className={styles.button}
          onClick={() => setTheme("light")}
        >
          <Sun size={20} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
