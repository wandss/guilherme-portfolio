<template>
    <div>
        <div class="row">
            <div class="col">
                <button class="btn btn-outline-warning" @click="addImage=true">
                    <span class="fa fa-plus-square"></span>
                    Nova Imagem
                </button>
            </div>
        </div>
        <div class="container">
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
        }
    },
    mounted(){
        this.getAllImages()
    },
    methods:{
        getAllImages(){
            this.$http.get(this.$resource.images)
                .then(resp=>{
                    this.images=resp.data.results
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
