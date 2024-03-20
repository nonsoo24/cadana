import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import {DEFAULT_TITLE} from "../utils/constant"

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  router.afterEach((to) => {
    document.title = to.meta.pageTitle ||  to.meta.title || DEFAULT_TITLE;
})
  export default router