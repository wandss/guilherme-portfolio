<template>
    <form @submit.prevent="createAlbum">
        <component :is='show?newAlbum:null' :show="show" modalSize="modal-full" title="Criar Album"
         @click="close" >
            <div slot="body">
                <modal title="Instruções" :show="hasInstructions"
                 @click="dismiss">
                    <div slot="body">
                        <h5>{{message}}</h5>
                        <h6>{{complementaryText}}</h6>
                    </div>
                </modal>
                <upload-form :show="uploadForm=uploadForm"
                  @close="uploadForm=false"
                  @getNewImage="images.push($event)"
                />
                <div class="row">
                    <div class="col">
                        <app-input type="text" required label="Nome do Album:"
                         v-model="name" placeholder="Nome do Album"/>
                        <app-input type="text" required label="Descrição:"
                         v-model="description" placeholder="Descrição"/>
                        <app-checkbox v-model="publish.checked"
                         :label="publish.label" />
                        <app-checkbox v-model="publicAlbum.checked"
                         :label="publicAlbum.label" />

                        <div v-if="images.length===0" >
                            <Alert :showAlert="true" cssClass="warning"
                             :hasCloseButton='false'>
                                Não existem fotos disponíves para capa.
                            </Alert>
                            <button type="button" @click="uploadForm=true"
                             class="btn btn-outline-warning btn-block">
                                <span class="fa fa-plus-square"></span>
                                Criar imagem de Capa
                            </button>
                        </div>

                        <div class="row mt-5" v-else>
                            <div class="col" >
                                <button type="button" v-if="prevImages!==null"
                                 @click="getImages(prevImages)"
                                 class="btn btn btn-outline-primary">
                                    <i class="fa fa-chevron-left"></i>
                                </button>
                            </div>
                            <div class="col-10">
                                <gallery  :title="selectionType" :images="images"
                                 @click="selectedImage($event)" />
                            </div>
                            <div class="col">
                                <button type="button" v-if="nextImages!==null"
                                 @click="getImages(nextImages)"
                                 class="float-right btn btn-outline-primary align-middle">
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div slot="footer">
                <button class="btn btn-outline-primary mx-2" :disabled="thumbnail===null">
                    Criar Album
                </button>
                <button class="btn btn-outline-danger mx-2" type="button"
                 @click="close">
                    Cancelar
                </button>
            </div>
        </component>
    </form>
</template>
<script>
import Modal from '@/components/Modal';
import AppCheckbox from '@/components/AppCheckbox';
import Gallery from '@/components/Gallery';
import UploadForm from '@/components/UploadForm';

export default{
    name:'CreateAlbum',
    components:{Modal, AppCheckbox, Gallery, UploadForm},
    props:{
        show:{
            type:Boolean,
            default:false,
            required:true
        }
    },
    data(){
        return{
            newAlbum:'Modal',
            name:null,
            description:null,
            publish:{label:'Publicar',checked:false},
            publicAlbum:{label:'Público',checked:false},
            message:'',
            complementaryText:'',
            images:[],
            thumbnail:null,
            albumPictures:[],
            hasInstructions:false,
            success:false,
            uploadForm:false,
            prevImages:null,
            nextImages:null,
        }
    },
    mounted(){
        this.getImages(this.$resource.thumbnails)
    },
    methods:{
        getImages(url){
            this.$http.get(url)
                .then(resp=>{
                    let previous = null;
                    let next = null;

                    this.images=resp.data.results;
                    if(resp.data.previous!==null){
                        previous = url+'/?'+
                            resp.data.previous.split('?')[1]
                    }
                    if(resp.data.next!==null){
                        next = url+'/?'+
                            resp.data.next.split('?')[1]
                    }
                    this.prevImages = previous;
                    this.nextImages = next;
                    this.uploadForm=resp.data.length===0;
                })
                .catch(error=>console.log(error.response))
        },
        selectedImage(image){
            const index = this.albumPictures.map(image=>
                image.uuid).indexOf(image.uuid)
            if(this.thumbnail===null){
                this.thumbnail = image
                this.hasInstructions = true
                this.message = "Imagem de Capa Selecionada";
                this.complementaryText = "Adicione agora as imagens do album";
                this.getImages(this.$resource.images)
            }
            else{
                this.images.forEach(images=>{
                    if(index === -1){
                        if(images.uuid === image.uuid){
                            this.$set(images,'selected','true')
                        }
                        this.albumPictures.push(image);
                    }
                    else{
                        this.albumPictures.splice(index, 1)
                        if(images.uuid === image.uuid){
                            this.$delete(images,'selected')
                        }
                    }
                })
            }
        },
        createAlbum(e){
            const data = {name:this.name, description:this.description,
                published:this.publish.checked, public:this.publicAlbum.checked,
                thumbnail:this.thumbnail.uuid, images:this.albumPictures.map(
                image=>image.uuid),
            }

            const csrfToken = this.$cookies.get('csrftoken')
            const headers = {'ContentType':'application/json', 'X-CSRFToken':csrfToken}

            this.$http.post(this.$resource.createAlbum, data, {headers:headers})
                .then(resp=>{
                    e.target.reset();
                    //Needs to use resp.data to update albums??
                    this.message="Album Incluído com Sucesso";
                    this.hasInstructions=true;
                    this.success=true;
                    this.getImages(this.$resource.thumbnails);
                    this.thumbnail=null;
                    this.albumPictures=[];
                })
                .catch(error=>{
                    this.hasInstructions = true;
                    this.message ="O Album não foi salvo!"
                    if(error.response.status === 500){
                        this.complementaryText = "O nome do Álbum deve ser único."
                    }
                    if(this.albumPictures.length === 0){
                        this.complementaryText = "Apenas a imagem de capa foi adicionada ao album!"

                    }
                })
        },
        close(){
            this.name = null;
            this.description = null;
            this.publish = {label:'Publicar',checked:false};
            this.publicAlbum = {label:'Público',checked:false};
            this.images = [];
            this.thumbnail = null;
            this.albumPictures = [];
            this.hasInstructions = false;
            this.success = false;
            this.uploadForm = false;
            this.prevImages = null;
            this.nextImages = null;
            this.message = '';
            this.complementaryText = '';
            this.$emit('close');

            this.getImages(this.$resource.thumbnails)
        },
        dismiss(){
            this.hasInstructions=false;
            this.success = false;
            this.message = '';
            this.complementaryText = '';
        }
    },
    computed:{
        selectionType(){
            return this.thumbnail===null?
                "Imagem de Capa":"Imagens do Album"
        }
    }
}
</script>
<style >
</style>
