import React from 'react';
import App from './App';

import dva from 'dva';
import counter from './models/counter';

const app = dva();
// 注册模型
app.model(counter)
//注册渲染根组件
app.router(App);
//开启项目
app.start("#root");