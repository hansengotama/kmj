import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/login",
            name: "Login",
            component: () => import('../views/page/login/index.vue')
        },
        {
            path: "/admin",
            component: () => import('../views/page/admin/layout/index.vue'),
            children: [
                {
                    path: "user",
                    name: "Manage User",
                    component: () => import('../views/page/admin/user/index.vue')
                },
                {
                    path: "transaction",
                    name: "Manage Transaction",
                    component: () => import('../views/page/admin/transaction/index.vue')
                },
                {
                    path: "transaction-type",
                    name: "Transaction Type",
                    component: () => import('../views/page/admin/transaction-type/index.vue')
                },
                {
                    path: "vihara",
                    name: "VIhara",
                    component: () => import('../views/page/admin/vihara/index.vue')
                }
            ]
        }
    ]
})

export default router
