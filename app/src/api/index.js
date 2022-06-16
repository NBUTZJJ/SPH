
import requests from "./request";
import mockRqeusets from "./mockRequest"
export const ReqList=()=>{
    return requests({url:'/api/product/getBaseCategoryList', method:'get'})
}
export const ReqBanner=()=>{  
    return mockRqeusets({url:'/banner', method:'get'})
}
export const ReqFloor=()=>{
    return mockRqeusets({url:'/floor',method:'get'})
}
//搜索模块数据
export const ReqSearchInfo=(params)=>{
return requests({url:"/api/list",method:'post',data:params})
}
//商品详细信息
export const ReqGoodsInfo=(skuId)=>{
return requests({url:`/api/item/${skuId}`,method:'get'})
}
//添加或更新购物车
export const ReqAddorUpdateShopCart=(skuId,skuNum)=>{
    return requests({url:`/api/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
}
//获取购物车数据接口
export const ReqShopCart=()=>{
    return requests({url:"/api/cart/cartList",method:'get'})
}
//删除购物车数据接口
export const ReqDelShopCart=(skuId)=>{
    return requests({url:`/api/cart/deleteCart/${skuId}`,method:'delete'})
}
//修改商品选中状态
export const ReqChangeChecked=(skuId,isChecked)=>{
    return requests({url:`/api/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
}
//用户注册获取验证码
export const ReqGetCode=(phone)=>{
    return requests({url:`/api/user/passport/sendCode/${phone}`,method:'get'})
}
//用户注册
export const ReqRegister=(data)=>{
    return requests({url:"/api/user/passport/register",data,method:'post'})
}
//用户登录
export const ReqUserLogin=(data)=>{
    return requests({url:"/api/user/passport/login",data,method:'post'})
}
//获取用户信息
export const ReqUserInfo=()=>{
    return requests({url:"/api/user/passport/auth/getUserInfo",method:'get'})
}
//退出登录
export const ReqUserLogout=()=>{
    return requests({url:"/api/user/passport/logout",method:'get'})
}
//获取用户地址
export const ReqUserAddress=()=>{
    return requests({url:"/api/user/userAddress/auth/findUserAddressList",method:'get'})
}
//获取订单交易
export const ReqTradeInfo=()=>{
    return requests({url:"/api/order/auth/trade",method:'get'})
}
//提交订单
export const ReqSubmitTrade=(tradeNo,data)=>{
    return requests({url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
}
//获取订单支付信息
export const ReqPayInfo=(orderId)=>{
    return requests({url:`/api/payment/weixin/createNative/${orderId}`,method:'get'})
}
//获取订单支付状态
export const ReqPayStatus=(orderId)=>{
    return requests({url:`/api/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
}
//获取订单列表
export const ReqMyOrderList=(page,limit)=>{
    return requests({url:`/api/order/auth/${page}/${limit}`,method:'get'})
}