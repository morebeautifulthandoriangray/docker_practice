import { createApp } from 'vue'
import Toaster from '@meforma/vue-toaster'
import App from './App.vue'

// Здесь будет вставляться наше вью дж приложение в DOM(document object model)
createApp(App).use(Toaster).mount('#app')
