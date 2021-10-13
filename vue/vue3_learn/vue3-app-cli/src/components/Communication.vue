<template>
  <div class="hello">
        <h1>首页{{props.msg}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props:{
    msg:String,
    number:Number
  },
  name: "HelloWorld",
  setup(props){
  
  
    


    return {
      props
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
