import Vue from "vue";
import Vuex from "vuex";
import userModule from "./user";

Vue.use(Vuex)

const store = {
  modules: {
    'user': userModule
  }
}

export default new Vuex.Store(store)
