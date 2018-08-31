<template>
  <div class="container">
      <NavBar />
      <div class="row">
          <div class="col-md-12">
              <Brand v-for="info in brandInfo" :key="info.title"
               :title="info.title" :subtitle="info.subtitle"/>
              <div class="row">
                  <router-view />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Brand from '@/components/Brand';
export default {
    name: 'app',
    components:{Brand},
    data(){
        return {
            brandInfo:{}
        }
    },
    methods:{
        getBrandInfo(){
            this.$http.get(this.$resource.brand)
                .then(resp=>this.brandInfo=resp.data)
        }
    },
    mounted(){
        this.getBrandInfo();
    }
}

</script>

<style>
@import './assets/css/bootstrap.min.css';
@import './assets/css/customFonts.css';

body{
    color:#9A9A9A;
/*    background:linear-gradient(180deg, rgba(35,35,35,1), rgba(120,120,120,.7));*/
/*    background:linear-gradient(180deg, rgba(55,55,55,1),
rgba(35,35,35,.4));*/
    background-color:#343434;
    height:100vh;
}
</style>
