import { defineMiddleware } from 'astro:middleware';
import { locales, defaultLocale, getLocaleFromPath } from '../i18n/config';

const BASE_PATH = '/ai-tools-hub';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, locals, redirect } = context;

  // 剥离 base path
  const pathname = url.pathname.replace(BASE_PATH, '') || '/';
  const normalizedPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;

  // 设置 locale
  const locale = getLocaleFromPath(normalizedPathname);
  locals.locale = locale;

  // 如果 URL 包含语言前缀但不是默认语言，不处理
  if (locale !== defaultLocale && normalizedPathname.startsWith(`/${locale}/`)) {
    return next();
  }

  // 如果 URL 包含默认语言前缀，重定向到无前缀版本
  if (locale === defaultLocale && locales.some(l => normalizedPathname.startsWith(`/${l}/`))) {
    const newPath = normalizedPathname.replace(`/${defaultLocale}`, '') || '/';
    return redirect(`${BASE_PATH}${newPath}`, 301);
  }

  return next();
});