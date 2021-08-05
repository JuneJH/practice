let Vue;

class VueRouter {
    constructor(_options) {
        this.$options = _options;
        Vue.util.defineReactive(this, "currentPath", window.location.hash.slice(1) || "/")
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash.slice(1) || "/";
        })
    }
}
VueRouter.install = (_Vue) => {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        }
    })
    Vue.component("router-link", {
        props: {
            to: {
                type: String,
                required: true,
            }
        },
        render(h) {
            return h("a", { attrs: { href: `#${this.to}` } }, this.$slots.default)
        }
    });
    Vue.component("router-view", {
        render(h) {
            const routers = this.$router.$options.routes;
            const currentPath = this.$router.currentPath;
            const route = routers.find(route => route.path === currentPath);
            let Comp = null;
            if (route) {
                Comp = route.component;
            }
            return h(Comp)
        }
    })
}

export default VueRouter;