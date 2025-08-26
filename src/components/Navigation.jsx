import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  // --- helpers for cookies ---
  const setThemeCookie = (theme) => {
    document.cookie = `theme=${theme}; path=/; domain=.misterjk.com; max-age=31536000; SameSite=Lax; Secure`;
  };

  const getThemeCookie = () => {
    const match = document.cookie.match(/(?:^|; )theme=([^;]*)/);
    return match ? match[1] : null;
  };

  // Get current path
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Initialize theme
  useEffect(() => {
    const savedTheme = getThemeCookie();
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark-mode", shouldBeDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (!savedTheme) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark-mode", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Toggle theme + write cookie
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark-mode", newTheme);
    setThemeCookie(newTheme ? "dark" : "light");
  };

  const getNavLinkClasses = () => {
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors duration-200";
    return `${baseClasses} text-gray-900 rainbow-text-hover`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/40 pointer-events-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <img
            src="/favicon.png"
            alt="MRJK"
            className="h-16 w-16 object-contain cursor-pointer"
            loading="eager"
            decoding="async"
            onClick={toggleTheme}
          />

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="https://misterjk.com" className={getNavLinkClasses()}>Home</a>
            <a href="https://misterjk.com/link" className={getNavLinkClasses()}>Listen</a>
            <a href="https://misterjk.com/bts" className={getNavLinkClasses()}>BTS</a>
            <a href="https://lyrics.misterjk.com" className={getNavLinkClasses()}>Lyrics</a>
            <a href="/" className={getNavLinkClasses()}>Blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
