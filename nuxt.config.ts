export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    'nuxt-svgo',
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
    '~/plugins/MessageBox/index.ts',
    '~/plugins/Axios/index.ts',
  ],
})