export default function (taskListRef){
    function updateTask(id){
        for(let i = 0; i < taskListRef.value.length; i ++){
            if(taskListRef.value[i].id === id){
                taskListRef.value[i].completed = !taskListRef.value[i].completed
                taskListRef.value[i].completedDate = taskListRef.value[i].completed ? new Date():null;
                return;
            }
        }
    }
    function delteTasks(id){
        if(id){
            taskListRef.value = taskListRef.value.filter(ele=>!(ele.id === id))
        }else{
            taskListRef.value = taskListRef.value.filter(ele=>!ele.completed)
        }
    }
    return {
        updateTask,
        delteTasks,
    }

}