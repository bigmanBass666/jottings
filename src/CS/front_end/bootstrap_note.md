# 网格

- .col- 针对所有设备。
- .col-sm-平板-屏幕宽度等于或大于 576px。
- .col-md-桌面显示器-屏幕宽度等于或大于 768px。
- .col-lg-大桌面显示器-屏幕宽度等于或大于 992px
- .col-xl-特大桌面显示器-屏幕宽度等于或大于 1200px。
- .col-xxl-超大桌面显示器-屏幕宽度等于或大于 1400px。I

# 网格排序

- q: `order-*` 要写全?(每个元素都要写???)
  a: 不, order 只是在加了 order 类名的元素之间进行排序. 没加 order 类名的元素默认最高级且按照源文件里的顺序排序
- `order-*` order 只能取 1 ~ 5, 并且 `order-first` 和 `order-last` 权重最高

# 标题与段落样式

> Bootstrap 5 默认的 font-size 为 16px, line-height 为 1.5,默认的 font-family 为"Helvetica Neue", Helvetica, Arial, sans-serif.

> 此外，所有的 \<p\> 元素 margin-top: 0、margin-bottom: 1rem (16px)。

## 标题

- 可用`h1` ~ `h6`类给字体设置对应标题样式

  ```html
  <p class="h1">This is p tag but class h1.</p>
  <p class="h2">This is p tag but class h2.</p>
  <p class="h3">This is p tag but class h3.</p>
  ```

- 也可用`display-1` ~ `display-6`. 与 `h1` ~ `h6` 类相比有着更**小**的字重与更**大**的字号

  ```html
  <p class="display-1">This is p tag but class display-1.</p>
  <p class="display-2">This is p tag but class display-2.</p>
  <p class="display-3">This is p tag but class display-3.</p>
  ```

## 段落

- \<p\> 标签添加`lead`类, 可加**大**字号
- 使用 `<small>` 标签, 可减小字号 (<u>父元素的 85%</u>)
- `text-body-secondary` 类可淡化字体颜色 (相当于旧的.text-muted)

  ```css
  .text-body-secondary {
    --bs-text-opacity: 1;
    color: var(--bs-secondary-color) !important;
  }
  ```

# 文本 text

## 对齐方式

- general

  ```html
  <p class="text-center">no.1 p</p>
  <p class="text-start">no.2 p</p>
  <p class="text-end">no.3 p</p>
  ```

- responsive

  当屏幕宽度等于或大于对应尺寸时生效

  ```html
  <p class="text-sm-center">no.1 p</p>
  <p class="text-md-center">no.2 p</p>
  <p class="text-lg-center">no.3 p</p>
  ```

## 大小写转换

```html
<p class="text-uppercase">WORD</p>
<p class="text-lowercase">word</p>
<p class="text-capitalize">Word</p>
```

## 文本溢出处理

- `text-truncate`: 溢出部分以省略号表示
- `text-nowrap`: 不换行, 文本直接溢出元素, 元素宽高不受影响
- `text-wrap`: 默认值, 自动换行

## 文字大小

`fs-1` ~ `fs-6` 对应 h1 到 h6 标题文字大小

## 字重 line height

- `fw-bolder`: 800
- `fw-bold`: 700
- `fw-normal`: 400
- `fw-light`: 300
- `fw-lighter`: 200

## 斜体

- `fst-italic`
- 取消斜体: `fst-normal`

## 行高

- `lh-1`: 1rem
- `lh-sm`: 1.25rem
- `lh-base`: 1.5rem
- `lh-lg`: 2rem

## 文字颜色

- `text-body`: Default foreground (color) and background, including components.
- `text-secondary`: Use the color option for lighter text. Use the bg option for dividers and to indicate disabled component states.
- `text-primary`: Main theme color, used for hyperlinks, focus styles, and component and form active states.
- `text-success`: Theme color used for positive or successful actions and information.
- `text-danger`: Theme color used for errors and dangerous actions.
- `text-warning`: Theme color used for non-destructive warning messages.
- `text-info`: Theme color used for neutral and informative content.
- `text-light`: Additional theme option for less contrasting colors. 柔和
- `text-dark`: Additional theme option for higher contrasting colors. 柔和
- `text-muted`: 柔和 浅灰
- `text-black-50`: 50%透明度 黑
- `text-white-50`: 50%透明度 白

## 背景颜色

与文字颜色同理, text 换成 bg

```html
<p class="bg-primary">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, soluta.
</p>
```

# 列表

## 基本样式

- 清除 `::mark` ( `list-style: none` )

  > `ul` / `ul` 加 `list-unstyled` 类

  ```html
  <ul class="list-unstyled"></ul>
  ```

- 水平排列

  > 父级 `ul` / `ul` 加 `list-inline` 类, `li` 加 `list-inline-item` 类

  ```html
  <ul class="list-inline">
    <li class="list-inline-item">asdfasdf</li>
    <li class="list-inline-item">asdfasdf</li>
    <li class="list-inline-item">asdfasdf</li>
  </ul>
  ```

## 列表组 list group

- basic

  > 父级 `ul` / `ul` 加 `list-group` 类, `li` 加 `list-group-item` 类

  ```html
  <ul class="list-group">
    <li class="list-group-item">asdf</li>
    <li class="list-group-item">asdf</li>
    <li class="list-group-item">asdf</li>
  </ul>
  ```

- 设置禁用 `.disabled` 和活动项 `.active`

  > .disabled 只是看起来被禁用, 实际上只是字体颜色变淡, 将 li 换成 a 还是能点击

  ```html
  <ul class="list-group">
    <li class="list-group-item active">asdf</li>
    <li class="list-group-item disabled">asdf</li>
    <li class="list-group-item">asdf</li>
  </ul>
  ```

- 移除列表边框: `list-group-flush`

  > 使用 `.list-group-flush` 类添加到 list-group 元素上，用以移除外边框和圆角，从而创建与其父容器边对边的列表组

- 水平分布: `list-group-horizontal`

  > .list-group-horizontal 类添加到.list-group,可以将列表项水平显示而不是垂直显示(并排而不是堆叠)

- 创建编号列表组: `list-group-numbered`

  > 可以通过简单地在.list-group 元素上添加类.list-group-numbered 来创建带有元素编号的列表组。
