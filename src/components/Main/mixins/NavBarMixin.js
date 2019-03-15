export const NavBarMixin = {
    data() {
        return {
            activeNavItem: ''
        }
    },
    methods: {
        setActive(i) {
            this.activeNavItem = i;
            return
        }
    },
    computed: {
        activeItem() {
            return this.activeNavItem
        }
    }
};