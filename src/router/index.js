import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home

        },
        {
            path: '/admin',
            component: () => import('../views/Admin.vue')


        },
        {
            path: '/maintenance',
            component: () => import('../views/Log.vue')

        },
        {
            path: '/team',
            component: () => import('../views/Team.vue')

        },
        {
            path: '/ticket',
            component: () => import('../views/Ticket.vue')
            //meta: { requiresAuth: true }

        },
        {
            path: '/help',
            component: () => import('../views/Documentation.vue')

        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')


        },
    ],
})
router.beforeEach((to) => {
    // only redirect to 'Home'
    // if we're not already on it
    if (to.meta.requiresAuth == true) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
})
export default router
