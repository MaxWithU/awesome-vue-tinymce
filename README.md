# awesome-vue-tinymce

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/MaxWithU/awesome-vue-tinymce)
[![npm](https://img.shields.io/npm/v/awesome-vue-tinymce.svg)](https://www.npmjs.com/package/awesome-vue-tinymce)


A small editor from vue with tinyMCE

Without tinyMCE module, without css, make it easier & flexible

## Install
```bash
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
    import 'tinymce/skins/ligshtgray/skin.min.css';
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

```html
<template>
    <awesome-vue-tinymce
      id="editor"
      v-model ="value"
      ref="editor"
      @on-ready="ready = true"
    />
</template>
<script>
    export default {
        methods: {
            setValue (value) {
                // setValue
                this.$refs.editor.instance.forEach((item) => { 
                    item.setContent(value)
                })
            }
        }
    }
</script>
```

### skin

If you would like to create your own skin, [Make your skin here](http://skin.tiny.cloud/) ,then

```html
<template>
    <Editor
        v-model="value"
        id="editor"
    />
<template>
<script>
    import 'tinymce/themes/modern/theme';
-   import 'tinymce/skins/lightgray/skin.min.css';
-   import 'tinymce/skins/lightgray/content.min.css';
+   import './custom/skin.min.css';
+   import './custom/content.min.css';
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

### i18N

Get language from [TinyMCE language](https://www.tiny.cloud/download/language-packages/) 

then

``` html
<template>
    <Editor
        v-model="value"
        id="editor"
        :config="{
            language: 'zh_CN'
        }"
    />
<template>
<script>
    import 'tinymce/themes/modern/theme';
    import 'tinymce/skins/lightgray/skin.min.css';
    import 'tinymce/skins/lightgray/content.min.css';
    import AwesomeVueTinymce from 'awesome-vue-tinymce';
+   import './langs/zh_CN';  // example

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
