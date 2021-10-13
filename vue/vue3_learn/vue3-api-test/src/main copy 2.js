// 响应式API

import { reactive,readonly,ref,watch,watchEffect,computed } from "vue";

const user = reactive({name:"june",age:18});
const userReadonly = readonly(user);
const state = readonly({name:"june"})
// ref
const numberRef = ref(123);
const userRef = ref({name:"june",age:18});
const userReactiveRef = ref(user);
const userInfo = computed(()=> `My name is ${userRef.value.name},i am ${user.age} year old`)
console.log(userReactiveRef.value === user);

watch(numberRef,(state,preState)=>{
    console.log("watch run",state,preState)
})
watchEffect(()=>{
    console.log("watchEffect run",numberRef.value)
})
// watch 监听多个依赖
watch([numberRef,()=>state.name],([state,preState],[name,preName])=>{
    console.log("watch run 2",state,preState,name,preName)
})
window.user = user;
window.userReadonly = userReadonly;
window.userRef = userRef;
window.state = state;
window.numberRef = numberRef;
window.userInfo = userInfo;