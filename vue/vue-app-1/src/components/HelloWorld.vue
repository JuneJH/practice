<template>
  <div>
    <div>
      <slot>我是插槽</slot>
    </div>
    <div>
      <slot name="title">我是具名插槽</slot>
    </div>
    <div>
      <slot name="data" data="子组件数据">作用域插槽</slot>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data:"我是子组件的数据"
    }
  }
}
</script>