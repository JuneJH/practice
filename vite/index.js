const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");



app.use((req,res)=>{
    let {path:p} = req;
    console.log("path",p)
    if(p === "/"){
        p = path.join(__dirname,p,'src/index.html');
        const files = fs.readFileSync(p,"utf-8")
        res.send(files)
    }else if(p.includes(".js")){
        p = path.join(__dirname,"/src",p);
        const files = fs.readFileSync(p,"utf-8");
        res.setHeader("content-type", "application/javascript");
        res.send(files)
    }else if(p.includes("/@modules")){
        p = path.join(__dirname,"/node_modules",p.replace("/@modules",""))
        const packagePath = path.join(p,"/package.json")
        const packageJson = fs.readFileSync(packagePath,"utf-8");
        const filesPath = path.join(p,JSON.parse(packageJson)["module"])
        const files = fs.readFileSync(filesPath,"utf-8")
        res.setHeader("content-type", "application/javascript");
        res.send(files)
    }else if(p.includes("@")){

    }

})



app.listen(9527,()=>console.log("serve start!"))
