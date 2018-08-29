<template>
    <div>
        <h3 v-if='message !== undefined'>
            {{message}}
        </h3>
        <Card v-for="album in albums" :key="album.uuid">
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
 export default{
    name:'clientArea',
    data(){
        return{
            albums:[],
            message:undefined,
        }
    },
    mounted(){
        this.getAlbums()
    },
    methods:{
        getAlbums(){
            this.$http.get(this.$resources.privateAlbums)
                .then(resp=>{
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
        }
    }
 }
</script>
<style>
</style>
