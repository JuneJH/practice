import add from "./add.js";
import {createApp} from "/@modules/vue"
console.log(add(1,2))
const app =createApp();
app.mount("#app")