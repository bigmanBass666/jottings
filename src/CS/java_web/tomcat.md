# tomcat

## 更改字符编码

con/logging.properties

```txt
java.util.logging.ConsoleHandler.encoding = UTF-8
```

UTF-8改为GBK

## 更改端口号

```xml
<Connector port="8080" protocol="HTTP/1.1"
            connectionTimeout="20000"
            redirectPort="8443"
            maxParameterCount="1000"
            />
```

8080可更改为0~65535之间的值

设置为80可以直接通过localhost访问服务器, 因为http协议默认端口号为80

## Tomcat 10中Servlet无法正常使用的解决办法

<https://blog.csdn.net/qq_55069056/article/details/118105044>

### 原因分析

在Tomcat 10中把包名从以往版本的javax改成了jakarta，而maven导包的时候依旧使用原来的javax，导致Tomcat 10服务器的Servlet接口和我写的servlet文件不匹配，从而无法正常运行。

### 解决方案

- 方案一
将Tomcat 10换成更早的版本

- 方案二
在maven中导入Tomcat 10对应的jakarta.servlet-api

    ```xml
    <dependency>
        <groupId>jakarta.servlet</groupId>
        <artifactId>jakarta.servlet-api</artifactId>
        <version>6.1.0-M1</version>
    </dependency>
    ```
