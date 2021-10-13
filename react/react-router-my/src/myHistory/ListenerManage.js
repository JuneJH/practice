export default class Listener{

    listeners = [];

    addListener(listener){
        this.listeners.push(listener);
        const unListen = ()=>{
            const i = this.listeners.indexOf(listener);
            this.listeners.splice(i,1);
        }
        return unListen;
    }

    triggerListener(location,action){
        this.listeners.forEach(fn=>{
            fn(location,action)
        })
    }
}