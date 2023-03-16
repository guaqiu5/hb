
import Vue from 'vue'
import VueRouter from 'vue-router'
import XHB from '../views/XhbView.vue'
import Index from '../views/IphoneView.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Index,
}, {
    path: '/xhb',
    name: 'xhb',
    component: XHB,
}]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router