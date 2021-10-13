<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent,onBeforeMount,onMounted,onBeforeUnmount,onUnmounted } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  beforeCreate(){
    console.log("vue2的声明周期beforeCreate")
  },
  created(){
    console.log("vue2的声明周期created")
  },
  beforeMount(){
    console.log("vue2的声明周期beforeMount")
  },
  mounted(){
    console.log("vue2的声明周期mounted")
  },
  beforeUnmount(){
    console.log("vue2的声明周期beforeUnmount")
  },
  setup(){
    console.log("setUp 执行了");
    onBeforeMount(()=>{
      console.log("setUp => onBeforeMount函数执行")
    })
    onMounted(()=>{
      console.log("setUp => onMounted函数执行")
    })
    onBeforeUnmount(()=>{
      console.log("setUp => onBeforeUnmount函数执行")
    })
    onUnmounted(()=>{
      console.log("setUp => onUnmountedt函数执行")
    })
    console.log("setUp 执行完毕")
  }
});
</script>
