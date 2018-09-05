<template>
    <div class="container-fluid">
        <Alert :showAlert="showAlert" :cssClass="alertCss" @close="showAlert=false">
            <h4>{{message}}</h4>
        </Alert>
        <div v-if='!isLoggedIn'>
            <login @getLogin="handleLogin" @closeAlert="showAlert=false"/>
        </div>
        <transition name="appear" v-else>
            <Card v-for="album in albums" :key="album.uuid">
                <img width="280" height="200" slot="img"
                 :src="album.thumbnail_data.src"
                 :description="album.description"
                 @click="albumDetail(album.uuid)" />
                <div slot="desc" id="description">
                    <h5>{{album.description}}</h5>
                </div>
            </Card>
        </transition>
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
                isLoggedIn:true,
                showAlert:false,
                alertCss:'info',
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
                        this.albums = resp.data;
                        if(this.albums.length===0){
                            this.message="Hmmm... parece que não existem albums disponíveis!";
                            this.showAlert=true;
                            this.alertCss="warning";
                        }
                        else{
                            //Create Alert with album description as message
                            //Or create Welcome alert with desctiptive message.
                        }
                })
                .catch(error=>{
                    if(error.response.status === 403){
                        this.message = 'É necessário logar para ter acesso a essa área!!!'
                        this.showAlert=true;
                        this.isLoggedIn=false;
                    }
                })
            },
            albumDetail(uuid){
                this.$router.push('/album'+uuid)
            },
            handleLogin(login){
                if(login){
                    this.isLoggedIn=true;
                    this.showAlert=false;
                    this.getAlbums();
                }
                else{
                    this.message= 'Verifique usuário e senha.'
                    this.showAlert=true;
                    this.alertCss='danger';
                }
            },
        },
    }
</script>
<style>
.fade-enter-active, .fade-leave-active{
    transition:opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity:1;
}
</style>
