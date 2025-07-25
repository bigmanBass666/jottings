# difference between CSS attribute selectors

GitHub Copilot: 这两个选择器都是CSS属性选择器，用于选择具有特定属性的HTML元素，但它们的匹配方式不同。

1. `a[href*="example"]`:
   - 选择所有`<a>`元素，其`href`属性值包含字符串`"example"`。
   - `*=` 是一个子字符串匹配选择器，表示属性值中包含指定的子字符串。
   - 例如，`<a href="https://example.com">` 和 `<a href="https://www.example.org">` 都会被选中。

2. `a[class~="logo"]`:
   - 选择所有`<a>`元素，其`class`属性值包含单词`"logo"`。
   - `~=` 是一个单词匹配选择器，表示属性值中包含指定的单词，单词之间用空格分隔。
   - 例如，`<a class="site-logo">` 不会被选中，但 `<a class="logo">` 和 `<a class="header logo">` 会被选中。

总结：

- `a[href*="example"]` 匹配包含特定子字符串的属性值。
- `a[class~="logo"]` 匹配包含特定单词的属性值。
