<template>
    <div class="container">
        <div class="row">
            <PhotoCard v-for="album in albums" :key="album.uuid"
             @click="albumDetail(album.uuid)">
                <div slot="name" id="albumName">
                    <h5>{{album.name}}</h5>
                    <p>
                        Junho /2018
                    </p>
                </div>
                <img :src="album.thumbnail_data.src" slot="img"
                 width="280" height="200"
                />
                <div slot="desc" id="description">
                    <h6>{{album.description}}</h6>
                </div>
            </PhotoCard>
        </div>
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
            this.$http.get(this.$resource.publicAlbums)
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
#albumName{
    font-family:permanent-marker, sans-serif;
    color:rgba(3, 0, 211, 1);
}
#description{
    font-family:permanent-marker, sans-serif;
    color:rgba(45, 101, 255, 1);
}
</style>
