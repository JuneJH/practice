<template>
  <div>数据共享学习</div>
  <div>Vuex:{{ loading ? "改变中..." : user }}</div>
  <div>Reactive:{{ reactiveLading ? "改变中..." : reactiveUser }}</div>
  <div>Provide/inject:{{ provideLoading ? "改变中..." : provideUser }}</div>

</template>
<script>
import { toRefs } from "@vue/reactivity";
import { useStore } from "vuex";

// reactive 方式实现
import {login,useState} from "./store/reactiveState";

// provide/inject 方式
import {useProvideState} from "./store/provideState"
export default {
  setup() {
    const store = useStore();
    store.dispatch("login");

    const reactiveStore = useState();
    login();

    const provideState = useProvideState();
    console.log(provideState)
    provideState.login();
    return {
      ...toRefs(store.state),
      ...toRefs(reactiveStore),
      ...toRefs(provideState.provideState)
    };
  },
};
</script>