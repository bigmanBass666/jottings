# wx_mp

<https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/>

## 列表渲染 wx:for

### 更改默认索引名index和默认项名item

```html
<view wx:for="{{arr1}}" wx:for-index="idx" wx:for-item="itemName" wx:key="idx">
  index: {{idx}}, item: {{itemName}}
</view>
```

### wx:key

使用`wx:key='键名或索引名'`提高渲染效率

普通数组索引名

```html
<view class="" wx:for="{{arr1}}" wx:key="index">index: {{index}}, item: {{item}}</view>
```

```javascript
arr1: ['apple', 'orange', 'melon', 'shit'],
```

对象数组键名

```html
<view wx:for="{{userList}}" wx:key="id">{{item.name}}</view>
```

```javascript
userList: [
 {id: 1, name: 'red'},
 {id: 2, name: 'green'},
 {id: 3, name: 'yellow'}
]
```

## wxss

### import

```less
@import "/common/common.wxss";
```

### 全局样式 app.wxss

全局生效的样式

### 局部样式

在页面的.wxss文件中定义的样式为局部样式，只作用于当前页面。

比如index页面里的index.wxss, test页面里的test.wxss

## 全局配置

### app.json

1. `pages`记录当前小程序所有页面的存放路径
2. `window`全局设置小程序窗口的外观
3. `tabBar`设置小程序底部的效果
4. `style`是否启用新版的组件样式

设置首页: `"entryPagePath": "pages/index/index",`

### window {#window}

#### navigationBar

标题文字

```json
"navigationBarTitleText": "Theta",
```

标题文字颜色, 只有black和white两个值

```json
"navigationBarTextStyle": "black",
```

只支持16进制

```json
"navigationBarBackgroundColor": "#b4edc0"
```

#### 下拉刷新

##### 全局开启

```json
"enablePullDownRefresh": true
```

##### 设置下拉刷新时窗口的背景色

```json
"backgroundColor": "#f5f5f5"
```

##### loading状态(小圆点)

value: dark | light

```json
"backgroundTextStyle": "dark"
```

#### 下拉触底

default: 50px

```json
"onReachBottomDistance": 50
```

### tabBar

必须放在数组的最前面, 否则渲染不出来

```json
"pages": [
 "pages/home/home",
 "pages/message/message",
 "pages/contact/contact",
 
 "pages/index/index",
 "pages/logs/logs"
],
```

```json
"tabBar": {
  "list": [
    {
      "pagePath": "pages/home/home",
      "text": "home",
      "iconPath": "/images/tabs/home.png",
      "selectedIconPath": "/images/tabs/home-active.png"
    }
  ]
}
```

## 页面配置 (.json)

pages/home/home.json

```json
{
  "usingComponents": {},
  "navigationBarBackgroundColor": "#ff0000",
  "navigationBarTextStyle": "white"
}
```

将[app.json的window里的参数](#window)直接添加即可

## 网络数据请求

### 小程序中网络数据请求的限制

1. 只能请求 HTTPS 类型的接口

2. 必须将接口的域名添加到信任列表中

### get

```js
wx.request({
  url: 'https://api.qqsuu.cn/api/dm-bulletin',
  method: 'GET',
  
  // 如果有参数
  // data:{
  //   key: value
  // },

  success: (res) => {
    console.log(res.data);
  }
})
```

### post

与get类似

```js
wx.request({
  url: 'https://api.qqsuu.cn/api/dm-bulletin',
  method: 'POST',
  success: (res) => {
    console.log(res.data);
  }
})
```

### 在页面刚加载时请求数据

```js
onLoad: function (params) {
  this.getInfo()
  this.postInfo()
} 
```

### 跳过 request 合法域名校验

如果后端程序员**仅仅提供了 http 协议的接口, 暂时没有提供https协议的接口**

此时为了不耽误开发的进度，我们可以在微信开发者工具中，临时开启**不校验合法域名、web-view(业务域名)、TLS 版本以及HTTPS证书**选项

仅限在**开发与调试**阶段使用!

## 事件

### 事件传参-data

`data-`的名字如果过长, 也就是使用了减号`-`, 那么该属性名在事件对象中会被转化会小驼峰命名

```html
<button data-parent-id="parent">btn</button>
```

`parent-id` 会转化为 `parentId`

如果`data-`当中使用的是小驼峰命名, 则会被转化为全小写

```html
<button data-parentId="parent">btn</button>
```

`parentId` 会转化为 `parentid`

### 事件传参-mark

mark 和 dataset 很相似，主要区别在于： mark 会包含从触发事件的节点到根节点上所有的 mark: 属性值；而 dataset 仅包含一个节点的 data- 属性值。

细节注意事项：

如果存在同名的 mark ，父节点的 mark 会被子节点覆盖。
在自定义组件中接收事件时， mark 不包含自定义组件外的节点的 mark 。
不同于 dataset ，节点的 mark 不会做连字符和大小写转换。

## 一些问题

### 小程序码

<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html>
