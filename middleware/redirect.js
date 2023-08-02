// export default defineNuxtRouteMiddleware((to, from) => {})
export default function ({ route, redirect }) {
    if (route.path === '/') {
      return redirect('/dashboard')
    }
  }