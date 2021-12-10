import { promisify } from "util";
import download_git_repo from "download-git-repo";
const downloadWrapper = promisify(download_git_repo);
async function download(url,dir){
    try {
        await downloadWrapper(url,dir)
    } catch (error) {
        console.log("下载失败",error)
    }
}

export default download;