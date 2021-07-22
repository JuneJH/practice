const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");


function getModuleInfo(filesPath){
    const deps = [];
    const codes = fs.readFileSync(filesPath,"utf-8");

    const ast = parser.parse(codes,{
        sourceType:"module",
    })
    traverse(ast,{
        ImportDeclaration({node}){
            const dirname = path.dirname(filesPath);
            const abspath = "./" + path.join(dirname, node.source.value);
            deps[node.source.value] = abspath;
        }
    })

    const {code} = babel.transformFromAst(ast,null,{
        presets:["@babel/preset-env"],
    })

    return {filesPath,deps,code}
}


const info = getModuleInfo("../index.js")
console.log(info)