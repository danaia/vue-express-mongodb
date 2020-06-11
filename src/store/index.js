import Vue from 'vue'
import Vuex from 'vuex'

import game from './modules/game'
import match from './modules/match'
import socket from './modules/socket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    game,
    match,
    socket
  }
})
