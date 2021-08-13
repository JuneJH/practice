
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
        if (options.el) {
            this.mountComponent(options.el);
        }
    }
    mountComponent(el) {
        this.$el = document.querySelector(el || "body");
        let updateComponent = () => {
            this.vnode = this.$options.render.call(this, createVnode);
            this._update(this.vnode)
        }
        new Watcher(this, updateComponent)
    }
    _update(vnode) {
        const prevEl = this.$el;
        const prevVnode = this._vnode;
        if (prevVnode) {
            this.$el = this.__patch__(prevVnode, vnode);
        } else {
            this.$el = this.__patch__(prevEl, vnode);
        }

    }
    __patch__(oldVnode, vnode) {
        const isRealElement = oldVnode.nodeType;
        if (!isRealElement && oldVnode.tag === vnode.tag) {
            this.patchVnode(oldVnode, vnode)
        } else {
           if(isRealElement){
             oldVnode = new Vnode(oldVnode.tagName, null, null, oldVnode)
           }
            const oldElm = oldVnode.elm;
            const parentElm = oldElm.parentNode;
            this.createElm(vnode, parentElm, oldElm);
            if (parentElm && oldElm) {
                parentElm.removeChild(oldElm)
            }
        }
        this._vnode = vnode;
        return vnode.elm
    }
    createElm(vnode, parent, refElm) {
        const data = vnode.data;
        const tag = vnode.tag;
        const children = vnode.children;
        vnode.elm = createElement(tag);
        if (children) {
            this.cretaeChildren(vnode, children);
        }
        parent.insertBefore(vnode.elm, refElm)
    }
    cretaeChildren(vnode, children) {
        if (Array.isArray(children)) {
            children.forEach(child => {
                if (typeof child === "object") {
                    this.createElm(child, vnode.elm, null)
                } else {
                    vnode.elm.appendChild(createTextNode(String(child)))
                }
            })
        } else {
            vnode.elm.appendChild(createTextNode(String(children)))
        }
    }
    patchVnode(oldVnode, vnode) {
        const elm = vnode.elm = oldVnode.elm;
        const oldch = oldVnode.children;
        const ch = vnode.children;
        if(oldch === ch){
            return;
        }else if(typeof oldch !== "object"){
            if(typeof ch !== "object"){
               elm.textContent = ch;
            }else{
                elm.innerHTML = "";
                ch.forEach(c=>this.createElm(c,elm,null))
            }
        } else if(typeof oldch == "object"){
            if(typeof ch !== "object"){
                elm.textContent = ch;
            }else{
                this.updateChildren(elm,oldch,ch);
            }
        }
    }
    updateChildren(elm,oldch,ch){
        const oldLen = oldch.length;
        const vlen = ch.length;
        const len = Math.min(oldLen,vlen);
        for(let i = 0; i < len; i ++){
            const oldV = oldch[i];
            const v = ch[i];
           if(typeof oldV === "object" && typeof v === "object"){
               this.__patch__(oldV,v)
           }
        }
        if(oldLen === vlen){
            return
        }else if(oldLen > vlen){
            oldch.slice(len).forEach(old=>elm.removeChild(old.elm))
        }else{
            ch.slice(len).forEach(c=>{
                this.createElm(c,elm,null)
            })
        }

    }
}
function createVnode(tag, data, child) {
    return new Vnode(tag, data, child)
}
class Vnode {
    constructor(tag, data, child, elm) {
        this.tag = tag;
        this.data = data;
        this.children = child;
        this.elm = elm;
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

function createElement(tag) {
    return document.createElement(tag)
}
function createTextNode(text) {
    return document.createTextNode(text)
}
