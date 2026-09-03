"use client";
import { createContext, useContext, useEffect, useCallback, useSyncExternalStore, ReactNode } from "react";

export type Lang = "en" | "hi";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "jk-lang";
const CHANGE_EVENT = "jk-lang-change";

function isLang(v: string | null): v is Lang {
  return v === "en" || v === "hi";
}

// In-memory fallback so toggling still works when localStorage is blocked
// or throws (e.g. private browsing with site data disabled) — the choice
// just won't survive a reload in that case.
let memoryLang: Lang = "en";

function getSnapshot(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    return memoryLang;
  }
  return memoryLang;
}

function getServerSnapshot(): Lang {
  return "en";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((l: Lang) => {
    memoryLang = l;
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "hi" : "en");
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Returns t(en, hi) — picks the right string for the active language. */
export function useT() {
  const { lang } = useLanguage();
  return useCallback((en: string, hi: string) => (lang === "hi" ? hi : en), [lang]);
}

/** For bilingual data objects: pick({ en: "...", hi: "..." }) */
export function usePick() {
  const { lang } = useLanguage();
  return useCallback(<T,>(pair: { en: T; hi: T }) => (lang === "hi" ? pair.hi : pair.en), [lang]);
}
