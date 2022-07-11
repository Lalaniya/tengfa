import { createStore } from 'vuex'
import {
  getListCar,
  getCarShow,
  getSelectModel,
  getMoreScreen,
  getConvenient,
  getDetail,
  getDetailone,
  getFuWu,
  getAppNew
} from '@/api/getHttp'
const state = {
  Carlist: [],
  CarShow: [],
  CarSelect: [],
  CarDetail: [],
  getFuWu : null,
  getAppNew:null
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
  async reqgetCarSelect({ commit }) {
    let result = await getSelectModel()
    let resiltone = await getMoreScreen()
    let resultprice = await getConvenient()
    Promise.all([result, resiltone, resultprice]).then((res) => {
      commit('REQGETCARSELECT', res)
    })
  },
  // 车辆详情页面
  async reqgetDetail({ commit }, val) {
    let result = await getDetail(val)
    let resultOne = await getDetailone(val)
    if (result.data.status === 200 && resultOne.data.status === 200) {
      commit('REQGETDETAIL', [result.data.data, resultOne.data.data])
    }
  },
  // 服务页面
  async reqgetFuWu({commit}) {
    let result = await getFuWu()
    if (result.data.status === 200) {
      commit('REQGETFUWU',result.data.data)
    }
  },
  // APP服务页面
  async reqgetAppNew({commit},id) {
    let result = await getAppNew (id)
    if (result.status===200) {
      commit('REQGETAPPNEW',result.data.data)
    }
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
    state.CarSelect = value.map((item) => {
      return item.data.data
    })
  },
  // 车辆详情
  REQGETDETAIL(state, value) {
    state.CarDetail = value
  },
  // 腾发服务
  REQGETFUWU(state, value) {
    state.getFuWu = value
  },
  // app服务
  REQGETAPPNEW(state,val) {
    state.getAppNew = val
  }
}
const getters = {}
export default createStore({
  state,
  getters,
  mutations,
  actions
})
