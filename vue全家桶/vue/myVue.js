/**
 * 拦截对象
 * @param {*被拦截对象} obj 
 * @param {*被拦截对象值} key 
 * @param {*值} val 
 */
function defineReactive(obj, key, val) {
	observe(obj[key]);
	const deps = new Dep();
	Object.defineProperty(obj, key, {
		get() {
			console.log("geter!!!", key);
			Dep.target && deps.add(Dep.target);
			return val;
		},
		set(newVal) {
			if (newVal !== val) {
				if (typeof val === "object") {
					observe(newVal);
				}
				val = newVal;
				deps.notify();
			}
		}
	})
}
/**
 * 拦截单个对象的key
 * @param {*被拦截对象} obj 
 * @param {*键} key 
 * @param {*值} val 
 */
function set(obj, key, val) {
	defineReactive(obj, key, val);
}
/**
 * 自动处理拦截
 * @param {*} obj 
 * @returns 
 */
function observe(obj) {
	if (typeof obj !== "object" || obj === null) return;
	Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]));
}
/**
 * 代理数据到一个对象上
 * @param {*vue实例} vm 
 */
function proxy(vm) {
	Object.keys(vm.$data).forEach(key => {
		Object.defineProperty(vm, key, {
			get() {
				return vm.$data[key]
			},
			set(newVal) {
				vm.$data[key] = newVal;
			}
		})
	})
}
/**
 * Mini-Vue
 */
class JVue {
	constructor(options) {
		this.$options = options;
		this.$data = typeof options.data === "function" ? options.data() : options.data;
		observe(this.$data);
		proxy(this);
		const dom = document.querySelector(this.$options.el);
		new Compile(this, dom);
	}
}

/**
 * 编译
 */
class Compile {
	constructor(vm, dom) {
		this.vm = vm;
		this.compile(dom);
	}

	compile(dom) {
		const node = dom.childNodes;
		Array.from(node).forEach(item => {
			if (item.nodeType === 1) {
				const attrs = item.attributes;
				Array.from(attrs).forEach(attr=>{
					const key = attr.name;
					const exp = attr.value;
					if(this.isDir(key)){
						this[key.slice(2)] && this[key.slice(2)](item,key,exp)
					}
				})
				if (item.childNodes.length > 0) {
					this.compile(item);
				}
			} else if (item.nodeType === 3) {
				if(this.isInter(item.textContent)){
						this.compileText(item);
				}
			}
		})
	}
	update(node,key,exp){
		const fn = this[key+"Update"];
		fn && fn(node,this.vm[exp]);
		new Watcher(this.vm,exp,function(val){
			fn && fn(node,val);
		})
	}

	text(node,key,exp){
		this.update(node,key.slice(2),exp)
	}
	textUpdate(node,val){
		node.textContent = val;
	}
	compileText(node){
		this.update(node,"text",RegExp.$1)
	}

	isInter(str){
		return /\{\{(.*)\}\}/.test(str)
	}
	isDir(str){
		return str.startsWith("j-")
	}
}

class Watcher{
	constructor(vm,key,update){
		this.vm = vm;
		this.key = key;
		this.update = update;
		Dep.target = this;
		this.vm[this.key];
		Dep.target = null;

	}
	updated(){
		this.update.call(this.vm,this.vm[this.key])
	}
}

class Dep{
	constructor(){
		this.deps = []
	}
	add(dep){
		this.deps.push(dep)
	}
	notify(){
		this.deps.forEach(watcher=>watcher.updated());
	}
}
