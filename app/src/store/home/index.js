//home的小仓库
import { ReqList, ReqBanner,ReqFloor} from "@/api"
// 存数据的
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
}

// 修改state的唯一手段
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
}
// 处理action,写业务逻辑
const actions={
   async categoryList({commit}){
      let result= await  ReqList()
      if(result.data.code==200){
          commit("CATEGORYLIST",result.data)
      }
    },
   async getBannerList({commit}){
      let result= await  ReqBanner()
      if(result.data.code==200){
          commit("GETBANNERLIST",result.data)
      }
    },
   async getFloorList({commit}){
      let result= await  ReqFloor()
      if(result.data.code==200){
          commit("GETFLOORLIST",result.data)
      }
    },

}
// 计算属性，简化仓库
const getters={}

export default{
    state,
    mutations,
    actions,
    getters
}