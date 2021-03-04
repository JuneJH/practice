export default function moveScroll(start,end){
    move(start,end);
}
let timer = null;
function move(start,end){
    clearInterval(timer);
    const continued = 1000;
    let dis = start - end;
    const speed = Math.ceil(dis/continued);
    let s = 0;
   timer = setInterval(()=>{
        dis -= speed;
        window.scroll(0,dis);
        if(dis < 0){
            window.scroll(0,0);
            clearInterval(timer)
        }

    },1000/60)
}