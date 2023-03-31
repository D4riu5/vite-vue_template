import { createRouter, createWebHistory } from "vue-router";

// pages
import AppHomepage from './pages/AppHomepage.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHomepage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export { router };
