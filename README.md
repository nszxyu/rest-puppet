<!--
 * @Author: yuyongxing
 * @Date: 2022-01-16 20:48:47
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-01-16 21:07:54
 * @Description: 
-->

# node+puppeteer的截图服务

## 安装
```
npm install
yarn install
```

## 运行
```
npm start
yarn start
```

## 使用
##### 1. 获取截图

接口地址：``/api/image``

请求头：``Content-type: application/json``

| 参数    | 类型   | 描述                               |
| ------- | ------ | ---------------------------------- |
| width   | int    | 浏览器宽度                         |
| height  | int    | 浏览器高度                         |
| url     | string | 访问的url（与body二选一）          |
| body    | string | html代码（与url二选一)             |
| type    | string | 图片类型：jpeg/png（不传默认jpeg)  |
| quality | int    | 图片质量（0-100）。type=jpeg时无效 |

##### 2. 获取截图base64

接口地址：``/api/image/base64``

请求头：``Content-type: application/json``

| 参数    | 类型   | 描述                               |
| ------- | ------ | ---------------------------------- |
| width   | int    | 浏览器宽度                         |
| height  | int    | 浏览器高度                         |
| url     | string | 访问的url（与body二选一）          |
| body    | string | html代码（与url二选一)             |
| type    | string | 图片类型：jpeg/png（不传默认jpeg)  |
| quality | int    | 图片质量（0-100）。type=jpeg时无效 |

响应：

```json
{
    "code": 0,
    "data": "data:image/jpeg;base64,abcde",
    "msg": "success"
}
```
##### 3. 获取html

接口地址：``/api/html``

请求头：``Content-type: application/json``

| 参数   | 类型   | 描述                      |
| ------ | ------ | ------------------------- |
| width  | int    | 浏览器宽度                |
| height | int    | 浏览器高度                |
| url    | string | 访问的url（与body二选一） |
| body   | string | html代码（与url二选一)    |
| tag    | string | html节点。默认整个html    |

响应：``结果html``






