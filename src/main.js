import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from '@/router';
import resources from '@/resources';
import ImagePlaceHolder from '@/components/ImagePlaceHolder'
import ImageViewer from '@/components/ImageViewer'
import Card from '@/components/Card'
import NavBar from '@/components/navBar'
import Overlay from '@/components/Overlay'

Vue.config.productionTip = false
Vue.component('ImagePlaceHolder', ImagePlaceHolder);
Vue.component('NavBar', NavBar);
Vue.component('Overlay', Overlay);
Vue.component('Card', Card);
Vue.component('ImageViewer', ImageViewer);

Vue.prototype.$http = axios;
Vue.prototype['$resources'] = resources;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
