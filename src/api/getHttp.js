import {http} from './index'
export const getListCar=()=>http({url:'https://api.tf2sc.cn/api/tfcar/car/list?',method:"GET"});