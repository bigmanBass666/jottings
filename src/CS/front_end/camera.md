# 使用摄像头

<https://blog.csdn.net/qq_42586895/article/details/108258057>

```javascript
const media = document.getElementById('media') // video元素

// navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => { // 请求不带任何参数的视频和音频
navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' } }, audio: false }).then(stream => { // 移动设备，指定使用后置摄像头
// 将视频流设置为video元素的源
media.srcObject = stream
// 低版本浏览器
// media.src = window.URL.createObjectURL(stream)
media.play()
})
```
