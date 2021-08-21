<template>
    <input :value="modelValue" @input="inputHandle" />
    <div @click="clickHandle">{{title}}</div>
</template>

<script>
export default {
    props:{
        modelValue:String,
        title:Number,
        jMOte:Object,
        titleModifiers:Object

    },
    mounted(){
        console.log("组件实例",this)
    },
    setup(props,ctx){
        console.log(props)
        const inputHandle = (e)=>{
            ctx.emit("update:modelValue",e.target.value)
        }
       function clickHandle(){
           if(props.titleModifiers && props.titleModifiers.j){
               ctx.emit("update:title",Math.ceil(Math.random()*10))
               return;
           }
           ctx.emit("update:title",Math.random())
       }
        return {
            inputHandle,
            clickHandle
        }

    }
}
</script>