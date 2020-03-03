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
            path: "/register",
            name: "Register",
            component: () => import('../views/page/register/index.vue')
        },
        {
            path: "/register-verification",
            name: "Register Verification",
            component: () => import('../views/page/register/verification.vue')
        },
        {
            path: "/",
            name: "Home",
            component: () => import('../views/page/home/index.vue')
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
                    name: "Transaction",
                    component: () => import('../views/page/admin/transaction/index.vue')
                },
                {
                    path: "edit-transaction",
                    name: "Edit Transaction",
                    component: () => import('../views/page/admin/transaction/edit.vue')
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
            path: "/user",
            component: () => import('../views/page/user/layout/index.vue'),
            children: [
                {
                    path: "donation-form",
                    name: "Donation Form",
                    component: () => import('../views/page/user/form/donation.vue')
                },
                {
                    path: "vihara-form",
                    name: "Vihara Form",
                    component: () => import('../views/page/user/form/vihara.vue')
                },
                {
                    path: "verification-form",
                    name: "Verification Form",
                    component: () => import('../views/page/user/form/verification.vue')
                },
                {
                    path: "how-to-use",
                    name: "How To Use",
                    component: () => import('../views/page/user/how-to-use/index.vue')
                },
                {
                    path: "how-to-pay",
                    name: "How To Pay",
                    component: () => import('../views/page/user/how-to-pay/index.vue')
                },
                {
                    path: "home",
                    name: "User Home",
                    component: () => import('../views/page/user/home/index.vue')
                },
                {
                    path: "information",
                    name: "Information Form",
                    component: () => import('../views/page/user/form/information.vue')
                }
            ]
        },
        {
            path: "/cashier",
            component: () => import('../views/page/cashier/layout/index.vue'),
            children: [
                {
                    path: "home",
                    name: "Cashier Home",
                    component: () => import('../views/page/cashier/home/index.vue')
                },
                {
                    path: "user",
                    name: "Cashier User",
                    component: () => import('../views/page/cashier/user/index.vue')
                },
                {
                    path: "transaction",
                    name: "Cashier Transaction",
                    component: () => import('../views/page/cashier/transaction/index.vue')
                },
                {
                    path: "transaction-detail",
                    name: "Cashier Transaction Detail",
                    component: () => import('../views/page/cashier/transaction-detail/index.vue')
                },
            ]
        }

    ]
})

export default router
