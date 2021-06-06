import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Profile from "@/views/user/Profile";
import List from "@/views/user/List";

// 嵌套路由, 一个路由中 嵌套一个路由
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }
    ]
})
