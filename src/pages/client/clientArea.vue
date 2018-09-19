<template>
    <div class="container">
        <Alert :showAlert="showAlert" :cssClass="alertCss" @close="showAlert=false">
            <h4>{{message}}</h4>
        </Alert>
        <div v-if='!isLoggedIn'>
            <login @getLogin="handleLogin" @closeAlert="showAlert=false"/>
        </div>
        <div class="row mb-5">
            <PhotoCard v-for="album in albums" :key="album.uuid">
                <div slot="name" id="albumName">
                    <h5> {{album.name}} </h5>
                    <p>{{new Date(album.create_date).toLocaleString()}}</p>
                </div>
                <img width="280" height="200" slot="img"
                 :src="album.thumbnail_data.src"
                 :description="album.description"
                 @click="albumDetail(album.uuid)" />
                <div slot="desc" id="description">
                    <h5>{{album.description}}</h5>
                </div>
            </PhotoCard>
        </div>
        <div class="row mb-5">
            <div class="col">
                <button class="btn btn-outline-success btn-block" type='button'
                 v-if="nextAlbums!==null" @click="getAlbums(nextAlbums)">
                    Mais Albums ...
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import Login from '@/pages/forms/login';
    export default{
        name:'clientArea',
        components:{Login,},
        data(){
            return{
                albums:[],
                message:null,
                nextAlbums:null,
                isLoggedIn:true,
                showAlert:false,
                alertCss:'info',
            }
        },
        mounted(){
            this.getAlbums(this.$resource.privateAlbums+'/?q=True')
        },
        methods:{
            getAlbums(url){
                this.$http.get(url)
                    .then(resp=>{
                        let nextAlbums = null
                        this.message=null;
                        resp.data.results.forEach(album=>
                            this.albums.push(album)
                        )
                        if(resp.data.next!==null){
                            nextAlbums = this.$resource.privateAlbums+'/?'+
                                resp.data.next.split('?')[1]
                        }
                        this.nextAlbums = nextAlbums;
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
                    this.getAlbums(this.$resource.privateAlbums+'/?q=True');
                }
                else{
                    this.message= 'Verifique usuário e senha.'
                    this.showAlert=true;
                    this.alertCss='danger';
                }
            },
        },
        computed:{
            albumDate(date){
                return new Date(date).toLocaleString()

            },
        }
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
