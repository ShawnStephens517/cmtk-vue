import { createStore } from 'vuex'

const store = createStore({
    state: {
        isLoggedIn: false
    },
    mutations: {
        setLoggedIn(state, value) {
            state.isLoggedIn = value
        }
    }
    actions: {
        setLoggedIn ({ commit }, value) {
            commit('setLoggedIn', value)
        }
    }
})

export default store
