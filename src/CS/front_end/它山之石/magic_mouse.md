# magicMouse

色相反转光标小球 深圳素马设计官网

<https://github.com/dshongphuc/magic-mouse-js>
[素马设计官网](https://sumaart.com)

CDN

```html
<script type="text/javascript" src="https://res.cloudinary.com/veseylab/raw/upload/v1684982764/magicmouse-2.0.0.cdn.min.js"></script>
```

**(必须在initialize之前)** 给每一个需要加上hover效果的元素加上 `magic-hover` 类名.

```js
document.querySelectorAll('a, button')
    .forEach(el => {
        el.classList.add('magic-hover')
    })
```

initialize

```js
const options = {
    "outerStyle": "disable",
    "hoverEffect": "pointer-overlay",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
}
magicMouse(options)
```

args

```js
cursorOuter: default 'circle' | 'disable'
hoverEffect: default 'circle-move' | 'pointer-blur' | 'pointer-overlay'
```

less

```less
// magic_mouse
#magicPointer {
  height: 30px;
  width: 30px;
  mix-blend-mode: difference;
  box-shadow: 0px 0px 15px -5px #fff;
  z-index: 9999;

  &.pointer-overlay {
    height: 50px;
    width: 50px;
  }
}
```

**注意:** 每一个 `.magic-hover` 标签在mouseleave之后会被js加上 `transform: translate3d(0,0,0)`. 所以如果原先的 `.magic-hover` 标签有写好的 `transform` 属性, 那么它会被覆盖掉.

为了解决这个问题, 不妨深入magicMouse源码

```js
t.addEventListener("mouseleave", (r => {
  switch (/* t.style.transform = "translate3d(0,0,0)", */
  e.hoverEffect) {
    case "circle-move":
      m()
      break
    case "pointer-blur":
      A("pointer-blur")
      break
    case "pointer-overlay":
      A("pointer-overlay")
  }
}
))
```

所注释掉的即是问题所在.

> edition 1: 2024  May 12  Sunday  01:27

> edition 2: 2024  May 12  Sunday  18:01 (添加magic-hover类名代码提前)
