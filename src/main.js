import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'

//import 'ant-design-vue/dist/antd.less'
createApp(App).use(store).use(router).mount('#app')

