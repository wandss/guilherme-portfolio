<template>
  <div class="row">
      <div class="col-md-12">
          <Brand title="App Name" subtitle="Fotografia"/>
          <CardContainer :hasImage="true">
            <ImagePlaceHolder slot="image"
              width="400" height="320"
             />
            <div slot="content">
                <h1>
                Teste teste teste
                Teste teste teste
                Teste teste teste
                Teste teste teste
                Teste teste teste
                Teste teste teste
                Teste teste teste
                Teste teste teste
                Teste teste teste
                Teste teste teste
                </h1>
            </div>
          </CardContainer>
          <CardContainer :hasImage="true" v-for="(image, index) in images"
           :key="index">
            <ImagePlaceHolder slot="image"
             :src="image.low_resolution.url"
             :width="image.low_resolution.width"
             :height="image.low_resolution.height"
             />
             <div slot="content">
                 <h2>{{index}} - Image loaded from instagram </h2>
             </div>
          </CardContainer>

      </div>
  </div>
</template>

<script>
    import axios from 'axios';
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
                baseUrl:"https://api.instagram.com/v1",
                selfData:"/users/self",
                images:[],
            }
        },
        created(){
            //const url = "https://api.instagram.com/v1/tags/nofilter/media/recent?access_token="
            /*
            this.getProfileData();
            this.getRecentData();
            */

        },
        methods:{
            getProfileData(){
                /*
                const baseUrl = "https://api.instagram.com/v1";
                const selfData = "/users/self";
                const url = "https://api.instagram.com/v1/users/self/media/recent/"
                */
                const url = this.baseUrl+this.selfData

                axios.get(url+'/?access_token=')
                    .then(resp=>{
                        this.profilePicture=resp.data.data.profile_picture;
                    })
                    .catch(error=>console.log(error.response))
            },
            getRecentData(){
                const url = this.baseUrl+this.selfData+'/media/recent';

                axios.get(url+'/?access_token=')
                    .then(resp=>{
                        this.images = resp.data.data.map((images=>
                            images.images
                        ));
                    })
                    .catch(error=>{
                        console.log(error)
                    })

            }
        }
    }
</script>

<style scoped>

</style>
