<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-outline-info mx-2">
                    <span class="fa fa-eye"> </span>
                    Ver Albums</button>
                <button class="btn btn-outline-info mx-2" @click="createAlbum=true">
                    <span class="fa fa-plus-square"> </span>
                     Criar Album
                </button>
            </div>
        </div>
        <create-album :show="createAlbum" @close="createAlbum=false"/>
    </div>
</template>
<script>
import CreateAlbum from '@/pages/admin/CreateAlbum';
export default{
    name:'AlbumManager',
    components:{CreateAlbum,},
    data(){
        return{
            createAlbum:false
        }
    }
}
</script>
<style >
</style>
