import App from './routerConfig'

import dva from 'dva';
import counter from './models/counter';
import { createBrowserHistory } from "history";
import router from './router/index'

const logger = store=>next=>action=>{
    console.log("preveState=>",store.getState());
    next(action);
    console.log("cuureState",store.getState())
}

const app = dva({
    history:createBrowserHistory(),
    // initialState:0,// 初始化仓库得值
    // onError(){},// 发送错误时运行得错误
    // onAction:logger,// 可配置redux中间件 可配置数组
    // onStateChange(){},// 当仓库状态发生变化时
    // onReducer(){},// 增强
    // onEffect(){},
    // extraReducers:{},
    // extraEnhancers:[]
});
// 注册模型
app.model(counter)
//注册渲染根组件
app.router(router);
//开启项目
app.start("#root");