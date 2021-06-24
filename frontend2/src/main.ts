import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon) // ?
  .use(store)
  .use(router)
  .mount('#app');
