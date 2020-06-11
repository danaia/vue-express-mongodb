import axios from 'axios'
import Vue from 'vue'
import _findIndex from 'lodash/findIndex'

const CREATE_MATCH = 'CREATE_MATCH'
const UPDATE_MATCH = 'UPDATE_MATCH'
const GET_MATCH = 'GET_MATCH'
const GET_MATCHES = 'GET_MATCHES'
const DELETE_MATCH = 'DELETE_MATCH'
const ERROR_MATCH = 'ERROR_MATCH'

const getDefaultState = () => {
  return {
    matches: null,
    match: null
  }
}

const state = getDefaultState()

const getters = {
  matches: state => state.matches,
  match: state => state.match
}

const actions = {
  async getMatches({ commit }, { gameId }) {
    try {
      const response = await axios.get(`/api/match`, { gameId })
      const { matches } = response.data
      commit(GET_MATCHES, { matches })
      return matches
    } catch (error) {
      commit(ERROR_MATCH, { error })
    }
  },

  async createMatch({ commit }, params) {
    try {
      let { match, gameId } = params
      const response = await axios.post(`/api/match/`, { match, gameId })
      console.log(`new match `, response.data)
      match = response.data.match
      commit(CREATE_MATCH, { match })
      return match
    } catch (error) {
      commit(ERROR_MATCH, { error })
    }
  },

  async getMatch({ commit }, { gameId, matchId }) {
    try {
      const response = await axios.get(`/api/match/${matchId}`, { gameId })
      const { match } = response.data
      commit(GET_MATCH, { match })
      return match
    } catch (error) {
      commit(ERROR_MATCH, { error })
    }
  },

  async updateMatch({ commit }, params) {
    try {
      let { match } = params
      const response = await axios.put(`/api/match/${match._id}`, { match })
      match = response.data
      commit(UPDATE_MATCH, match)
      return match
    } catch (error) {
      commit(ERROR_MATCH, { error })
    }
  },

  async deleteMatch({ commit }, { match }) {
    try {
      const response = await axios.delete(`/api/match/${match._id}`)
      if (response) commit(DELETE_MATCH, { match })
      return response ? match : false
    } catch (error) {
      commit(ERROR_MATCH, { error })
    }
  }
}

const mutations = {
  [CREATE_MATCH](state, { match }) {
    state.match = match
    // state.games[0].matches.unshift(match)
    // state.matches.unshift(match)
  },
  [GET_MATCH](state, { match }) {
    Vue.set(state, 'match', match[0])
  },
  [GET_MATCHES](state, { matches }) {
    Vue.set(state, 'matches', matches)
  },
  [UPDATE_MATCH](state, { match }) {
    Vue.set(state, 'match', match)
  },
  [DELETE_MATCH](state, { match }) {
    console.log(match._id, state.matches)
    const matchId = _findIndex(state.matches, m => m._id == match._id)
    if (matchId >= 0) {
      state.matches.splice(matchId, 1)
    } else {
      console.warn(`cannot find match in list`, match)
    }
  },
  [ERROR_MATCH](state, { error }) {
    console.warn(error)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
