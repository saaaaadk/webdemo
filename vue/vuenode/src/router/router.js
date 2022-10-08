import Home from "@/components/home";
import About from "@/components/about";
import User from "@/components/user/user";
import userprofile from "@/components/user/userprofile";
import userposts from "@/components/user/userposts";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {
        path: '/user/:id(\\d+)',
        component: User,
        children: [{path: 'profile', component: userprofile}, {path: 'posts', component: userposts}]
    }


]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router