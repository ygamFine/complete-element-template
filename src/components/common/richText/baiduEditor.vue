<template>
  <div class="baidu_editor">
    <textarea id="editor">
    </textarea>
  </div>
</template>
<script>

  export default {
    props: [],
    data(){
      return {
        CKEDITOR: {},
        ckeditorConfig: {
          toolbar: [
            { name: 'document', items: [ 'Print' ] },
            { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
            { name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
            { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting' ] },
            { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
            { name: 'align', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
            { name: 'links', items: [ 'Link', 'Unlink' ] },
            { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
            { name: 'insert', items: [ 'Image', 'Table' ] },
            { name: 'tools', items: [ 'Maximize' ] },
            { name: 'editing', items: [ 'Scayt' ] }
          ],

          // Since we define all configuration options here, let's instruct CKEditor to not load config.js which it does by default.
          // One HTTP request less will result in a faster startup time.
          // For more information check http://docs.ckeditor.com/ckeditor4/docs/#!/api/CKEDITOR.config-cfg-customConfig
          customConfig: '',

          // Sometimes applications that convert HTML to PDF prefer setting image width through attributes instead of CSS styles.
          // For more information check:
          //  - About Advanced Content Filter: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_advanced_content_filter
          //  - About Disallowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_disallowed_content
          //  - About Allowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_allowed_content_rules
          disallowedContent: 'img{width,height,float}',
          extraAllowedContent: 'img[width,height,align]',

          // Enabling extra plugins, available in the full-all preset: http://ckeditor.com/presets-all
          extraPlugins: 'tableresize,uploadimage,uploadfile',


          /*********************** File management support ***********************/
          // In order to turn on support for file uploads, CKEditor has to be configured to use some server side
          // solution with file upload/management capabilities, like for example CKFinder.
          // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_ckfinder_integration

          // Uncomment and correct these lines after you setup your local CKFinder instance.
          // filebrowserBrowseUrl: 'http://zhcl.jnaw.top',
          filebrowserUploadUrl: 'http://zhcl.jnaw.top/canlian/file/fileupload2?type=Images&responseType=json',
          /*********************** File management support ***********************/

          // Make the editing area bigger than default.
          height: 800,

          // An array of stylesheets to style the WYSIWYG area.
          // Note: it is recommended to keep your own styles in a separate file in order to make future updates painless.
          contentsCss: [ 'https://cdn.ckeditor.com/4.8.0/full-all/contents.css', 'mystyles.css' ],

          // This is optional, but will let us define multiple different styles for multiple editors using the same CSS file.
          bodyClass: 'document-editor',

          // Reduce the list of block elements listed in the Format dropdown to the most commonly used.
          format_tags: 'p;h1;h2;h3;pre',

          font_names: '宋体/SimSun;新宋体/NSimSun;仿宋_GB2312/FangSong_GB2312;楷体_GB2312/KaiTi_GB2312;黑体/SimHei;微软雅黑/Microsoft YaHei;',

          // Simplify the Image and Link dialog windows. The "Advanced" tab is not needed in most cases.

          // removeDialogTabs : 'image:advanced;image:Upload;image:Link',

          // Define the list of styles which should be available in the Styles dropdown list.
          // If the "class" attribute is used to style an element, make sure to define the style for the class in "mystyles.css"
          // (and on your website so that it rendered in the same way).
          // Note: by default CKEditor looks for styles.js file. Defining stylesSet inline (as below) stops CKEditor from loading
          // that file, which means one HTTP request less (and a faster startup).
          // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_styles
          stylesSet: [
            /* Inline Styles */
            { name: 'Marker', element: 'span', attributes: { 'class': 'marker' } },
            { name: 'Cited Work', element: 'cite' },
            { name: 'Inline Quotation', element: 'q' },

            /* Object Styles */
            {
              name: 'Special Container',
              element: 'div',
              styles: {
                padding: '5px 10px',
                background: '#eee',
                border: '1px solid #ccc'
              }
            },
            {
              name: 'Compact table',
              element: 'table',
              attributes: {
                cellpadding: '5',
                cellspacing: '0',
                border: '1',
                bordercolor: '#ccc'
              },
              styles: {
                'border-collapse': 'collapse'
              }
            },
            { name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
            { name: 'Square Bulleted List', element: 'ul', styles: { 'list-style-type': 'square' } },
            {
              name: 'Image on Left',
              element: 'img',
              styles: { 'width' : '100%' }
            }
          ]
        }
      }
    },
    watch:{

    },
    created() {

    },
    mounted() {
      let self = this;
      // 富文本的配置数据
      let config = this.ckeditorConfig;
      // 开启定时器
      setTimeout(function () {

        self.CKEDITOR = require('CKEDITOR');
        // 初始化 富文本加载
        self.CKEDITOR.replace( 'editor' ,config);

      },2000)

    },
    methods: {
      returnTextContent() {
        // 获取当前填写的数据
        var editorData = this.CKEDITOR.instances.editor.getData();
        return editorData;
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">
  iframe .cke_editable img{
    max-width: 100%;
    height: auto;
  }
</style>
