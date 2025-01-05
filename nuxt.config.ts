// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig( {
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        // for pinia
        '@pinia/nuxt'
    ],
    // for tailwind
    css: [ '~/assets/css/main.css' ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
    },
    // for typescript
    typescript: {
        typeCheck: true,
        strict: false
    },
    // for app metadata
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    }
} )
