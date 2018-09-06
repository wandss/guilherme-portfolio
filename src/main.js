import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from '@/router';
import VueCookies from 'vue-cookies';
import resources from '@/resources';
import ImagePlaceHolder from '@/components/ImagePlaceHolder'
import ImageViewer from '@/components/ImageViewer'
import PhotoCard from '@/components/PhotoCard'
import NavBar from '@/components/navBar'
import Overlay from '@/components/Overlay'
import AppInput from '@/components/AppInput'
import AppTextArea from '@/components/AppTextArea'
import Alert from '@/components/Alert';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

Vue.config.productionTip = false
Vue.component('ImagePlaceHolder', ImagePlaceHolder);
Vue.component('NavBar', NavBar);
Vue.component('Overlay', Overlay);
Vue.component('PhotoCard', PhotoCard);
Vue.component('ImageViewer', ImageViewer);
Vue.component('AppInput', AppInput);
Vue.component('AppTextArea', AppTextArea);
Vue.component('Alert', Alert);
Vue.use(VueCookies)
Vue.prototype.$http = axios;
Vue.prototype.$resource = resources;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
