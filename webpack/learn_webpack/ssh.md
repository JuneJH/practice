<!--
 * @Author: June
 * @Date: 2021-12-20 10:06:38
 * @LastEditTime: 2021-12-20 11:01:34
 * @LastEditors: June
 * @Description: 
-->
# ssh

## 1.github

1. 创建私钥

```shell
    ssh-keygen -t rsa -C "邮箱"
```
2. 将公钥加入github
3. 尝试登录

```shell
    ssh -T git@github.com
```

## Ubuntu 安装nodejs


```shell
  sudo apt-get install nodejs
  sudo apt-get install nodejs-legacy
```

```shell
   curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs
```

卸载
```shell
    sudo whereis node // 查看安装位置
    sudo apt-get remove nodejs
    sudo rm -rf /usr/local/bin/node // 手动删除文件
```

## npm 配置代理

```shell
npm config get registry  
npm config set registry https://registry.npm.taobao.org
```


## docker 启动项目

