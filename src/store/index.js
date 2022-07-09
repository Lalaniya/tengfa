import { createStore } from 'vuex'
import { getListCar, getCarShow , getSelectModel, getMoreScreen , getConvenient} from '@/api/getHttp'
const state = {
  Carlist: [],
  CarShow: [],
  CarSelect: []
}
const actions = {
  // 获取主页车辆详情
  async reqgetListCar({ commit }) {
    let result = await getListCar()
    if (result.status === 200) {
      commit('REQGETLISTCAR', result.data.data)
    }
  },
  // 车展详情
  async reqgetListCarShow({ commit }) {
    let result = await getCarShow()
    if (result.status === 200) {
      commit('REQGETLISTCARSHOW', result.data.data)
    }
  },
  // 搜索页 选择框
  async reqgetCarSelect({commit}) {
    let result = await getSelectModel()
    let resiltone = await getMoreScreen()
    let resultprice = await getConvenient()
    Promise.all([result,resiltone,resultprice]).then(res=>{
      commit('REQGETCARSELECT',res)
    })
  }
}
const mutations = {
  // 车辆详情上传 Carlist
  REQGETLISTCAR(state, value) {
    state.Carlist = value
  },
  // 车展列表
  REQGETLISTCARSHOW(state, value) {
    state.CarShow = value
  },
  // 搜索页
  REQGETCARSELECT(state, value) {
    
    state.CarSelect=value.map(item => {
      return item.data.data
    })
    console.log(state.CarSelect);
  }
}
const getters = {}
export default createStore({
  state,
  getters,
  mutations,
  actions
})
