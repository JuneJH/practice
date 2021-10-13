let timer1,timer2;
export default function moveScroll(start,end){
    clearInterval(timer1);
    clearInterval(timer2);
    const html = document.documentElement;
    timer1 = move(html.scrollTop,0,(val)=>{
        html.scrollTop = val;
    })
    timer2 = move(html.scrollLeft,0,(val)=>{
        html.scrollLeft  = val
    })
}
function move(start,end,callback){
    const tick = 16;
    const total = 1000;
    const timers = Math.ceil(total / tick);
    let curTimers = 0;
    const dis = (end - start) / timers;
    const timer = setInterval(()=>{
        curTimers ++;
        start += dis;
        if(curTimers === timers){
            start = end;
            clearInterval(timer)
        }
        callback(start)
    },tick)
    return timer;
}