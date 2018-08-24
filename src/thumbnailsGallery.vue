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
import Card from '@/components/Card'
export default{
    name:'ThumbnailsGallery',
    components:{Card,},
    props:{
        albums:{type:Array,
            required:true,
        }
    },
    methods:{
        albumDetail(uuid){
            this.$router.push({
                name:'album',
                query:{uuid:uuid}
            })
        }
    }
}
</script>
<style>
</style>
