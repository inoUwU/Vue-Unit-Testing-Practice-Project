import HelloWorldVue from './HelloWorld.vue';
import {
    render,
    screen,
    waitFor,
    fireEvent,
    prettyDOM,
} from '@testing-library/vue';
import { describe, vi, it, expect } from 'vitest';
import { nextTick } from 'vue';

const spyFetch = vi.spyOn(global, 'fetch');
describe('HelloWorld.vue', async () => {
    it('カウントアップボタンにフォーカスする', async () => {
        const view = render(HelloWorldVue, {
            props: {
                msg: 'test',
            },
        });
        await waitFor(async () => {
            const btn = screen.getByTestId('countup-button');
            expect(btn).toHaveFocus();
        });
    });
});
