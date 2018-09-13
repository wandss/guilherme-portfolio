<template>
    <form @submit.prevent="createFile($event)">
        <Modal modalSize="modal-md" :hasFooter="true" title="Adicionar Foto"
         :show="show"
         @click="$emit('close')" >
            <div slot="body">
                <div class="row">
                    <div class="col">
                        <Alert :showAlert="showAlert" @close="showAlert=false"
                         cssClass="danger">
                            {{uploadErrors}}
                        </Alert>
                        <app-input type="text" v-model="name" label='Nome do Arquivo:' required />
                        <Upload label="upload" :filename="uploaded"
                         :required="true"
                          v-model="uploaded"
                        />
                    </div>
                </div>
            </div>
            <div slot="footer">
                <button class="btn btn btn-secondary" type="submit">Salvar</button>
            </div>
        </Modal>
    </form>
</template>
<script>
import Upload from '@/components/Upload'
import Modal from '@/components/Modal'
export default{
    name:'FileCreate',
    components:{Upload, Modal},
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            name:null,
            showAlert:false,
            uploaded:null,
            uploadErrors:null,
        }
    },
    methods:{
        createFile(e){
            let formData = new FormData();
            formData.append('image', this.uploaded[0])
            formData.append('name', this.name)

            this.$http.post(this.$resource.imageUpload, formData)
                .then(resp=>{
                    this.name=null;
                    this.uploaded=null;
                    this.uploadErrors=null;
                    e.target.reset();
                    this.$emit('updateGallery', resp.data);
                    this.$emit('close')
                })
                .catch(error=>{
                    const errors = error.response.data;
                    this.uploadErrors = errors;
                    this.showAlert=true;
                })
        },
    }
}

</script>
<style>
</style>


