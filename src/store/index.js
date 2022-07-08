import { createStore } from 'vuex'
import {getListCar} from '@/api/getHttp'
const state = {
  Carlist: []
}
const actions = {
  // 获取主页车辆详情
    async reqgetListCar({comment}) {
      let result = await getListCar()
      if (result.status===200) {
        console.log(result);
         commit('REQGETLISTCAR')
      }
    }
}
const mutations = {
    REQGETLISTCAR(state,value){

    }
}
const getters = {}
export default createStore({
  state,
  getters,
  mutations,
  actions
})
