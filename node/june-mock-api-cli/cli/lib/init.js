import figlet from 'figlet';
import { promisify } from "util";
import download from './download.js'
import { spawn } from "child_process";
import start from './start.js'
async function init(name){
    const logText =await promisify(figlet)("Welcaom use my Cli")
    console.log("开始初始化项目.....");
    await download("github:JuneJH/studentsManage",`./src/${name}`);
    console.log("初始化完成")

    console.log("开始下载依赖....");
    const proc = spawn("npm",["install"],{cwd:`./src/${name}/`});
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
        console.log('依赖下载完成。')
    });
    await start(name);
}
export default init