<template>
  <h1>hello vue3</h1>
  <h2>count: {{count}}</h2>
  <button @click="decrease">decrease</button>
  <button @click="increase">increase</button>
</template>

<script>

import {ref} from 'vue'
export default {
  setup(){
    let count = ref(0);
    const decrease = ()=>{
      count.value ++;
    }
    const increase = ()=>{
      count.value --;
    }

    return {
      count,
      decrease,
      increase
    }

  }

}
</script>

<style>

</style>
