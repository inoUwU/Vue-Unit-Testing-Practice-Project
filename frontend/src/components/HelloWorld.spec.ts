import HelloWorldVue from './HelloWorld.vue';
import {
    render,
    screen,
    waitFor,
    fireEvent,
    prettyDOM,
    cleanup,
} from '@testing-library/vue';
import {
    describe,
    vi,
    it,
    expect,
    beforeAll,
    afterAll,
    afterEach,
    beforeEach,
} from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

// // Get baseurl in .env.dev
// const baseUrl = process.env.VUE_BASE_URL;

// // Create a rest mock api server with todos endpoint using mock service worker
// const server = setupServer(
//     rest.get(`${baseUrl} +'/' + todos`, (req, res, ctx) => {
//         return res(
//             ctx.json([
//                 {
//                     id: 1,
//                     title: 'test',
//                     completed: false,
//                 },
//             ])
//         );
//     })
// );
// beforeAll(() => server.listen());
// afterAll(() => server.close());

describe('HelloWorld.vue', () => {
    it('カウントアップボタンにフォーカスする', async () => {
        const { getByTestId } = render(HelloWorldVue, {
            props: {
                msg: 'test',
            },
        });
        await waitFor(async () => {
            expect(getByTestId('countup-button')).toHaveFocus();
        });
    });

    it('データテーブルを表示する', async () => {
        const { getByTestId } = render(HelloWorldVue, {
            global: {
                plugins: [PrimeVue],
                components: {
                    DataTable,
                    Column,
                },
            },
            props: {
                msg: 'test',
            },
        });
        await waitFor(async () => {
            expect(getByTestId('data-table')).toBeInTheDocument();
        });
    });
});
