console.log('hello vitest');
import matchers from '@testing-library/jest-dom/matchers'; // 拡張マッチャーをimport
import { expect } from 'vitest';

expect.extend(matchers); // expectのextendメソッドに拡張マッチャーを指定して拡張
