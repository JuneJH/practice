<template>
  <div>
      <input v-model="data.value" />
      <div>props:{{data.value}}</div>
  </div>
</template>

<script>
export default {
  props:["data"],
  data(){
    return {
      data:{
        value:"data"
      }
    }
  }
}
</script>