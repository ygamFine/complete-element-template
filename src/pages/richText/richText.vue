<template>
  <div class="view_page rich_text">
    <el-card class="box-card">
      <!--卡片头部-->
      <div slot="header" class="clearfix">
        <div class="">富文本</div>
        <div class=""><el-button @click="getRichTextCentent()">获取富文本内容</el-button></div>
      </div>
      <!--卡片内容-->
      <quill-editor ref="richRef"></quill-editor>
    </el-card>
  </div>
</template>

<script>
  // quillEditor 富文本
  import quillEditor from '@/components/common/richText/quillEditor'
  // 引入公用方法
  import * as pl from '@/public/js/public';
  export default {
    mounted() {
    },
    methods: {
      getRichTextCentent() {
        // 拿去子组件中富文本的文本值
        let content = this.$refs.richRef.returnTextContent();
        pl.alert(content,1);
      }
    },
    components: {
      quillEditor
    }
  }
</script>

<style>

</style>
