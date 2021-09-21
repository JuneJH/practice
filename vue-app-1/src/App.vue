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

    <div id="test">test:{{test}}</div>
  </div>
</template>
<script>
import VModel from "./components/VModel.vue";
export default {
  components: {
    VModel,
  },
  beforeCreate(){
    console.log("beforeCreate",this)
  },
  created(){console.log("created",this)},
  beforeMount(){console.log("beforeMount",this)},
  mounted() {
    console.log("mounted",this);
    const testOm = document.getElementById("test");
    this.test = "修改了";
    console.log("1",testOm.innerText);
    this.$nextTick(()=>{
      console.log("2",testOm.innerText);
    })
  },
  beforeUpdate(){
    console.log("beforeUpdate",this)
  },
  updated(){console.log("updated",this)},
  data() {
    return {
      vmode: {
        value: 123,
      },
       test:"data",
      isShow:false
    };
  },
  // computed:{
  //   test:()=>this.test+" computed"
  // },
  // methods:{
  //   test(){
  //     return "methods"
  //   }
  // }
};
</script>