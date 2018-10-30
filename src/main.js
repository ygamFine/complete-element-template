import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'


// 基础样式
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/icon.css';
import './public/css/reset.css'
import './public/css/index.css'

// elementUI
Vue.use(ElementUI);
// 富文本
Vue.use(VueQuillEditor);
// 防止 vue 启动时生成生产提示
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
