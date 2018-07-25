import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
Vue.use(Vuex)
const vuexSession = new VuexPersist({
  storage: window.sessionStorage
})

const state = {
  navInde: 0,
  swpierIndex: 0
}
const getters = {}
const mutations = {
  saveNavIndex: function (state, roslov) {
  	console.log('1111', roslov)
    state.navInde = roslov
  },
  saveSwiperIndex: function (state, res) {
  	console.log('2222222', res)
    state.swpierIndex = res
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [vuexSession.plugin]
})
