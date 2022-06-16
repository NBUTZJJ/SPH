
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes';
import store from '@/store';
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
let router = new VueRouter({
    // 配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})
//全局路由守卫
router.beforeEach(async (to, from, next) => {
    // ...
    // 返回 false 以取消导航
    //放行函数
    let token = store.state.user.token
    let username = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/')
        }
        else {
            if (username) {
                next()
            }
            else {
                try {
                    await store.dispatch("getUserInfo")
                    next()
                } catch (error) {
                   await store.dispatch("userLogout")
                    next('/login')
                }
            }
        }
    }
    else {
        let toPath=to.path
        if(toPath=='/trade' || toPath.indexOf('pay')!=-1 || toPath.indexOf('center')!=-1){
            next('/login?redirect='+toPath)
        }
        else{

            next()
        }
    }
    
})
export default router