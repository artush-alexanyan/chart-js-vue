import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    book_1: [
      { line: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et voluptatibus aliquid vero laborum commodi!' },
      { line: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et voluptatibus aliquid vero laborum commodi!' },
      { line: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et voluptatibus aliquid vero laborum commodi!' },
      { line: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et voluptatibus aliquid vero laborum commodi!' },
      { line: '-----------------------------------------------------------------------------------------------------------------' },
      { line: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et voluptatibus aliquid vero laborum commodi!' },
      { line: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et voluptatibus aliquid vero laborum commodi!' },
      { line: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et voluptatibus aliquid vero laborum commodi!' },
      { line: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et voluptatibus aliquid vero laborum commodi!' }
    ],
    book_2: [
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint ab neque provident velit ut!' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint ab neque provident velit ut!' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint ab neque provident velit ut!' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint ab neque provident velit ut!' },
      { line: '----------------------------------------------------------------------------------------------' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint ab neque provident velit ut!' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint ab neque provident velit ut!' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint ab neque provident velit ut!' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint ab neque provident velit ut!' },

    ],
    book_3: [
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque consectetur reprehenderit quo excepturi a.' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque consectetur reprehenderit quo excepturi a.' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque consectetur reprehenderit quo excepturi a.' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque consectetur reprehenderit quo excepturi a.' },
      { line: '--------------------------------------------------------------------------------------------------------------------' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque consectetur reprehenderit quo excepturi a.' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque consectetur reprehenderit quo excepturi a.' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque consectetur reprehenderit quo excepturi a.' },
      { line: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque consectetur reprehenderit quo excepturi a.' },

    ],
    loading: false
  },
  getters: {
    getBook_1 (state) {
      return state.book_1
    },
    getBook_2 (state) {
      return state.book_2
    },
    getBook_3 (state) {
      return state.book_3
    }     
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
