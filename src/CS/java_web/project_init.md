# project_init

## 三层架构 项目结构

文件夹

```txt
E:.
├───src
│   └───main
│       ├───webapp
│       │   └───WEB-INF
│       ├───java
│       │   └───com
│       │       └───theta
│       │           ├───web
│       │           ├───service
│       │           ├───mapper
│       │           ├───pojo
│       │           └───util
│       └───resources
│           └───com
│               └───theta
│                   └───mapper
└───target
```

文件

```txt
E:.
│   pom.xml
│
└───src
    └───main
        ├───webapp
        │   │   index.html
        │   │   addBrand.jsp
        │   │   brand.jsp
        │   │   update.jsp
        │   │
        │   └───WEB-INF
        │           web.xml
        │
        ├───java
        │   └───com
        │       └───theta
        │           ├───web
        │           │       SelectAllServlet.java
        │           │       AddServlet.java
        │           │       SelectByIdServlet.java
        │           │       UpdateServlet.java
        │           │       DeleteServlet.java
        │           │
        │           ├───service
        │           │       BrandService.java
        │           │
        │           ├───mapper
        │           │       BrandMapper.java
        │           │
        │           ├───pojo
        │           │       Brand.java
        │           │
        │           └───util
        │                   SqlSessionFactoryUtils.java
        │
        └───resources
            │   mybatis-config.xml
            │
            └───com
                └───theta
                    └───mapper
                            BrandMapper.xml
```

## preparation

记得 deploy 将前端文件同步至 target

记得打包一次war包

## 关于导依赖

1. 导mybatis依赖时要记得导**mysql驱动**
