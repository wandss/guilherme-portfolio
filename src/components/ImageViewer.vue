<template>
    <Overlay :show="showImage">

    </Overlay>
</template>
<script>
import Overlay from './Overlay.vue';
export default{
    name:'ImageViewer',
    props:{
        showImage:{
            type:Boolean,
            default:false,
        }
    }
}
</script>
<style>
</style>
