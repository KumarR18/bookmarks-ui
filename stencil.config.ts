import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";
import nodePolyfills from 'rollup-plugin-node-polyfills';


export const config: Config = {
    globalStyle: 'src/global/app.scss',
    globalScript: 'src/global/app.ts',
    rollupPlugins: {
        after: [
          nodePolyfills(),
        ]
      },
    taskQueue: 'async',
    outputTargets: [
        {
            type: 'www',
            serviceWorker: null,
            baseUrl: 'https://myapp.local/',
        },
    ],
    plugins: [
        sass({
            includePaths: ["./node_modules/"],
        }),
    ]
};
