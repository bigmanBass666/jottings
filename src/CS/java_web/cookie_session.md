# cookie_session

## cookie

### 存活时间

浏览器关闭, 则销毁

```java
cookie.setMaxAge(int secondes);
```

正数: 将Cookie写入浏览器所在电脑的硬盘, 持久化存储。到时间自动删除

负数: 默认值, Cookie在当前浏览器内存中，当浏览器关闭，则Cookie被销毁

设为0: 删除指定cookie

## session

### 获取对象

```java
HttpSession session = req.getSession();
```

注意是从`HttpServletRequest`对象中获取, 而不是`HttpServletResponse`对象中获取 (会话是由用户的请求发起的)

要与cookie的获取方式`new`区别开

### fuc

```java
setAttribute(String name, Object o); // 存储数据到 session 域中 
Object getAttribute(String name); // 根据 key，获取值 void 
removeAttribute(String name); // 根据 key，删除该键值对
```

### 原理

session是基于cookie实现的

在setSession和getSession两个页面里分别获取了HttpSession对象, 并且该对象是同一个对象, 这样才能保证获取出来的session信息是一致的.

但是, 两次获得的对象是如何保持一致的?

setSession页面: 当tomcat发现页面使用了session, 便会把该session对象的id当成一个cookie发送回客户端, 也就是设置响应头`set-cookie:JSESSIONID=10`

getSession页面: 当客户端携带着这个JSSSIONID的cookie再次访问getSession页面时, 因为某东西检测到JSSSIONID, 所以他会去内存中找, 找有没有一个JSSSIONID为10的session对象, 没有则创建, 这样便保证了多次访问间session对象的一致

### 钝化、活化

服务器重启后, Session中的数据是否还在?

钝化: 在服务器正常关闭后, Tomcat会自动将 Session数据写入硬盘的文件中

活化: 再次启动服务器后，从文件中加载数据到Session中

### 销毁

默认情况下,无操作, 30分钟自动销毁

```xml
<session-config>
  <session-timeout>30</session-timeout>
</session-config>
```

调用Session对象的invalidate()方法

```java
session.invalidate();
```
