import { BASE_TITLE } from '@/config'
export default {
  install(Vue, options) {
    Vue.mixin({
      data() {
        return {
          BASE_TITLE
        }
      },
      methods: {
      }
    })
  }
}
