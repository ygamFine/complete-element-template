<template>
  <div class="quill_editor">
    <quill-editor
      ref="myTextEditor"
      v-model="content"
      :options="editorOption">
    </quill-editor>
  </div>
</template>
<script>
  // 富文本样式

  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor';
  import * as Quill from 'quill'
  //quill编辑器的字体
  let fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
  let Font = Quill.import('formats/font');
  // 将字体加入到白名单
  Font.whitelist = fonts;
  Quill.register(Font, true);

  export default {
    props: [],
    data(){
      return {
        content: '',
        editorOption: {
          height: '300px',
          placeholder: '请输入...',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],

              [{'header': 1}, {'header': 2}],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{'script': 'sub'}, {'script': 'super'}],
              [{'indent': '-1'}, {'indent': '+1'}],
              [{'direction': 'rtl'}],

              [{'size': ['small', false, 'large', 'huge']}],
              [{'header': [1, 2, 3, 4, 5, 6, false]}],

              [{'color': []}, {'background': []}],
              [{'font': fonts}],
              [{'align': []}],
              ['link', 'image']
            ]
          },
          theme:'snow'
        }
      }
    },
    watch:{
      $route(){

      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        returnTextContent() {
          return this.content;
        }
    },
    components: {
      quillEditor
    }
  }
</script>

<style lang="scss">
  .quill_editor .ql-editor{
    height: 600px;
  }
  .quill_editor .ql-editing{
    left: 30px !important;
  }
</style>
