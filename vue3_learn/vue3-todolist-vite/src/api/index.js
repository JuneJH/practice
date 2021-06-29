const TASKLISTKEY = "TASK-LIST";
export function getTaskList() {
    const result = window.localStorage.getItem(TASKLISTKEY);
    if (result) {
        return JSON.parse(result);
    }
    return [];
}

export function saveTaskList(tasks) {
    if(typeof tasks !== "object")return false;
    if(!Array.isArray(tasks)){
        tasks = [tasks];
    }
    try {
        window.localStorage.setItem(TASKLISTKEY, JSON.stringify([ ...tasks ]));
        return true;
    }catch{
        return false;
    }
}

export function createId(){
    return +new Date() + Math.random().toString(16).slice(5);
}