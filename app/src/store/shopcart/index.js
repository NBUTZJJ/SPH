//search的小仓库
import { ReqShopCart, ReqDelShopCart, ReqChangeChecked } from "@/api"
// 存数据的
const state = {
    cartList: []
}
// 修改state的唯一手段
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
// 处理action,写业务逻辑
const actions = {

    async getCartList({ commit }) {
        let result = await ReqShopCart()
        if (result.data.code == 200) {
            commit('GETCARTLIST', result.data.data)
        }
    },

    async delCartList({ commit }, skuId) {
        let result = await ReqDelShopCart(skuId)
        if (result.data.code == 200) {
            return "ok"
        }
        else {
            return Promise.reject(new Error("faile"))
        }
    },
    async changeChecked({ commit }, { skuId, isChecked }) {

        let result = await ReqChangeChecked(skuId, isChecked)
        if (result.data.code == 200) {
            return "ok"
        }
        else {
            return Promise.reject(new Error("faile"))
        }
    },
    deleteAllChecked({ dispatch, getters }) {
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(element => {
            if (element.isChecked == 1) {
                let promise = dispatch("delCartList", element.skuId)
                promiseAll.push(promise)
            }
        });
        return Promise.all(promiseAll)
    },
    //全选
    allCheck({dispatch,getters},checked){
        let promiseAll=[]
        getters.cartList.cartInfoList.forEach(element => {
            let promise=dispatch("changeChecked",{skuId:element.skuId,isChecked:checked})
            promiseAll.push(promise)
        });
return Promise.all(promiseAll)
    }
}
// 计算属性，简化仓库
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }


}

export default {
    state,
    mutations,
    actions,
    getters
}