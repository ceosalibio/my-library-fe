import { createRouter, createWebHistory  } from 'vue-router'

import Home from './views/Home.vue'
import Create from './views/Create.vue'
import Content from './views/Content.vue'
import Update from './views/Update.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    {
        path : '/',
        name: 'home',
        component : Home
    },
    {
        path : '/create',
        name: 'create',
        component : Create
    },
    {
        path : '/content',
        name: 'content',
        component : Content
    },
    {
        path : '/update',
        name: 'update',
        component : Update
    },
    {
        path : '/:catchAll(.*)',
        name: 'not-found',
        component : NotFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    
})

export default router;
