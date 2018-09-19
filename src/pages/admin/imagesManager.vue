<template>
    <div class="container">
        <div class="row mb-5">
            <div class="col">
                <button class="btn btn-outline-warning" @click="addImage=true">
                    <span class="fa fa-plus-square"></span>
                    Nova Imagem
                </button>
            </div>
        </div>
        <div class="container mb-5">
            <div class="row">
                <div class="col">
                    <h4>Lista de Imagens</h4>
                    <img v-if="images.length>0" v-for="image in images"
                     :key="image.uuid" width="240" height="180"
                     :src="image.image_url" :alt="image.name" :title="image.name"
                     />
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col">
                <button class="btn btn-outline-success btn-block" type='button'
                 v-if="nextImages!==null" @click="getAllImages(nextImages)">
                    Mais Imagens...
                </button>
            </div>
        </div>
        <file-create :show="addImage" @close="addImage=false"
         @updateGallery="images.push($event)"
        />
    </div>
</template>
<script>
import FileCreate from '@/pages/admin/FileCreate'
export default{
    name:'imagesManager',
    components:{FileCreate,},
    data(){
        return{
            images:[],
            addImage:false,
            nextImages:null,
        }
    },
    mounted(){
        this.getAllImages(this.$resource.images)
    },
    methods:{
        getAllImages(url){
            this.$http.get(url)
                .then(resp=>{
                    let nextImages = null;
                    resp.data.results.forEach(image=>
                        this.images.push(image)
                    )
                    if(resp.data.next!==null){
                        nextImages = this.$resource.images+'/?'+
                            resp.data.next.split('?')[1]
                    }
                    this.nextImages = nextImages
                })
                .catch(error=>{
                    console.log(error.response)
                })

        },
        updateGallery(e){
            console.log(e)
            this.images.push(e)
        },
    },
}
</script>
<style>
</style>
