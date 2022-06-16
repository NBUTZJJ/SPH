import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex)
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart"
import user from "./user"
import trade from "./trade";
export default new vuex.Store({
modules:{
    home,
    search,
    detail,
    shopcart,
    user,
    trade
}
})