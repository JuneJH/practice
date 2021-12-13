const express = require("express");

const app = express();

const PORT = 3000;

app.use(async (res, req, next) => {
    console.log("第一个中间件 =>"); // 1 2 3 1 2 4 5 5 4 3
    next();
    console.log("第一个中间件 <=")
})
app.use(async (res, req, next) => {
    console.log("第二个中间件 =>");
    next();
    await delay();
    console.log("第二个中间件 <=")
})
app.use(async (res, req, next) => {
    console.log("第三个中间件 =>");
    await delay();
    next();
    console.log("第三个中间件 <=")
})
app.use(async (res, req, next) => {
    console.log("第四个中间件 =>");
    next();
    console.log("第四个中间件 <=")
})
app.use(async (res, req, next) => {
    console.log("第五个中间件 =>");
    next();
    console.log("第五个中间件 <=")
})

function delay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
}

app.listen(PORT, () => {
    console.log("server start at ", PORT)
})