import Vue from 'vue';
import Router from 'vue-router';
import ThumbnailsGallery from  './thumbnailsGallery.vue';
import PhotoGallery from './photoGallery.vue';
import clientArea from './clientArea.vue';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'albums',
            component:ThumbnailsGallery,
        },
        {
            path:'/album',
            name:'album',
            component:PhotoGallery,
            props:true,
        },
        {
            path:'/cliente',
            name:'client',
            component:clientArea,
        }
    ]
})
