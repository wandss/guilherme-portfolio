import Vue from 'vue';
import Router from 'vue-router';
import Home from  '@/pages/home.vue';
import Album from '@/pages/album.vue';
import clientArea from '@/pages/clientArea.vue';
import contact from '@/pages/contact.vue';
import logout from '@/pages/logout.vue';
import ManageAlbums from '@/pages/manageAlbums';
import ImagesManager from '@/pages/imagesManager';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
        },
        {
            path:'/album:albumId',
            name:'album',
            component:Album,
            props:true,
        },
        {
            path:'/cliente',
            name:'client',
            component:clientArea,
        },
        {
            path:'/contact',
            name:'contact',
            component:contact,
        },
        {
            path:'/logout',
            name:'logout',
            component:logout,
        },
        {
            path:'/managealbums',
            name:'managealbums',
            component:ManageAlbums,
        },
        {
            path:'/imagesmanager',
            name:'imagesmanager',
            component:ImagesManager,
        }
    ]
})
