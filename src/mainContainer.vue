<template>
  <div class="row">
      <div class="col-md-12">
          <Brand title="App Name" subtitle="Fotografia"/>
          <div class="row">
              <ImagePlaceHolder v-for="album in albums" :key="album.uuid"
               width="395" height="287"
               :src="album.thumbnail"
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
                    console.log(resp.data)
                    this.albums = resp.data;
                })
                .catch(error=>console.log(error.response))

        },
    }
</script>

<style scoped>

</style>
