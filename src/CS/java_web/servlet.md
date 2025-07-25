# servlet

## quick start

pom.xml

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax/.servlet-api</artifactId>
    <version>4.0.1</version>
    <scope>provided</scope>
</dependency>
```

!!!注意: `<scope>` 内必须为 `provided` (编译与测试环境下有效, **运行**环境无效)

如果是web项目, 那么打包后的文件没有servlet的jar包

tomcat已经内置了servlet

## 执行流程 & 生命周期

### init() 方法调用时机

```java
@Override
public void init(ServletConfig arg0) throws ServletException { }
```

注解中的loadOnStartup参数 (默认为-1)

```java
@WebServlet(urlPatterns = "/demo1", loadOnStartup = -1)
```

1. 负整数: 第一次被访问时创建Servlet对象
2. 0或正整数: 服务器启动时创建Servlet对象，数字越小优先级越高

## request

通用方式获取请求参数 (以同种方式获取post和get的参数)

`Map<String, String[]> getParameterMap()`: 获取所有参数Map集合 String[]

`getParameterValues(String name)`: 根据名称获取参数值(数组) String

`getParameter(String name)`: 根据名称获取参数值(单个值)

### 请求转发 forward

结合request对象的`req.setAttribute()`和`req.getAttribute()` 可实现两个不同资源间的请求信息共享

```java
req.getRequestDispatcher("/DispatcherTest2").forward(req, resp);
```

**请求转发特点**:

1. 浏览器地址栏路径不发生变化
2. 只能转发到当前服务器的内部资源
3. 一次请求, 可以在转发的资源间使用request共享数据

## response

### 重定向 redirect

```java
resp.sendRedirect("/request-test/responseDemo2");

// 拆解操作如下

// 1. 设置响应状态码 302
resp.setStatus(302);
// 2. 设置响应头 Location
resp.setHeader("Location", "/request-demo/resp2");
```

要加虚拟目录名称/request-test

```java
// 动态获取虚拟目录
String contextPath = req.getContextPath();
resp.sendRedirect(contextPath + "/responseDemo2");
```

也可以不用加虚拟目录

```java
resp.sendRedirect("selectAllServlet");
```

**重定向特点:**

1. 浏览器地址栏路径发生变化
2. 可以重定向到任意位置的资源(服务器内部、外部均可)
3. 两次请求, 不能在多个资源使用request共享数据

### 响应字符数据

```java
PrintWriter writer = resp.getWriter();
writer.write("public static void");
```

如果输出html数据, 则要指定contentType

```java
writer.write("<h1>小舟从此逝, 江海寄余生<h1/>");
```

setHeader()

```java
resp.setHeader("content-type", "text/html");
```

输出中文会乱码

```java
resp.setContentType("text/html;charset=utf-8");
```

### 响应字节数据

获取输入流

```java
FileInputStream fileInputStream = new FileInputStream("a.jpg");
```

与输出流

```java
ServletOutputStream outputStream = resp.getOutputStream();
```

对拷

```java
byte[] buff = new byte[1024];
int len = 0;
while ((len = fileInputStream.read()) != -1) {
    outputStream.write(buff, 0, len);
}
```

使用IOUtils类简化

先导依赖

```xml
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.15.1</version>
</dependency>
```

对拷

```java
IOUtils.copy(fileInputStream, outputStream);
```

## 关于虚拟目录

明确路径谁使用？

1. 浏览器使用: 需要加虚拟目录(项目访问路径)
2. 服务端使用: 不需要加虚拟目录

`<a href= '路径'>` 加虚拟目录
`<form action= '路径'>`加虚拟目录
`req.getRequestDispatcher("路径”)`不加虚拟目录
`resp.sendRedirect(“路径”)` 加虚拟目录
