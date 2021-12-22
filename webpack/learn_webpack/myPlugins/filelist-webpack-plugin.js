module.exports = class {
    constructor(filename = "filelist.txt"){
        this.filename = filename
    }
    apply(compiler){
        compiler.hooks.emit.tap("filelist",compilation=>{
            const result = Object.entries(compilation.assets).map(([key,val])=>{
                return `【${key}】    ===>    ${val.size()}`
            })

            compilation.assets[this.filename] = {
                source(){
                    return result.join("\n\n\n")
                },
                size(){
                    return result.length;
                }
            }
        })
    }
}