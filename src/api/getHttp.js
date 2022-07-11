import { http } from './index'
// 主页数据
export const getListCar = () =>
  http({ url: '/api/tfcar/car/list?', method: 'GET' })
export const getCarShow = () =>
  http({ url: '/api/tfcar/website/allNews', method: 'GET' })
// 搜索页数据
export const getSelectModel = () =>
  http({ url: '/api/tfcar/car/model', method: 'GET' })
export const getMoreScreen = () =>
  http({ url: '/api/tfcar/car/moreScreen', method: 'GET' })
export const getConvenient = () =>
  http({ url: '/api/tfcar/car/convenient', method: 'GET' })
export const getDetail = (x) =>
  http({ url: '/api/tfcar/car/getCarBasicInfoVo/' + x, method: 'GET' })
export const getDetailone = (x) =>
  http({ url: `/api/tfcar/car/basicInfo/` + x, method: 'GET' })
// 腾发服务
export const getFuWu = () => http({url:'/api/tfcar/website/tengfaService',method:'GET'}) 
// app升级服务页面
export const getAppNew = (id) => http({url:'/api/tfcar/website/news/'+id,method:'GET'})
