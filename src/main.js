import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import materialize from 'materialize-css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPaperPlane, faAngleRight, faAngleDown, faCloudUploadAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Collection from '@/components/Collection';
import message from '@/plugins/message.plugin.js';

library.add(faBars, faPaperPlane, faAngleRight, faAngleDown, faCloudUploadAlt, faCloudDownloadAlt);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Collection', Collection);

Vue.use(message);
Vue.use(materialize);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
