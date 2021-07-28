<template>
  <div>
    <h1>APP</h1>
    <p>描述：</p>
    <Hello>
      <template>
        替换插槽
      </template>
      <template v-slot:title>
        替换具名插槽
      </template>
      <template #data="data1" > 
        <h1>替换作用域插槽：{{data1.data}}</h1>
      </template>
    </Hello>
  </div>
</template>
<script>
import Hello from "./components/HelloWorld.vue";
export default {
  components:{Hello},
  data(){
    return {
      data:"我是父组件数据"
    }
  }
}
</script>