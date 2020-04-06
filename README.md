# vue-affix

## install
```
npm i bravo-affix

//main.js
import bravo from "bravo-affix"
Vue.install(bravo-affix)
```

### Attributes
| Attributes      | illustrate          | type      | options                           | default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| bottom | react when reach the offset to bottom of scroll container | number | — | 0 |
| top | react when reach the offset to top of scroll container | number | — | 0 |
| left | react when reach the offset to left of scroll container | number | — | 0 |
| right | react when reach the offset to right of scroll container | number | — | 0 |
| target | scroll container of affix,it's a function | () => HTMLElement | — | () => document.body |

### tips
```
u can use vertical and horizonal attributes at a same time
for example
```
```html
<bravo-affix :target="() => this.$refs.container" :top="20" :left="20">
    <button>
      Fixed at the top of container
    </button>
</bravo-affix>
```

--from dongjiayun
