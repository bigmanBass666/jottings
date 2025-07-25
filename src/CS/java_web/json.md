# json

## 查询所有品牌

查询一般用get请求

服务端返回json字符串数据时的注意事项

由于返回内容包含有中文, 所以

```java
resp.setContentType("text/html;charset=utf-8");
```

more

```java
List<Brand> brands = brandService.selectAll();  

String jsonString = JSON.toJSONString(brands);

resp.setContentType("text/html;charset=utf-8");
resp.getWriter().write(jsonString);
```

## 新增品牌

**增删改**一般用post请求

服务端获取post参数与以往的不同之处

因为客户端发送的请求数据是json格式, 所以不能使用`req.getParameter()`方法

要直接用输入流读取整个请求数据

```java
BufferedReader br = request.getReader();
String params = br.readLine();
```

此时params就是整个请求体
