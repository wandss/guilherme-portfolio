import Vue from 'vue';
import Router from 'vue-router';
import ThumbnailsGallery from  './thumbnailsGallery.vue';
import PhotoGallery from './photoGallery.vue';

Vue.use(Router);

export default new Router({
  routes:[
    {path:'/',
      name:'thumbnails',
      component:ThumbnailsGallery,
    }
  ]
})
