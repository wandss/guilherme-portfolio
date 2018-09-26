<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h4>{{title}}</h4>
                <img v-if="images.length>0" v-for="image in images" 
                  @click="$emit('click', image)"
                 :key="image.uuid" width="240" height="180"
                 :class="{'selectedImage':image.selected}"
                 :src="image.image_url" :alt="image.name" :title="image.name"
                 />
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Gallery',
    props:{
        images:{
            type:Array,
            required:true,
            default:()=>[],
        },
        title:{
            type:String,
        },
    },
    data(){
        return{
            selectedImage:null,
        }
    },
}
</script>
<style scoped>
img{
    cursor:pointer;
}
.selectedImage{
    -webkit-filter:grayscale(100%);
    filter:grayscale(100%);
}
</style>
