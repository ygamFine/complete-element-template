<template>
  <div class="braft_editor">
    <braft-editor
      ref="myTextEditor"
      v-model="content"
      :options="editorOption"></braft-editor>
  </div>
</template>
<script>
  // 富文本样式
  // 引入编辑器组件
  // import BraftEditor from 'braft-editor'
  // 引入编辑器样式
  // import 'braft-editor/dist/index.css'
  export default {
    props: [],
    data(){
      return {

      }
    },
    watch:{
      $route(){

      }
    },
    created() {
      // braftEditor.createEditorState(null);
    },
    mounted() {

    },
    methods: {
      returnTextContent() {
        // return this.content;
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">

</style>
