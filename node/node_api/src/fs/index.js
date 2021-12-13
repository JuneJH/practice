import fs from 'fs'
import path from 'path'
import { promisify } from "util";

const textPath = path.resolve("./src/fs/text.text")
// 异步读取
fs.readFile(textPath,(err,data)=>{
    console.log("text2",data.toString())
})
// 使用Promise方式
const readFilePromsie = promisify(fs.readFile);
(async ()=>{
    const text3 =await readFilePromsie(textPath,{encoding:"utf-8"})
    console.log("text3",text3)
})()

// 同步读取
const text = fs.readFileSync(textPath,{encoding:"utf-8"})
console.log("text",text)

// 

fs.re
