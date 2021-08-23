import {createApp} from "vue";
// import Home from "./views/Home.vue";
import App from "./App.vue"
import router from "./router";
import vuex from "./store/vuex"
import {provideEnter} from "./store/provideState"

const app = createApp(App);
provideEnter(app);
app.use(router).use(vuex).mount("#app");
