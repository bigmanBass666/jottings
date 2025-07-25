# better_solution

## 用户注册逻辑

```java
public Boolean register(User user) {
  SqlSession sqlSession = factory.openSession();

  UserMapper mapper = sqlSession.getMapper(UserMapper.class);

  User u = mapper.selectByUsername(user.getUsername());

  if (u == null) { // 如果用户名不存在, 则创建新用户
   mapper.add(user);
   sqlSession.commit();
  }

  sqlSession.close();

  // 灵魂之处
  return u == null;
}
```

## 看不清, 换一张验证码

```html
<img src="checkCodeServlet" id="checkCodeImg" />
<a href="#" id="changeImg">看不清？</a>
```

```javascript
document.querySelector("#changeImg").addEventListener("click", function () {
  document.querySelector("#checkCodeImg").src = "checkCodeServlet?" + new Date().getMilliseconds()
})
```

## 根据status的1或0显示启用/禁用

brand品牌对象有status属性

```java
// 状态：0：禁用 1：启用
private Integer status;
```

直接增加一个根据status获取"启用"/"禁用"方法 `getStatusStr`

```java
// 逻辑视图
public String getStatusStr() {
    return this.status == 1 ? "启用" : "禁用";
}
```

前端页面

```html
<td>{{brand.statusStr}}</td>
```

虽然brand对象没有statusStr属性, 但是这一段代码`{{brand.statusStr}}`会调用`getStatusStr()`方法
