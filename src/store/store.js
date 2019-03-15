import Vue from 'vue'
import Vuex from 'vuex'
import mainPushMenu from './modules/MainUI/pushMenu.js';
import toggleActiveModal from './modules/MainUI/toggleActiveModal.js';


Vue.use(Vuex)








const store = new Vuex.Store({
    state: {
    },
    actions: {},
    mutations: {},
    getters: {
    },
    modules: {
        mainPushMenu,
        toggleActiveModal,

    },
});

export default store;