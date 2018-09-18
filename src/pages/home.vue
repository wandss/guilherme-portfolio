<template>
    <div class="container">
        <div class="row">
            <PhotoCard v-for="album in albums.results" :key="album.uuid"
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
        <div class="row">
            <div class="col">
                Pagination Area
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
            bottom:false,
        }
    },
    methods:{
        getAlbums(url){
            this.$http.get(url)
                .then(resp=>{
                    this.albums=resp.data;
                })
                .catch(error=>console.log(error.response))
        },
        albumDetail(uuid){
            this.$router.push('/album'+uuid)
        },
        getBottom(){
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            //srollY+visible=pageHeight
            //console.log(scrollY + visible === pageHeight);
            return scrollY + visible === pageHeight;
        }
    },
    mounted(){
        this.getAlbums(this.$resource.publicAlbums);
    },
    created(){
        window.addEventListener('scroll', ()=>{
            this.bottom = this.getBottom()
        })
    },
    watch:{
        bottom(bottom){
            if(bottom){
                const url = this.$resource.publicAlbums.split('?')[0]+'?'+
                    this.albums.next.split('?')[1]
                this.getAlbums(url)
            }
        }
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
