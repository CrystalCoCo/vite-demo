import { createStore } from 'vuex'
import user from "./user"

export default createStore({
  state: {
    spinning: true
  },
  mutations: {
    loading(state, status) {
      state.spinning = status
    }
  },
  modules: {
    user
  }
})