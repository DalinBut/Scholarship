// import nuxtSanctumAuth from '../dist/module'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss',
      // '@nuxtjs/axios',
      // '@nuxtjs/auth-next'
    ],
    // loading: {
    //   color: 'blue', // Customize the color of the loading indicator
    //   height: '2px', // Customize the height of the loading indicator
    //   continuous: true, // Show the loading indicator for async operations that take longer than the "duration" option
    // },
    // Route Redirect
    routeRules: {
      '/': { redirect: '/dashboard' },
    },
    // auth: {
    //   strategies: {
    //     laravelSanctum: {
    //       provider: 'laravel/sanctum',
    //       url: 'http://localhost:8000'
    //     },
    //   },
    // },
    // 
    // nuxtSanctumAuth: {
    //   token: false, // set true to test jwt-token auth instead of cookie
    //   baseUrl: 'http://localhost:8000',
    //   endpoints: {
    //     csrf: '/sanctum/csrf-cookie',
    //     login: '/login',
    //     logout: '/logout',
    //     user: '/user'
    //   },
    //   redirects: {
    //     home: '/account',
    //     login: '/auth/login',
    //     logout: '/'
    //   }
    // }
});

