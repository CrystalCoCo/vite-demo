import { createRouter, createWebHashHistory } from "vue-router"
const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue') // 建议进行路由懒加载，优化访问性能
}, {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/Demo.vue')
}, {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500.vue')
}, {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404.vue')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
  
export default router