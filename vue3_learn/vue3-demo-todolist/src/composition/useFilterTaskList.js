import {ref, watchEffect} from 'vue'
export default function(taskListRef){
    const conditionRef = ref("all");
    const tasksRef = ref([]);
    watchEffect(()=>{
        if(conditionRef.value === "all"){
            tasksRef.value = taskListRef.value
        }else if(conditionRef.value === "completed"){
            tasksRef.value = taskListRef.value.filter(item=>item.completed)
        }else if(conditionRef.value === "uncompleted"){
            tasksRef.value = taskListRef.value.filter(item=>!item.completed)
        }else{
            throw new Error("attr is Error")
        }
    })
    return {
        conditionRef,
        tasksRef
    }
}