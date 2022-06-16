//search的小仓库
import { ReqSearchInfo } from "@/api"
// 存数据的
const state = {
    searchList:{},
}
// 修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state,searchList){
        
        state.searchList=searchList;
    }
}
// 处理action,写业务逻辑
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await ReqSearchInfo(params)
        
        if (result.data.code == 200) {
            
            commit('GETSEARCHLIST',result.data)
        }
    }
}
// 计算属性，简化仓库
const getters = {
    goodsList(state){
        
        return state.searchList.data || [];
    },
    attrsList(state){
        return state.searchList.data || [];
    },
    trademarkList(state){
        return state.searchList.data || [];
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}