<template>
    <div>
        <h3 v-if='message !== undefined'>
            {{message}}
        </h3>
        <ImagePlaceHolder v-for="album in albums" :key="album.uuid"
         width="280" height="200"
         :src="album.thumbnail_data.src"
         :description="album.description"
         @click="albumDetail(album.uuid)"
        />
    </div>

</template>
<script>
 export default{
     name:'clientArea',
     data(){
         return{
             url:'/api/v1/albums/private/?q=True',
             albums:[],
             message:undefined,
         }
     },
     created(){
         this.$http.get(this.url)
             .then(resp=>{
                 this.albums = resp.data;
             })
             .catch(error=>{
                 console.log(error)
                 console.log(error.response)
                 if(error.response.status === 403){
                     this.message = 'É necessário logar para ter acesso à essa área!!!'
                 }
             })


     },
 }
</script>
<style>
</style>
