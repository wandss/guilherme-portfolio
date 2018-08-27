<template>
    <div>
        {{album}}
        <image-viewer :showImage="viewImage" @click="viewImage=!viewImage"
        v-if="image!==null" :imageCount="imageCount" :image="image"
        :index="currentImageIndex" @nextImage="imageDetail"
        @prevImage="imageDetail"
        />
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
export default{
    name:'PhotoGallery',
    props:{
        albumId:{
            type:String
        }
    },
    data(){
        return{
            viewImage:false,
            image:null,
            currentImageIndex:0,
        }
    },
    computed:{
        album(){
            console.log('OKOKOKOK')
            console.log(this.albumId)
            const uuid = this.$route.query.uuid
            const images = this.albums.find((images)=>
                images.uuid===uuid).image_data
            return images
        },
        imageCount(){
            return this.album.length;
        }
    },
    methods:{
        imageDetail(index){
            this.image = this.album[index]
            this.currentImageIndex = index
            this.viewImage = !this.viewImage
        },
    }
}
</script>
<style scoped>
#photoGallery{
    margin:0;
    text-align:center;
}
img{
    cursor:pointer;
}

</style>
