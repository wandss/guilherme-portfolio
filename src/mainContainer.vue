<template>
  <div class="row">
      <div class="col-md-12">
          <Brand title="App Name" subtitle="Fotografia"/>
          <div class="row">
              <ThumbnailsGallery :albums="albums"
               @albumDetail="albumDetail"/>
          </div>
      </div>
  </div>
</template>

<script>
    import Brand from './components/Brand';
    import CardContainer from './components/CardContainer';
    import Card from './components/Card';

    export default {
        name: 'MainContainer',
        components:{
            Brand, CardContainer, Card},
        data(){
            return{
                profilePicture:"",
                imageUrl:'/api/v1/albums/public/?q=True',
                selfData:"/users/self",
                albums:[],
                photoGallery:[],
            }
        },
        created(){
            this.$http.get(this.imageUrl)
                .then(resp=>{
                    this.albums = resp.data;
                })
                .catch(error=>console.log(error.response))

        },
        methods:{
            albumDetail(uuid){
                /*render a new component with image_data*/
                this.photoGallery = this.albums.filter((album=>
                    album.uuid===uuid
                ))
            }
        }
    }
</script>

<style scoped>

</style>
