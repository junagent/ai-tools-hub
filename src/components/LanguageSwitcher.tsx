'use client';

import { useState, useEffect } from 'react';
import type { Locale } from '../i18n/config';

interface LanguageSwitcherProps {
  locale: Locale;
}

const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
};

const localeFlags: Record<Locale, string> = {
  zh: '🇨🇳',
  en: '🇺🇸',
};

export default function LanguageSwitcher({ locale: initialLocale }: LanguageSwitcherProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && ['zh', 'en'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      setLocaleState(initialLocale);
    }
  }, [initialLocale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;

    // Update URL without reload
    const path = window.location.pathname;
    const newPath = newLocale === 'zh'
      ? path.replace(/^\/en/, '')
      : path.startsWith('/en') ? path : `/en${path}`;
    window.history.pushState({}, '', newPath);

    setOpen(false);
  };

  if (!mounted) {
    return (
      <div class="relative inline-block">
        <button
          class="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Language"
          disabled
        >
          <span class="text-base">{localeFlags[initialLocale]}</span>
          <span>{localeNames[initialLocale]}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div class="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        class="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span class="text-base">{localeFlags[locale]}</span>
        <span>{localeNames[locale]}</span>
        <svg class="w-4 h-4 transition-transform {open ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          <div
            class="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul
            class="absolute right-0 top-full mt-1.5 min-w-[120px] rounded-lg bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-20 animate-fade-in"
            role="listbox"
            aria-label="Select language"
          >
            {(['zh', 'en'] as Locale[]).map((l) => (
              <li key={l}>
                <button
                  onClick={() => setLocale(l)}
                  role="option"
                  aria-selected={l === locale}
                  class="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 {l === locale ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : ''}"
                >
                  <span class="text-base">{localeFlags[l]}</span>
                  <span>{localeNames[l]}</span>
                  {l === locale && (
                    <svg class="ml-auto w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}