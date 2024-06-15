/**
 * @file locale-provider.ts
 */
"use client";

import { createContext } from 'react';

export const LocaleContext = createContext({ isEnglish: true, setIsEnglish: isEnglish => !isEnglish});