import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia.use(piniaPluginPersistedstate))

app.mount('#app')
