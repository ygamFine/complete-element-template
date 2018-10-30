<template>
  <div class="rich_text">
    <quill-editor
      ref="myTextEditor"
      v-model="content"
      :options="editorOption"></quill-editor>
  </div>
</template>
<script>
  // 富文本样式
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor';
  export default {
    props: ['height'],
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
              [{'font': []}],
              [{'align': []}],
              ['link', 'image']
            ]
          }
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
  .rich_text .ql-editor{
    height: 600px;
  }
  .rich_text .ql-editing{
    left: 30px !important;
  }
</style>
