<!--Handle errors. Create an span within inputs to show errors.
Use name returned from backend to display messages errors underneath
inputs.

Some errors may return like : {detail:['message'] => add this to an Alert?
-->
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <Card title="Gerenciar Imagens" icon="fa fa-images"
                 @click="$router.push('/admin/images')"
                >
                    <div slot="content"> </div>
                </Card>
            </div>
            <div class="col">
                <Card title="Gerenciar Album" icon="fa fa-film" 
                 @click="$router.push('/admin/albums')"
                >
                    <div slot="content"> </div>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    name:'ManageAlbums',
    data(){
        return{
            uploadedContent:null,
            name:null,
            uploadErrors:null,
        }
    },
}
</script>
<style >
.manageAlbums{
    background-color:#DFDFDF;
}
</style>
