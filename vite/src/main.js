import add from "./add.js";
import {createApp} from "vue"
console.log(add(1,2))
const app =createApp({
    render(){return "Hello Vue3!!"}
});
app.mount("#root")