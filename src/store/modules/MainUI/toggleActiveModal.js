// initial state
const state = {
    activeModal: null,
};

// getters
const getters = {
    isActiveModal: state => state.activeModal
};

// actions
const actions = {};

// mutations
const mutations = {
    toggleModalOverlay: (state, payload) => {
        state.activeModal = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};