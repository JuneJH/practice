
import { defineAsyncComponent } from "vue"
import {getAsyncComp} from "../utils/defineAsyncComp"
const Page1 = getAsyncComp("../views/Page1.vue");
const Page2 = getAsyncComp("../views/Page2.vue");

export default [{
    path:"/",
    name:"page1",
    component:Page1
},{
    path:"/page2",
    component:Page2
}]