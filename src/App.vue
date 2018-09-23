<template>
  <div class="app">
    <awesome-vue-tinymce
      id="editor"
      v-model ="value"
      ref="editor"
      @on-ready="ready = true"
    />
    <button @click="changeValue">change value</button>
    {{value}}
  </div>
</template>
<script>
  import AwesomeVueTinymce from './components/index.js'
  import 'tinymce/themes/modern/theme';
  import 'tinymce/skins/lightgray/skin.min.css';
  import 'tinymce/skins/lightgray/content.min.css';
  export default {
    name: 'app',
    components: { AwesomeVueTinymce },
    data () {
      return {
        ready: false,
        value: '<p>input your word</p>'
      }
    },
    methods: {
      changeValue () {
        if (!this.ready) return
        const value = '<p> async content</p>'
        this.value = value
        this.$refs.editor.instance.map((item) => { 
          item.setContent(value)
        })
      }
    }
  }
</script>