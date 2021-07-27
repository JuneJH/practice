const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
let vuePath = ""


app.use((req, res) => {
    let { path: p } = req;
    if (p === "/") {
        p = path.join(__dirname, p, 'src/index.html');
        const files = fs.readFileSync(p, "utf-8")
        res.send(files)
    } else if (p.includes(".js")) {
        p = path.join(__dirname, "/src", p);
        let files = fs.readFileSync(p, "utf-8");
        files = rewriteImport(files);
        res.setHeader("content-type", "application/javascript");
        res.send(files)
    } else if (p.includes("/@modules")) {
        p = path.join(__dirname, "/node_modules", p.replace("/@modules", ""))
        const packagePath = path.join(p, "/package.json")
        const packageJson = fs.readFileSync(packagePath, "utf-8");
        const filesPath = path.join(p, JSON.parse(packageJson)["module"])
        let files = fs.readFileSync(filesPath, "utf-8");
        files = rewriteImport(files);
        res.setHeader("content-type", "application/javascript");
        res.send(files)
    }

})

/**
 * 重写导入路径
 * @param {*需要替换的文本} content 
 * @returns 
 */
function rewriteImport(content) {
    const noTransfer = [".","/"]
    return content.replace(/ from ['|"]([^'"]+)['|"]/g, (s0, s1)=>{
      if (noTransfer.includes(s1[0])) {
        return s0
      } else {
        return ` from '/@modules/${s1}'`
      }
    })
  }
  


app.listen(9527, () => console.log("serve start!"))
