<template>
    <div class="container">
        <div class="row mb-5">
            <PhotoCard v-for="album in albums" :key="album.uuid"
             @click="albumDetail(album.uuid)">
                <div slot="name" id="albumName">
                    <h5>{{album.name}}</h5>
                    <p>{{new Date(album.create_date).toLocaleString()}}</p>
                </div>
                <img :src="album.thumbnail_data.src" slot="img"
                 width="280" height="200"
                />
                <div slot="desc" id="description">
                    <h6>{{album.description}}</h6>
                </div>
            </PhotoCard>
        </div>
        <div class="row mb-5">
            <div class="col">
                <button v-if="nextAlbums!==null" type="button"
                 @click="getAlbums(nextAlbums)"
                 class="btn btn-block btn-outline-success"
                 >
                    Mais Albums ...
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'home',
    data(){
        return{
            albums:[],
            nextAlbums:null,
        }
    },
    methods:{
        getAlbums(url){
            this.$http.get(url)
                .then(resp=>{
                    let nextAlbums = null;
                    resp.data.results.forEach(album=>
                        this.albums.push(album));
                    if(resp.data.next !== null){
                        nextAlbums = this.$resource.publicAlbums+'/?'+
                            resp.data.next.split('?')[1];
                    }
                    this.nextAlbums = nextAlbums;
                })
                .catch(error=>console.log(error.response))
        },
        albumDetail(uuid){
            this.$router.push('/album'+uuid)
        },
    },
    mounted(){
        this.getAlbums(this.$resource.publicAlbums+'/?q=True');
    },
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
