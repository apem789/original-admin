import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App)

app
  .use(store)
  .use(router)
  .mount('#app')

/** ui 按需 */
import { Col, Row, Button, Layout } from 'ant-design-vue'

app
  .use(Col)
  .use(Row)
  .use(Button)
  .use(Layout)
