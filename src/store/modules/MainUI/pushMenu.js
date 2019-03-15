// initial state
const state = {
    showPushMenu: false,
    currentPushMenu: ''
};

// getters
const getters = {
    showPushMenu: state => state.showPushMenu,
    currentPushMenu: state => state.currentPushMenu
};

// actions
const actions = {};

// mutations
const mutations = {
    togglePushMenu: (state, payload) => {
        if (payload) {
            state.showPushMenu = !state.showPushMenu;
            state.currentPushMenu = payload;
        } else {
            state.showPushMenu = !state.showPushMenu;
        }
    },
    changePushMenu: (state, payload) => {
        if (!payload) {
            state.currentPushMenu = payload;
        } else {
            state.currentPushMenu = payload;
        }
    },
    resetPushMenu: (state) => {
        state.showPushMenu = false;
        state.currentPushMenu = null;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};