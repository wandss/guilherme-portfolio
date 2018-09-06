<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <Card title="Adicionar Fotos" icon="fa fa-file-upload">
                    <div slot="content"></div>
                </Card>
            </div>
            <div class="col">
                <Card title="Criar Album" icon="fa fa-film">
                    <div slot="content"> </div>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'ManageAlbums',
    beforeCreate(){
        document.body.className='manageAlbums'
    }
}
</script>
<style >
.manageAlbums{
    background-color:#DFDFDF;
}
</style>
