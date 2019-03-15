export const ModalToggleMixin = {
    data() {
        return {
            activeModal: ''
        };
    },
    methods: {
        setActiveModal(modalName) {
            this.$store.commit("toggleActiveModal/toggleModalOverlay", modalName);

            return;
        },
        resetActiveModalOverlay() {
            this.$store.commit("toggleActiveModal/toggleModalOverlay", null);

            return;
        }
    },
    computed: {
        /*isModalActive() {
            return this.activeModal;
        }*/
        activeModalOverlayToggled() {
            return this.$store.getters["toggleActiveModal/isActiveModal"];
        }
    }
};