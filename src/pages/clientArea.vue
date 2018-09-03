<template>
    <div class="container-fluid">
        <h3 v-if='!isLoggedIn'>
            {{message}}
            <login @getLogin="handleLogin"/>
        </h3>
        <Card v-for="album in albums" :key="album.uuid" v-else>
            <img width="280" height="200" slot="img"
             :src="album.thumbnail_data.src"
             :description="album.description"
             @click="albumDetail(album.uuid)" />
            <div slot="desc" id="description">
                <h5>{{album.description}}</h5>
            </div>
        </Card>
    </div>

</template>
<script>
    import Login from '@/pages/login';
    export default{
        name:'clientArea',
        components:{Login,},
        data(){
            return{
                albums:[],
                message:null,
                isLoggedIn:false,
            }
        },
        mounted(){
            this.getAlbums()
        },
        methods:{
            getAlbums(){
                this.$http.get(this.$resource.privateAlbums)
                    .then(resp=>{
                        this.message=null;
                        this.isLoggedIn=true;
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
            albumDetail(uuid){
                this.$router.push('/album'+uuid)
            },
            handleLogin(login){
                if(login){
                    this.getAlbums();
                }
            }
        },
    }
</script>
<style>
</style>
