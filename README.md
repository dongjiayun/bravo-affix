# vue-affix

## 安装
```
npm i bravo-affix

//main.js
import bravo from "bravo-affix"
Vue.install(bravo-affix)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| bottom | 距离窗口底部达到指定偏移量后触发 | number | — | — |
| top | 距离窗口顶部达到指定偏移量后触发 | number | — | — |
| left | 距离窗口左边达到指定偏移量后触发 | number | — | — |
| right | 距离窗口右边达到指定偏移量后触发 | number | — | — |
| target | 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | — | () => document.body |


--from dongjiayun
