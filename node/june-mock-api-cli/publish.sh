#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
echo '请进行登录相关操作：'
npm login # 登陆
echo "-------publishing-------"
npm publish # 发布
echo "发布完成"
exit