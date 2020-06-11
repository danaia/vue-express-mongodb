import axios from 'axios'
import Vue from 'vue'
import _findIndex from 'lodash/findIndex'

const CREATE_GAME = 'CREATE_GAME'
const UPDATE_GAME = 'UPDATE_GAME'
const GET_GAME = 'GET_GAME'
const GET_GAMES = 'GET_GAMES'
const DELETE_GAME = 'DELETE_GAME'
const ERROR_GAME = 'ERROR_GAME'

const getDefaultState = () => {
  return {
    games: null,
    game: null
  }
}

const state = getDefaultState()

const getters = {
  games: state => state.games,
  game: state => state.game
}

const actions = {
  async createGame({ commit }, params) {
    try {
      let { game } = params
      const response = await axios.post(`/api/game/`, game)
      game = response.data.game
      commit(CREATE_GAME, { game })
      return game
    } catch (error) {
      commit(ERROR_GAME, { error })
    }
  },

  async getGame({ commit }, { gameId }) {
    try {
      const response = await axios.get(`/api/game/${gameId}`)
      const { game } = response.data
      commit(GET_GAME, { game: game[0] })
      return game
    } catch (error) {
      commit(ERROR_GAME, { error })
    }
  },

  async getGames({ commit }) {
    try {
      const response = await axios.get(`/api/game`)
      const { games } = response.data
      commit(GET_GAMES, { games })
      return games
    } catch (error) {
      commit(ERROR_GAME, { error })
    }
  },

  async updateGame({ commit }, params) {
    try {
      const response = await axios.put(`/api/game`, params)
      const { game } = response.data
      commit(UPDATE_GAME, game)
      return game
    } catch (error) {
      commit(ERROR_GAME, { error })
    }
  },

  async deleteProject({ commit }, { game }) {
    try {
      const response = await axios.delete(`/api/game/${game._id}`)
      if (response) commit(DELETE_GAME, game)
      return response ? game : false
    } catch (error) {
      commit(ERROR_GAME, { error })
    }
  }
}

const mutations = {
  [CREATE_GAME](state, { game }) {
    state.game = game
    state.games.unshift(game)
  },
  [GET_GAME](state, { game }) {
    Vue.set(state, 'game', game)
  },
  [GET_GAMES](state, { games }) {
    Vue.set(state, 'games', games)
  },
  [UPDATE_GAME](state, { game }) {
    Vue.set(state, 'game', game)
  },
  [DELETE_GAME](state, { game }) {
    const gameId = _findIndex(state.games, g => g._id == game._id)
    if (gameId >= 0) {
      state.games.splice(gameId, 1)
    } else {
      console.warn(`cannot find game in list`, game)
    }
  },
  [ERROR_GAME](state, { error }) {
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
