import {ref,watchEffect} from 'vue'
import {getTaskList,saveTaskList} from '../api'
export default function useTaskList(){
    const taskListRef = ref(getTaskList());
    watchEffect(()=>{
      saveTaskList(taskListRef.value);
    })
    return {
        taskListRef
    }
}