import {http} from './index'
// 主页数据
export const getListCar=()=>http({url:'/api/tfcar/car/list?',method:"GET"});
export const getCarShow=()=>http({url:'/api/tfcar/website/allNews',method:'GET'});
// 搜索页数据
export const getSelectModel=()=>http({url:'/api/tfcar/car/model',method:'GET'});
export const getMoreScreen=()=>http({url:'/api/tfcar/car/moreScreen',method:'GET'});
export const getConvenient=()=>http({url:'/api/tfcar/car/convenient', method:'GET'})