<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <Card title="Adicionar Fotos" icon="fa fa-file-upload"
                 @click="showModal=true">
                    <div slot="content"></div>
                </Card>
            </div>
            <div class="col">
                <Card title="Criar Album" icon="fa fa-film">
                    <div slot="content"> </div>
                </Card>
            </div>
        </div>
        <Modal modalSize="modal-full" :hasFooter="true" title="Modal Title"
         :show="showModal"
         @click="showModal=!showModal" >
            <div slot="body">
                <div class="row">
                    <div class="col">
                        <input type="file" @change="getUploadedContent($event)"/>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <button class="btn btn btn-secondary" @click="saveFile">OK</button>
            </div>
        </Modal>
    </div>
</template>
<script>
import Modal from '@/components/Modal'

export default{
    name:'ManageAlbums',
    components:{Modal},
    data(){
        return{
            showModal:false,
            uploadedContent:null,
        }
    },
    beforeCreate(){
        document.body.className='manageAlbums'
    },
    methods:{
        getUploadedContent(e){
            console.log('Getting file')
            this.uploadedContent= e.target.files[0];
        },
        saveFile(){
            console.log('Uploading....')
            console.log(this.uploadedContent)
            let formData = new FormData();
            formData.append('file', this.uploadedContent)
            formData.append('name', this.uploadedContent.name)
            formData.append('otherStuff','anyothercontenthere')

            //this.$http.post(this.$resource.imageUpload, this.uploadedContent,
            this.$http.post(this.$resource.imageUpload, formData,)
            //    {headers:{'Content-Type':'application/x-www-form-urlencoded'}})
//                {headers:{'Content-Type':'multpart/form-data'}})
                .then(resp=>console.log(resp.data))
                .catch(error=>{
                    console.log(error.response)
                    console.log(error.response.data)
                }
                )
        },
    },
}
</script>
<style >
.manageAlbums{
    background-color:#DFDFDF;
}
</style>
