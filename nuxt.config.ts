// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-lodash',
    "@sidebase/nuxt-auth",
    '@element-plus/nuxt',
  ],
  dayjs: {
    locales: ['zh-cn'],
    plugins: [
      'relativeTime',
      'utc',
      'timezone',
      'customParseFormat',
    ],
    defaultLocale: 'zh-cn',
    defaultTimezone: 'Asia/Shanghai',
  },
  auth: {
    provider: {
      type: 'local'
    }
  }
})