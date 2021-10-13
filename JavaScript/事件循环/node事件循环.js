// timer => poll => check
// process.nextTick promise
console.log("script start 1")
setTimeout(() => {
    console.log("setTimeout1 3");
}, 0)
setTimeout(() => {
    console.log("setTimeout2 7");
    process.nextTick(() => {
        console.log("每个阶段执行时优先清空process.nextTick() 8")
    })
}, 10)
// setTimeout(() => {
//     console.log("setTimeout3");
// }, 0)
console.time();

// const fs = require("fs");
// fs.readFile("./node事件循环.js", data => {
//     setTimeout(()=>{
//         console.log("setTimeout")
//     })
//     process.nextTick(()=>{
//         console.log("nextTick")
//     })
//     Promise.resolve().then(res=>{
//         console.log("Promise")
//     })
//     setImmediate(() => {
//         console.log("setImmediate 4")
//     })
// })
fs.readFile("./node事件循环.js", data => {
    console.log("进入poll阶段 5");
    console.timeEnd();

    setImmediate(() => {
        console.log("poll 阶段产生的setImmediate 6")
    })
})

// const start = new Date();
// while(new Date() - start < 3000){}
// console.log("延时完成")

setImmediate(() => {
    console.log("setImmediate 4")
})
console.log("script end 2")


