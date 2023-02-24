import App from './App.vue';
import '@/assets/styles/main.scss';

import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
