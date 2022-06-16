import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'
export default [
    {
        path: "/center",
        component: Center,
        meta: { show: true },
        name:'center',
        //二级路由组件
        children:[
            {
                path:'myorder',
                component:myOrder
            },
            {
                path:'grouporder',
                component:groupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true },
        name:'paysuccess'
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },
        name:'pay',
        beforeEnter: (to, from,next) => {
            // reject the navigation
            if(from.path=="/trade" || from.path=='/login'){
                next()
            }
            else{
                next(false)
            }
          },
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true },
        name:'trade',
        beforeEnter: (to, from,next) => {
            // reject the navigation
            if(from.path=="/shopcart" || from.path=='/login'){
                next()
            }
            else{
                next(false)
            }
          },
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true },
        name:'shopcart'
    },
    {
        path: "/addcartsuccess",
        component: AddCartSuccess,
        meta: { show: true },
        name:'addcartsuccess'
    },
    {
        path: "/home",
        component:()=>import ('@/pages/Home'),//路由懒加载
        meta: { show: true }
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true },
        name: "search",
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    //重定向
    {
        path: '*',
        redirect: '/home'
    }
]