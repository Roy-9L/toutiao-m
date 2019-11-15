import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 申明数据的
  state: {
  },
  // 修改数据的
  mutations: {
  },
  // 异步拿数据的
  actions: {
  }
  // modules:模块 当项目非常复杂时，如果全部把数据申明在state中，会非常难以维护，modules也同时拥有state mumations actions这三个功能，可以分模块进行维护
  // modules: {
  // }
})
