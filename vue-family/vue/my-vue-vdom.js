
const tags = ["div", "span", "p", "h1", "h2", "a"]
class JVue {
    constructor(options) {
        this._init(options);
    }
    _init(options) {
        this.$options = options;
        this.$data = typeof options.data === "function" ? options.data() : options.data;
        new Observe(this.$data);
        proxy(this);
        this.mountComponent();
    }
    mountComponent() {
        let updateComponent = () => {
            const parent = document.querySelector(this.$options.el || "body");
            let oldVnode = parent;
            if (this.vnode) {
                oldVnode = { ...this.vnode }
            }
            this.vnode = this.$options.render.call(this, createVnode);
            this.vnode.parent = parent;
            this.patch(oldVnode, this.vnode);
        }
        new Watcher(this, updateComponent)
    }
    patch(oldVnode, vnode) {
        if (oldVnode.nodeType) {
            this.update(vnode,this.vnode.parent);
        } else {
            this.patchVnode(oldVnode, vnode);
        }
    }
    patchVnode(oldVnode, vnode) {
        if (oldVnode === vnode) return;
        if (oldVnode.tag === vnode.tag) {
            this.updateAttr(oldVnode, vnode)
        }
    }
    updateAttr(oldVnode, vnode) {
        if (oldVnode.elm) {
            oldVnode.elm.innerText = vnode.data;
            this.vnode = oldVnode;
        }
    }
    update(vnode, parent = null) {
        if (vnode instanceof Vnode) {
            vnode.elm = this._update(vnode,parent);
            vnode.parent = vnode.parent || parent;
        }
    }
    _update(v,parent) {
  
        if (tags.includes(v.tag)) {
            const dom = document.createElement(v.tag);
            if (v.children) {
                v.children.forEach(vnode=>{
                    this.update(vnode, dom);
                })
            }
            dom.innerText = v.data;
            parent.appendChild(dom);
            return dom;
        }
        
    }
}


function createVnode(tag, data, child) {
    return new Vnode(tag, data, child)
}
class Vnode {
    constructor(tag, data, child) {
        this.tag = tag;
        this.data = data;
        this.children = child;
        this.elm = null;
        this.parent = null;
    }
}
function proxy(vm) {
    Object.keys(vm.$data).forEach(key => {
        Object.defineProperty(vm, key, {
            get() {
                return vm.$data[key]
            },
            set(val) {
                vm.$data[key] = val;
            }
        })
    })

}

class Observe {
    constructor(obj) {
        this.obj = obj;
        this.dep = new Dep();
        if (Array.isArray(obj)) {
            // 如果是数组  TODO

        } else {
            this.walk(obj);
        }
    }
    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key]);
        })
    }

}

class Dep {
    constructor() {
        this.subs = new Set();
    }
    addSub(watcher) {
        this.subs.add(watcher);
    }
    depend() {
        if (Dep.target) {
            Dep.target.addDep(this);
            Dep.target = null;
        }
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}

class Watcher {
    constructor(vm, updateComp) {
        this.vm = vm;
        this.updateComp = updateComp;
        this.deps = [];
        this.get();
    }
    get() {
        Dep.target = this;
        return this.updateComp();
    }
    addDep(dep) {
        this.deps.push(dep);
        dep.addSub(this);
    }
    update() {
        // Watcher.watchers ? Watcher.watcher = [] : "";
        // Watcher.watchers.push(this)
        this.get();
    }
}



function defineReactive(obj, key, val) {
    const dep = new Dep();
    let ch = observe(val);
    Object.defineProperty(obj, key, {
        get() {
            if (Dep.target) {
                dep.depend();
                if (ch) {
                    ch.dep.depend();
                }
            }
            return val;
        },
        set(newVal) {
            if (val === newVal) return;
            val = newVal;
            ch = observe(newVal);
            dep.notify();
        }
    })


}

function observe(obj) {
    if (typeof obj !== "object") {
        return;
    }
    let ob;
    if (obj instanceof Observe) {
        ob = obj;
    } else {
        ob = new Observe(obj)
    }
    return ob;

}