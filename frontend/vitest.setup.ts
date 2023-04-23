import matchers from '@testing-library/jest-dom/matchers'; // 拡張マッチャーをimport
import { expect, vi } from 'vitest';
import { config } from '@vue/test-utils';
import PrimeVue from 'primevue/config';

expect.extend(matchers); // expectのextendメソッドに拡張マッチャーを指定して拡張

// config.plugins.DOMWrapper.install();
