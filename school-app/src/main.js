import { createApp } from "vue";
import { Button, Tabbar, TabbarItem,Icon } from "vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
import "lib-flexible";

const app = createApp(App) // 创建实例
app.use(Button).use(Tabbar).use(Icon).use(TabbarItem);
app.use(router)
app.use(store)

app.mount('#app')
