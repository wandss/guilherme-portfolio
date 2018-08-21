<template>
    <div>
        <image-viewer :showImage="viewImage" />
        <div class="row">
            <div class="text-center">
                <img id="photoGallery" v-for="(image, index) in album" :key="index"
                 width="280" height="200"
                 :src="image.src" @click="imageDetail(index)"
                />
            </div>
        </div>
        <button class="btn btn-primary"
         @click="$router.push('/')">Voltar
        </button>
    </div>
</template>
<script>
import ImageViewer from './components/ImageViewer';
export default{
    name:'PhotoGallery',
    components:{ImageViewer},
    props:{
        albums:{
            type:Array,
            required:true,
        }
    },
    data(){
        return{
            viewImage:false,
            fullScreenImageIndex:undefined,
        }
    },
    computed:{
        album(){
            const uuid = this.$route.query.uuid
            const images = this.albums.find((images)=>
                images.uuid===uuid).image_data
            return images
        }
    },
    methods:{
        imageDetail(index){
            console.log(index)
            this.viewImage = !this.viewImage
        }

    }
}
</script>
<style scoped>
#photoGallery{
    margin:0;
    text-align:center;
}

</style>
