import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
// ROUTER
import router  from './router.js'

// VUETIFY
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// MDI/FONT
import '@mdi/font/css/materialdesignicons.css';
import { createPinia } from 'pinia';
// import './utils/amplify.js';


// import './utils/awsCognito.js'
const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

import ComponentPlugins from './plugins/component.js'
// console.log(awsExports);

const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.use(ComponentPlugins)
app.mount('#app')