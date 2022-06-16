import { ReqAddorUpdateShopCart, ReqGoodsInfo } from "@/api"
import {getUUID} from "@/utils/uuid_token"
const state = {
    goodInfo: {},
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo.data
    }
}
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await ReqGoodsInfo(skuId)

        if (result.data.code == 200) {
            commit('GETGOODINFO', result.data)
        }

    },
    async addorUpdateShopCart({ commit }, { skuId, skuNum }) {
        //加入购物车返回的结果
        let result = await ReqAddorUpdateShopCart(skuId, skuNum)
        //成功
        if(result.data.code==200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}