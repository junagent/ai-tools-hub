import type { Locale } from './config';
import { zh } from './zh';
import { en } from './en';

export type Translation = typeof zh;

const translations: Record<Locale, Translation> = {
  zh,
  en,
};

export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations.zh;
}

export function t(locale: Locale, key: string): string {
  const translation = getTranslation(locale);
  const keys = key.split('.');
  let value: unknown = translation;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function getCategoryTranslation(locale: Locale, categoryId: string) {
  const translation = getTranslation(locale);
  return translation.categories[categoryId as keyof typeof translation.categories] || {
    name: categoryId,
    description: '',
    count: '',
  };
}

export function getPricingLabel(locale: Locale, pricing: string): string {
  const translation = getTranslation(locale);
  return translation.pricingLabels[pricing as keyof typeof translation.pricingLabels] || pricing;
}