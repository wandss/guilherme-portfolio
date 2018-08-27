import Vue from 'vue';
import Router from 'vue-router';
import Home from  '@/pages/home.vue';
import Album from '@/pages/album.vue';
import clientArea from '@/pages/clientArea.vue';

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
            path:'/album/:albumId',
            name:'album',
            component:Album,
            props:true,
        },
        {
            path:'/cliente',
            name:'client',
            component:clientArea,
        }
    ]
})
