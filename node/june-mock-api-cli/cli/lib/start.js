import { spawn } from "child_process";

async function start (name){
    console.log('开始运行项目......');
    const procRun = spawn("npm",["run","start"],{cwd:`./src/${name}`});
    procRun.stdout.pipe(process.stdout);
    procRun.stderr.pipe(process.stderr);
    procRun.on("close", () => {
        console.log('运行完成')
    });
}

export default start;