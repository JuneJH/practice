import {createId} from '../api'
import {ref} from 'vue'
export default function(taskListRef){
    const taskContentRef = ref("");
    function addTask (){
        taskListRef.value.push({
            id:createId(),
            content:taskContentRef.value,
            completed:false,
            createDate:new Date(),
            completedDate:null,
        });
        taskContentRef.value = "";
    }
    return {
        taskContentRef,
        addTask
    }
}