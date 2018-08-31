<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 center-block">
                <Card v-for="album in albums" :key="album.uuid"
                 @click="albumDetail(album.uuid)">
                    <div slot="name" id="albumName">
                        <h4>
                            {{album.name}}
                        </h4>
                        <p>
                            Junho /2018
                        </p>
                    </div>
                    <img :src="album.thumbnail_data.src" slot="img"
                     width="280" height="200"
                    />
                    <div slot="desc" id="description">
                        <h5>{{album.description}}</h5>
                    </div>
                </Card>
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
