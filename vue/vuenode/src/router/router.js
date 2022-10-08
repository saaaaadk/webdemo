import Home from "@/components/home";
import About from "@/components/about";
import User from "@/components/user/user";
import userprofile from "@/components/user/userprofile";
import userposts from "@/components/user/userposts";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/home', redirect: '/'},
    // {path: '/about', component: About, alias: '/myabout'},
    {
        path: '/', components: {
            default: Home,
            leftside: Home
        }, name: 'home'
    },
    {
        path: '/about', components: {
            default: About,
            leftside: About
        }, name: 'about', alias: '/myabout',
    },
    {
        path: '/user/:id(\\d+)',
        name: 'user',
        component: User,
        props: true,
        children: [{path: 'profile', component: userprofile}, {path: 'posts', component: userposts}]
    }
]
// router.addRoute({path:'/tem',components:{default:about}})
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})
router.beforeEach((to,from)=>{
    console.log(to)
    console.log(from)
    // return false/
    // if (to.name !=='about')return false;
})
export default router
// router.addRoute({path:'/tem',components:{default:about}})
