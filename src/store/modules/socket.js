// import axios from 'axios'
import Vue from 'vue'

const getDefaultState = () => {
  return {
    isConnected: false,
    socketMessage: ''
  }
}

const state = getDefaultState()

const getters = {
  isConnected: state => state.isConnected,
  socketMessage: state => state.socketMessage
}

const actions = {
  //   async getApiValidationData({ commit }) {
  //     try {
  //       const response = await axios.get(`/api/ApiValidations`)
  //       const ApiValidations = response.data.apiValidations
  //       commit(types.GET_VALIDAITON_API_DATA, { ApiValidations })
  //       return ApiValidations
  //     } catch (error) {
  //       commit(types.RECEIVED_ERROR, { error })
  //     }
  //   }
}

const mutations = {
  //   [types.GET_VALIDAITON_API_DATA](state, { ApiValidations }) {
  //     Vue.set(state, 'apiValidationData', ApiValidations)
  //   },
  ['SOCKET_CONNECT'](state) {
    Vue.set(state, 'isConnected', true)
    // state.isConnected = true
  },

  ['SOCKET_DISCONNECT'](state) {
    state.isConnected = false
  },

  ['SOCKET_MESSAGECHANNEL'](state, message) {
    state.socketMessage = message
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
