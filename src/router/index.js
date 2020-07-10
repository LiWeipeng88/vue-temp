import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

import common from './modules/common'
import user from './modules/user'
import admin from './modules/admin'

Vue.use(VueRouter)

// Nprogress的基本配置
NProgress.inc(0.6)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const router = new VueRouter({
  routes: [...user, ...admin, ...common]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
