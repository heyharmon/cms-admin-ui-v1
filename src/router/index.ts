import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// Dashboard
import DashboardPages from '../views/dashboard/DashboardPages.vue'
import DashboardPageBlueprints from '../views/dashboard/DashboardPageBlueprints.vue'
import DashboardFiles from '../views/dashboard/DashboardFiles.vue'
import DashboardMenus from '../views/dashboard/DashboardMenus.vue'

// Pages
import PageEdit from '../views/pages/PageEdit.vue'
// import PageEditBlock from '../views/pages/PageEditBlock.vue'
import PageCreate from '../views/pages/PageCreate.vue'

// Navigation
import Menu from '../views/menu/Menu.vue'

// Preview
import Preview from '../views/preview/Preview.vue'

const routes: Array<RouteRecordRaw> = [
    //
    // Dashboard
    //
    {
        path: '/organizations/:organization/pages',
        name: 'dashboard-pages',
        component: DashboardPages,
        props: true
    },
    {
        path: '/organizations/:organization/page-blueprints',
        name: 'dashboard-page-blueprints',
        component: DashboardPageBlueprints,
        props: true
    },
    {
        path: '/organizations/:organization/files',
        name: 'dashboard-files',
        component: DashboardFiles,
        props: true
    },
    {
        path: '/organizations/:organization/menus',
        name: 'dashboard-menus',
        component: DashboardMenus,
        props: true
    },

    //
    // Pages
    //
    {
        path: '/organizations/:organization/pages/:page',
        name: 'page-edit',
        component: PageEdit,
        props: true
    },
    {
        path: '/organizations/:organization/pages/:page/block/:uuid',
        name: 'page-edit-block',
        component: PageEdit,
        props: true
    },
    {
        path: '/organizations/:organization/pages/:page/block/:uuid/files',
        name: 'page-edit-block-files',
        component: PageEdit,
        props: true
    },
    {
        path: '/organizations/:organization/pages/:page/block/:uuid/wiki',
        name: 'page-edit-block-wiki',
        component: PageEdit,
        props: true
    },
    {
        path: '/organizations/:organization/pages/new',
        name: 'page-create',
        component: PageCreate,
        props: false
    },

    //
    // Navigation
    //
    {
        path: '/organizations/:organization/navigation/:menu',
        name: 'menu',
        component: Menu,
        props: true
    },

    //
    // Preview
    //
    {
        path: '/organizations/:organization/pages/:page/preview',
        name: 'preview',
        component: Preview,
        props: true
    },

    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
})

export default router
