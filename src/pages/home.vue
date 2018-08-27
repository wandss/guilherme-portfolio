<template>
    <div class="row">
        <Card v-for="album in albums" :key="album.uuid" @click="albumDetail(album.uuid)">
            <img :src="album.thumbnail_data.src" slot="img"
             width="280" height="200"
            />
            <div slot="desc">
                <h4>{{album.description}}</h4>
            </div>
        </Card>
    </div>
</template>
<script>
export default{
    name:'home',
    data(){
        return{
            albums:[],
        }
    },
    methods:{
        getAlbums(){
            const url = this.$resources.baseUrl+
                this.$resources.publicAlbums
            this.$http.get(url)
                .then(resp=>{
                    this.albums=resp.data
                })
                .catch(error=>console.log(error.response))
        },
        albumDetail(uuid){
            this.$router.push('/album'+uuid)
        }
    },
    mounted(){
        this.getAlbums();
    }
}
</script>
<style>
</style>
