# awesome-vue-tinymce

[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react.svg)](https://www.npmjs.com/package/awesome-vue-tinymce)

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/MaxWithU/awesome-vue-tinymce)

[![GitHub package version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/MaxWithU/awesome-vue-tinymce)

A small editor from vue with tinyMCE

Without tinyMCE module, without css, make it easier & flexible

## Install
``` bash
 npm i -s tinymce awesome-vue-tinymce
```

## Usage

### quick start

```html
<template>
    <Editor
        v-model="value"
        id="editor"
    />
<template>
<script>
    import 'tinymce/themes/modern/theme';
    import 'tinymce/skins/lightgray/skin.min.css';
    import 'tinymce/skins/lightgray/content.min.css';

    import AwesomeVueTinymce from 'awesome-vue-tinymce';
    export default {
        components: {
            Editor: AwesomeVueTinymce
        },
        data () {
            return {
                value: '<p>Your Text</p>'
            }
        }
    }
</script>
```

### async value



### skin

### i18N

Select language from [TinyMCE language](https://www.tiny.cloud/download/language-packages/) 

then

``` html
<script>
+	import './langs/zh_CN';  // example
    export default {
        components: {
            Editor: AwesomeVueTinymce
        },
        data () {
            return {
                value: '<p>Your Text</p>'
            }
        }
    }
</script>
```

### upload picture


## License

MIT © maxwithu <csl199254@gmail.com>
