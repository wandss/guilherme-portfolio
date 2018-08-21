<template>
  <div class="row">
      <div class="col-md-12">
          <Brand v-for="info in brandInfo" :key="info.title"
           :title="info.title" :subtitle="info.subtitle"/>
          <div class="row">
              <router-view :albums="albums"/>
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
                albums:[],
                photoGallery:[],
                brandInfo:{},
            }
        },
        methods:{
            getBrandInfo(){
                this.$http.get('/api/v1/frontend/brand')
                    .then(resp=>this.brandInfo=resp.data)
            }
        },
        created(){
            this.$http.get(this.imageUrl)
                .then(resp=>{
                    this.albums = resp.data;
                })
                .catch(error=>console.log(error.response))
            this.getBrandInfo();
        },
    }
</script>

<style scoped>

</style>
