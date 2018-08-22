<template>
    <Overlay :show="showImage">
        <div id="close"  @click="$emit('click')">
            &times
        </div>
        <div id="image">
            <img src='/media/uploads/Lighthouse.jpg' />
        </div>

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
    },
}
</script>
<style scoped>
img{
    max-width:100vw;
    max-height:100vh;
}
#close{
    float:right;
    margin-right:2rem;
    font-size:4rem;
    cursor:pointer;
    text-shadow:1px 4px 2px #333;
    color:#9A9A9A;
}
#close:hover{
    color:#EFEFEF;
    text-shadow:1px 4px 20px #555;
    transition: all .3s ease-in;
}
#image{
    padding:2rem 2rem 2rem 2rem;
    text-align:center;
}
#next{
    float:right;
}
#prev{
    float:left;
}

</style>
