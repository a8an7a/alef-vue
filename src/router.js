import { createRouter, createWebHistory } from 'vue-router'

import FormsVue from '@/view/FormsVue'
import PreviewVue from '@/view/PreviewVue'

export const router = new createRouter({
    history: createWebHistory(),
    // base: '/alef-vue/'
    base: '/',
    routes: [
        {
            path: '/',
            name: 'FormsVue',
            component: FormsVue,
        },
        {
            path: '/preview',
            name: 'PreviewVue',
            component: PreviewVue,
        },
    ],
})
