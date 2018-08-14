<template>
  <div class="row">
      <div class="col-md-12">
          <Brand title="App Name" subtitle="Fotografia"/>
          <div class="row">
              <ImagePlaceHolder v-for="album in albums" :key="album.uuid"
               width="280" height="200"
               :src="album.thumbnail_data.src"
               :description="album.description"
               @click="albumDetail(album.uuid)"            
              />
          </div>
      </div>
  </div>
</template>

<script>
    import Brand from './components/Brand';
    import CardContainer from './components/CardContainer';
    import Card from './components/Card';
    import ImagePlaceHolder from './components/ImagePlaceHolder';

    export default {
        name: 'MainContainer',
        components:{
            Brand, CardContainer, Card, ImagePlaceHolder
        },
        data(){
            return{
                profilePicture:"",
                imageUrl:'/api/v1/albums/',
                selfData:"/users/self",
                albums:[],
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
            albumDetail(album){
                /*render a new component with image_data*/
                console.log(album)
            }
        }
    }
</script>

<style scoped>

</style>
