<template>
  <div>
    <VModel :data="vmode" />
    <div>vmode:{{ vmode }}</div>

    <div v-if="isShow">
      <label key="1">
        姓名：<input/>
      </label>
    </div>
    <div v-else >
      <label key="1">
        昵称：<input/>
      </label>
    </div>
    <button @click="isShow = !isShow">更改显示</button>
  </div>
</template>
<script>
import VModel from "./components/VModel.vue";
export default {
  components: {
    VModel,
  },
  mounted() {
    window.v = this.vmode;
    console.log("组件实例",this)
  },
  data() {
    return {
      vmode: {
        value: 123,
        
      },
      isShow:false
    };
  },
};
</script>