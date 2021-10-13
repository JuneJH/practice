<template>
  <!-- 静态节点提升 -->
  <h1>hello Vue3</h1>
  <h2>hello vue3</h2>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3>hello vue3</h3>
  <h3 :style="`color:${color}`">hello vue3</h3>
  <h5>{{ data }}</h5>
  <!-- v-for / v-if -->
  <div v-for="(item, index) in list" :key="index">{{ item.name }}</div>
  <!-- v-model 的变化 -->
  <VModel v-model="vmodel" v-model:title.j="title" />
  <div>vmodel的值：{{ vmodel }}</div>
  <div>title的值：{{ title }}</div>

  <!-- key -->
  <div v-if="isShow">
    <label key="1"> 姓名：<input /> </label>
  </div>
  <div v-else>
    <label key="1"> 昵称：<input /> </label>
  </div>
  <button @click="isShow = !isShow">更改显示</button>
</template>
<script>
import { computed, ref } from "vue";
import VModel from "./components/VModel.vue";
export default {
  components: {
    VModel,
  },
  setup() {
    const vmodelRef = (window.modelValue = ref("123"));
    const titleRef = ref(123);
    const data = ref({
      name: "juen",
      age: "123",
    });
    const isShowRef = ref(false)
    const list = [
      {
        isShow: false,
        name: "first item",
      },
      {
        isShow: true,
        name: "sec item",
      },
      {
        isShow: true,
        name: "three item",
      },
    ];
    const computeListRef = computed(() => list.filter((item) => item.isShow));

    return {
      data,
      color: "red",
      list: computeListRef,
      vmodel: vmodelRef,
      title: titleRef,
      isShow:isShowRef
    };
  },
};
</script>
