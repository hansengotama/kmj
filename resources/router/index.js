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
                    name: "User",
                    component: () => import('../views/page/admin/user/index.vue')
                },
                {
                    path: "add-user",
                    name: "Add User",
                    component: () => import('../views/page/admin/user/add.vue')
                },
                {
                    path: "edit-user",
                    name: "Edit User",
                    component: () => import('../views/page/admin/user/edit.vue')
                },

                {
                    path: "transaction",
                    name: "Manage Transaction",
                    component: () => import('../views/page/admin/transaction/index.vue')
                },

                {
                    path: "payment-type",
                    name: "Payment Type",
                    component: () => import('../views/page/admin/payment-type/index.vue')
                },
                {
                    path: "add-payment-type",
                    name: "Add Payment Type",
                    component: () => import('../views/page/admin/payment-type/add.vue')
                },
                {
                    path: "edit-payment-type",
                    name: "Edit Payment Type",
                    component: () => import('../views/page/admin/payment-type/edit.vue')
                },

                {
                    path: "vihara",
                    name: "Vihara",
                    component: () => import('../views/page/admin/vihara/index.vue')
                },
                {
                    path: "add-vihara",
                    name: "Add Vihara",
                    component: () => import('../views/page/admin/vihara/add.vue')
                },
                {
                    path: "edit-vihara",
                    name: "Edit Vihara",
                    component: () => import('../views/page/admin/vihara/edit.vue')
                }
            ]
        },
        {
            path: "/",
            name: "Form",
            component: () => import('../views/page/user/form/index.vue')
        },
        {
            path: "/donation-form",
            name: "Donation Form",
            component: () => import('../views/page/user/form/donation.vue')
        },
        {
            path: "/vihara-form",
            name: "Vihara Form",
            component: () => import('../views/page/user/form/vihara.vue')
        },
        {
            path: "/verification-form",
            name: "Verification Form",
            component: () => import('../views/page/user/form/verification.vue')
        },
    ]
})

export default router
