const Vue = {

    // 自定义渲染器
    createRenderer({createElement,insert,querySelector}){
        return {
            createApp(options){
                return {
                    mount(selector){
                        const parent = querySelector(selector || options.el);
                        if(!options.render){
                            options.render = this.compile(parent);
                        }
                        if(options.setup){
                            options.setupState = options.setup();
                        }
                        if(options.data){
                            options.dataState = typeof options.data === "object" ? options.data : options.data();
                        }
                        options.ctx = new Proxy(this,{
                            get(target,key){
                                if(key in options.setupState){
                                    return options.setupState[key]
                                }else{
                                    return options.dataState[key]
                                }
                            },
                            // todo watch compute
                        })
                        options.render.call(options.ctx)
                    },
                    compile(parent){
                     const container = parent || createElement("div"); 
                     return function () {
                        const h1 = createElement("h1");
                        const h2 = createElement("h2");
                        h1.textContent = this.title;
                        h2.textContent = this.description;
                        container.innerHTML = "";
                        insert(container,h1);
                        insert(container,h2);
                        return container;
                     }
                        
                    },
                }
            }
        }
    },
    // web平台
    createApp(options){
        const renderer = Vue.createRenderer({
            createElement(tag){
                return document.createElement(tag)
            },
            insert(container,child){
                return container.appendChild(child)
            },
            querySelector(selector){
                return document.querySelector(selector)
            }
        });
        return renderer.createApp(options);
    }
}