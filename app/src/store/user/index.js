//search的小仓库
import { ReqGetCode, ReqRegister, ReqUserLogin, ReqUserInfo, ReqUserLogout } from "@/api"
// 存数据的
const state = {
    code: '',
    token: localStorage.getItem("token"),
    userInfo: {}
}
// 修改state的唯一手段
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token=''
        state.userInfo={}
        localStorage.removeItem("token")
    }
}
// 处理action,写业务逻辑
const actions = {

    async getCode({ commit }, phone) {
        let result = await ReqGetCode(phone)
        if (result.data.code == 200) {
            commit('GETCODE', result.data.data)

            return 'ok'
        }
        else {
            return Promise.reject(new Error("faile"))
        }
    },
    //用户注册
    async register({ commit }, user) {
        let result = await ReqRegister(user)
        if (result.data.code == 200) {
            return 'ok'
        }
        else {
            return Promise.reject(new Error("faile"))
        }

    },
    //用户登录
    async userLogin({ commit }, data) {
        let result = await ReqUserLogin(data)

        if (result.data.code == 200) {

            commit("USERLOGIN", result.data.data.token)
            localStorage.setItem("token", result.data.data.token)
            return 'ok'
        }
        else {
            return Promise.reject(new Error("faile"))
        }
    },
    async getUserInfo({ commit }) {
        let result = await ReqUserInfo()
        if (result.data.code == 200) {
            commit("GETUSERINFO", result.data.data)
            return 'ok'
        }
        else{
            return Promise.reject(new Error("faile"))
        }

    },
    //退出登录
    async userLogout({ commit }) {
        let result = await ReqUserLogout()
        
        
        if(result.data.code==200){
            commit("CLEAR")
            
            return 'ok'
        }
        else{
            
            return Promise.reject( new Error("faile"))
        }
    }

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