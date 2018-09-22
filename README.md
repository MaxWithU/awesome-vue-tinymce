# Vue2-Tinymce-Editor

A small editor from vue with tinyMCE

Without tinyMCE, without css, so you can try it by yourself.

## Install
``` bash
 npm i -s tinymce awesome-vue-tinymce
```

## Usage

### normal

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


### upload picture


## License

MIT © shili.chen <shili.chen@weimob.com>
