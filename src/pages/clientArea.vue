<template>
    <div class="container-fluid">
        <Alert cssClass="danger" :showAlert="showAlert">
            {{error}}
        </Alert>
        {{showAlert}}
        <div v-if='!isLoggedIn'>
            <Alert :showAlert="!isLoggedIn" cssClass="info">
                <h3>Atenção!</h3>
                <h4>{{message}}</h4>
            </Alert>
            <login @getLogin="handleLogin"/>
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
        <button type="button" @click="showAlert=!showAlert">Show</button>
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
                error:null,
                showAlert:false,
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
                else{
                    console.log('OKOKOK')
                    this.error = 'Verifique usuário e senha.'
                }
            }
        },
    }
</script>
<style>
.fade-enter-active, .fade-leave-active{
    transition:opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity:0;
}
</style>
