import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import ImagePlaceHolder from './components/ImagePlaceHolder.vue'
import ThumbnailsGallery from './thumbnailsGallery'
import PhotoGallery from './photoGallery'
import NavBar from './navBar'

Vue.config.productionTip = false
Vue.component('ImagePlaceHolder', ImagePlaceHolder);
Vue.component('ThumbnailsGallery', ThumbnailsGallery);
Vue.component('PhotoGallery', PhotoGallery);
Vue.component('NavBar', NavBar);

Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
