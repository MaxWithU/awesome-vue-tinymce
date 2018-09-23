<template>
    <textarea :id= "id"></textarea>
</template>
<script>
  import tinymce from 'tinymce/tinymce';
  export default {
    data () {
      return {
        instance: [],
        setContent: () => {},
        Editor: null,
        DefaultConfig: {
          // GLOBAL
          skin: false,
          menubar: false,
          // CONFIG
          forced_root_block: 'p',
          force_p_newlines: true,
          importcss_append: true,
          content_style: `
            *                         { padding:0; margin:0; }
            html, body                { height:100%; }
          `,
          insert_button_items: 'image link | inserttable',

          // CONFIG: Paste
          paste_retain_style_properties: 'all',
          paste_word_valid_elements: '*[*]',        // word需要它
          paste_data_images: true,                  // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
          paste_convert_word_fake_lists: false,     // 插入word文档需要该属性
          paste_webkit_styles: 'all',
          paste_merge_formats: true,
          nonbreaking_force_tab: false,
          paste_auto_cleanup_on_paste: false,

          // CONFIG: Font
          fontsize_formats: '',

          // FontSelect
          font_formats: '',
          // Tab
          tabfocus_elements: ':prev,:next',
          object_resizing: true,

          // Image
          imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'
        }
      }
    },
    props: {
      height: {
        type: Number,
        default: 500
      },
      id: {
        type: String
      },
      toolbar: {
        default: `styleselect | fontselect | formatselect | fontsizeselect | forecolor backcolor | bold italic underline strikethrough | image  media | table | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | preview removeformat  hr | paste code  link | undo redo | fullscreen `,
        type: String
      },
      plugins: {
        default: '',
        type: String
      },
      value: {
        default: '',
        type: String
      },
      config: {
        type: Object,
        default: () => {
          return {
            theme: 'modern',
            height: 300
          }
        }
      },
      url: {
        default: '',
        type: String
      },
      accept: {
        default: 'image/jpeg, image/png',
        type: String
      },
      maxSize: {
        default: 2097152,
        type: Number
      },
      withCredentials: {
        default: false,
        type: Boolean
      }
    },
    mounted () {
      this.init()
    },
    beforeDestroy () {
      // 销毁tinymce
      this.$emit('on-destroy')
      this.instance.forEach((item) => {
          item.destroy()
      })
    },
    methods: {
       init () {
        const self = this
        this.Editor = tinymce.init({
          ...this.DefaultConfig,
          
          // 图片上传
          images_upload_handler: (blobInfo, success, failure) => {
            if (blobInfo.blob().size > self.maxSize) {
              failure('文件体积过大')
            }
            
            if (self.accept.indexOf(blobInfo.blob().type) > 0) {
              uploadPic()
            } else {
              failure('图片格式错误')
            }
            function uploadPic () {
              const xhr = new XMLHttpRequest()
              const formData = new FormData()
              xhr.withCredentials = self.withCredentials
              xhr.open('POST', self.url)
              xhr.onload = function () {

                if (xhr.status !== 200) {
                  // 抛出 'on-upload-fail' 钩子
                  self.$emit('on-upload-fail')
                  failure('上传失败: ' + xhr.status)
                  return
                }

                const json = JSON.parse(xhr.responseText)
                // 抛出 'on-upload-complete' 钩子
                self.$emit('on-upload-complete' , [
                  json, success, failure
                ])
              }
              formData.append('file', blobInfo.blob())
              xhr.send(formData)
            }
          },
          
          ...this.height,
          ...this.toolbar,
          ...this.plugins,

          // prop内传入的的config
          ...this.config, 
          
          // 挂载的DOM对象
          selector: `#${this.id}`,
          
          setup: (editor) => {
            // 抛出 'on-ready' 事件钩子
            editor.on(
              'init', () => {
                self.loading = false
                self.$emit('on-ready')
                editor.setContent(self.value);
              }
            )
            // 抛出 'input' 事件钩子，同步value数据
            editor.on(
              'change undo redo', () => {
                self.$emit('input', editor.getContent())
              }
            )
            editor.on(
              'keyup', () => {
                self.$emit('input', editor.getContent())
              }
            )
          }
        })
        this.Editor.then((res) => {
            this.instance = res
        })
      }
    }
  }
</script>