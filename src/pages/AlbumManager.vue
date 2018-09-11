<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="btn-group">
                    <button class="btn btn-info">
                        <span class="fa fa-eye"> </span> 
                        Ver Albums</button>
                    <button class="btn btn-info" @click="createAlbum=true">
                        <span class="fa fa-plus-square"> </span> 
                         Criar Album
                    </button>
                </div>
            </div>
        </div>
        <create-album :show="createAlbum" @close="createAlbum=false"/>
    </div>
</template>
<script>
import CreateAlbum from '@/components/crud/CreateAlbum';
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
