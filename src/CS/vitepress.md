# vitepress

## ERR_MODULE_NOT_FOUND

原因是我在`D:\working\programming_projects\jottings_website\src\CS\java_web\better_solution.md`里有这样一段包含vue插槽的代码

``` html
虽然brand对象没有statusStr属性, 但是这一段代码`{{brand.statusStr}}`会调用`getStatusStr()`方法
```

vitepress 在构建的时候就以为要去找brand.statusStr这个东西, 那当然会报错了
