// import { NuxtCookies } from 'cookie-universal-nuxt'
// import Vue from 'vue'

import '@nuxt/types'
import Vue from 'vue'


import { NuxtCookies } from 'cookie-universal-nuxt'

declare module '*.vue' {
  export default Vue
}

declare module '@nuxt/types' {
  interface Context {
    $cookies: NuxtCookies
  }
}
