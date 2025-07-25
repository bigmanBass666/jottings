# java server page

## tomcat10 使用jsp注意事项

pom.xml导jakarta依赖

```xml
<dependency>
 <groupId>org.glassfish.web</groupId>
 <artifactId>jakarta.servlet.jsp.jstl</artifactId>
 <version>3.0.1</version>
</dependency>

<dependency>
 <groupId>jakarta.servlet.jsp.jstl</groupId>
 <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
 <version>3.0.0</version>
</dependency>
```

jsp文件中

EL表达式配置

```jsp
<%@ page isELIgnored="false" %>
```

jstl配置

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

jsp编码配置

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
```

## EL 表达式 (expression language)

在jsp页面中写上`${expression}`(如`${brands}`), 可获取到域中的值

在servlet文件中

```java
req.setAttribute("brands", brands); // 在域中设值
req.getRequestDispatcher("el-demo.jsp").forward(req, resp); // 转发
```

## JSTL

JSP标准标签库(Jsp Standarded Tag Library)

### quick start

导依赖

```xml
<dependency>
 <groupId>jstl</groupId>
 <artifactId>jstl</artifactId>
 <version>1.2</version>
</dependency>

<dependency>
 <groupId>taglibs</groupId>
 <artifactId>standard</artifactId>
 <version>1.1.2</version>
</dependency>
```

在JSP页面上引入JSTL标签库

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

## 隐藏域

```html
<input type="hidden" value="${brand.id}" name="id">
```

hidden 类型的 \<input> 元素允许 Web 开发者包含用户不可见、不可改的数据，在用户提交表单时，这些数据会一并发送出。比如，正被请求或编辑的内容的 ID，或是一个唯一的安全令牌。这些隐藏的 input 元素在渲染完成的页面中完全不可见，而且没有方法可以使它重新变为可见。
