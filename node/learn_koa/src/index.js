const Koa = require("koa")

const app = new Koa();
const PORT = 3000;

app.use(async (ctx,next)=>{
    console.log("第一个中间件 =>");
    ctx.body +="1";
    await next();
    ctx.body +="10";
    console.log("第一个中间件 <=")
})
app.use(async (ctx,next)=>{
    console.log("第二个中间件 =>");
    ctx.body +="2";
    await next();
    ctx.body +="9";
    await delay();   // 始终等待契约执行完成后运行下面的代码
    console.log("第二个中间件 <=")
})
app.use(async (ctx,next)=>{
    console.log("第三个中间件 =>");
    await delay();   // 始终等待契约执行完成后运行下面的代码
    ctx.body +="3";
    await next();
    console.log("第三个中间件 <=")
    ctx.body +="8";
})
app.use(async (ctx,next)=>{
    ctx.body +="4";
    console.log("第四个中间件 =>");
    await next();
    console.log("第四个中间件 <=")
    ctx.body +="7";
})
app.use(async (ctx,next)=>{
    console.log("第五个中间件 =>");
    ctx.body +="5";
    await next();
    console.log("第五个中间件 <=")
    ctx.body +="6";
})


function delay(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve();
        },2000)
    })
}


app.listen(PORT,()=>{
    console.log("server start at ",PORT)
})