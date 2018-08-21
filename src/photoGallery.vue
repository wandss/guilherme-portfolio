<template>
    <div>
        <div class="row">
            <div class="text-center">
                <img id="photoGallery" v-for="(image, index) in album" :key="index"
                 width="280" height="200"
                 :src="image.src"
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
        albums:{
            type:Array,
            required:true,
        }
    },
    computed:{
        album(){
            const uuid = this.$route.query.uuid
            const images = this.albums.find((images)=>
                images.uuid===uuid).image_data
            return images

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
