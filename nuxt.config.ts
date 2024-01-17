export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: [
      'composables'
    ]
  },
  modules: [
    '@element-plus/nuxt',
    'nuxt-svgo',
    '@pinia/nuxt'
  ],
  routeRules: {
    '/api/**': {
      proxy: 'http://localhost:3001/api/**'
    }
  },
  svgo: {
    autoImportPath: '~/assets/icons/'
  },
  css: ['~/assets/less/global.less'],
  plugins: [
    '~/plugins/globalErrorHandler.js',
    '~/plugins/MessageBox/index.ts',
    '~/plugins/Axios/index.ts',
  ],
})