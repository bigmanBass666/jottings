# lenis

滑动阻尼 页面惯性滑动

<https://github.com/darkroomengineering/lenis>

```html
<script src="https://unpkg.com/lenis@1.0.45/dist/lenis.min.js"></script> 
```

```js
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
```

`scroll-behavior: auto !important` 是最重要的一句, 之前就是由于bootstrap的 `scroll-behavior: smooth;` 导致页面滑动异常迟缓.

```css
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  /* 这是最重要的一句 */
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
```

> edition 1: 2024  May 12  Sunday  01:08

> edition 2: 2024  May 12  Sunday  17:12 (45-48)
