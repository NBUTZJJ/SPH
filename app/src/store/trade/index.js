//search的小仓库
import { ReqUserAddress,ReqTradeInfo} from "@/api"

// 存数据的
const state = {
    address:[],
    tradeInfo:[]
}
// 修改state的唯一手段
const mutations = {
    GETUSERADDRESS(state,address){
        state.address=address
    },
    GETTRADEINFO(state,tradeInfo){
        state.tradeInfo=tradeInfo
    }
}
// 处理action,写业务逻辑
const actions = {

  async  getUserAddress({commit}){
        let result=await ReqUserAddress()
        if(result.data.code==200){
            commit("GETUSERADDRESS",result.data.data)
        }
    },
  async  getTradeInfo({commit}){
        let result=await ReqTradeInfo()
        if(result.data.code==200){
            commit("GETTRADEINFO",result.data.data)
        }
    },



}
// 计算属性，简化仓库
const getters = {


}

export default {
    state,
    mutations,
    actions,
    getters
}