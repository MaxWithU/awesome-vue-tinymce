<template>
  <div class="app">
    <vue-tinymce-editor />
  </div>
</template>

<script>
import VueTinymceEditor from '@/components/index.js'
import 'tinymce/themes/modern/theme';
import 'tinymce/skins/lightgray/skin.min.css';
import 'tinymce/skins/lightgray/content.min.css';
export default {
  name: 'app',
  components: { VueTinymceEditor }
}
</script>

