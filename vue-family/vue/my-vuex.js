let Vue;
class Store {
    constructor(options) {
        this.options = options;
        this.getter = {};
        this._getter = options.getter;
        const computed = {}
        Object.keys(this._getter).forEach(key=>{
            computed[key] = ()=>{
               return this._getter[key](this.state,this.getter)
            };
            Object.defineProperty(this.getter,key,{
                get:()=>this._state[key]
            })
        })
        this._state = new Vue({
            data() {
                return {
                    _store: options.state
                }
            },
            computed,
        });
    }
    get state() {
        return this._state._data._store;
    }
    set state(val) {
        throw new Error("不允许操作内部变量")
    }

    commit = ({ type }) => {
        const fn = this.options.mutations[type];
        if (!fn) {
            throw new Error("错误的类型");
        }
        fn(this.state)
    }

    dispatch = ({ type }) => {
        const fn = this.options.actions[type];
        if (!fn) {
            throw new Error("错误的类型");
        }
        return fn({ state: this.state, commit: this.commit, dispatch: this.dispatch })
    }
}
function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        }
    })
}
export default {
    Store,
    install
}