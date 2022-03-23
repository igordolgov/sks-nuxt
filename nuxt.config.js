import colors from 'vuetify/es5/util/colors'

export default {
    // Отключить рендеринг на стороне сервера: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // Цель развертывания для Nuxt: https://go.nuxtjs.dev/config-target
    // 'server'для рендеринга на стороне сервера или 'static' для статических сайтов
    target: 'server',

    // Секция <head> главной страницы: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '',
        title: 'sksavia',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Глобальная CSS: https://go.nuxtjs.dev/config-css
    css: [
        // '@/node_modules/vuetify/dist/vuetify.min.css'
    ],

    // Плагины для запуска перед отображением страницы: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Автоматический импорт компонентов: https://go.nuxtjs.dev/config-components
    components: true,

    // Модули для разработки и сборки (рекомендуется): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Модули: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Конфигурация модуля Axios: https://go.nuxtjs.dev/config-axios
    axios: {
        // Обходной путь, позволяющий избежать применения жестко закодированных localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/', // Базовый url
    },

    // Конфигурация модуля Vuetify: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                // dark: {
                //     primary: '#006699',
                //     accent: colors.grey.darken3,
                //     secondary: colors.amber.darken3,
                //     info: colors.teal.lighten1,
                //     warning: colors.amber.base,
                //     error: colors.deepOrange.accent4,
                //     success: colors.green.accent3,
                // },
                light: {
                    primary: '#006699',
                    accent: colors.grey.darken3,
                    secondary: 'colors.blue.darken3',
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Конфигурация сборки (расширение Вебпака): https://go.nuxtjs.dev/config-build
    build: {},
}