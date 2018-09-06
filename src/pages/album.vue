<template>
    <div>
        <image-viewer :showImage="viewImage" @click="viewImage=!viewImage"
         v-if="image!==null" :imageCount="imageCount" :image="image"
         :index="currentImageIndex" @nextImage="imageDetail"
         @prevImage="imageDetail"
        />
        <div class="row">
            <div class="col">
                <div class="text-center">
                    <img id="photoGallery" v-for="(image, index) in album" :key="index"
                     width="280" height="200"
                     :src="image.src" @click="imageDetail(index)"
                    />
                </div>
            </div>
        </div>
        <div class="container-fluid" id="btn">
            <button class="btn btn-primary"
             @click="$router.push('/')">Voltar
            </button>
        </div>
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
            album:[],
        }
    },
    mounted(){
        this.getAlbum();
    },
    methods:{
        imageDetail(index){
            this.image = this.album[index]
            this.currentImageIndex = index
            this.viewImage = !this.viewImage
        },
        getAlbum(){
            this.$http.get(this.$resource.album+'/'+this.albumId)
                .then(resp=>{
                    this.album=resp.data.image_data
                })
                .catch(error=>console.log(error.response))
        }
    },
    computed:{
        imageCount(){
            return this.album.length
        }
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
#btn{
    margin-top:2rem;
}
</style>
