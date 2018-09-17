<template>
    <form @submit.prevent="createAlbum">

        <modal :show="show" modalSize="modal-full" title="Criar Album"
         @click="$emit('close')" >
            <div slot="body">
                <modal title="Instruções" :show="hasInstructions" 
                 @click="hasInstructions=false">
                    <div slot="body">
                        <div v-if="success">
                            <h4>{{message}}</h4>
                        </div>
                        <div v-else>
                            <h5>Foto de Capa escolhida. </h5>
                            <h6>Ecolha agora as imagens que farão parte do álbum.</h6>
                        </div>
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
                        <app-input type="text" required label="Descição:"
                         v-model="description" placeholder="Descrição"/>
                        <app-checkbox v-model="publish.checked"
                         :label="publish.label" />
                        <app-checkbox v-model="public.checked"
                         :label="public.label" />

                        <div v-if="images.length===0" >
                            <Alert :showAlert="true" cssClass="warning"
                             :hasCloseButton='false'>
                                Não existem fotos disponíves para capa.
                            </Alert>
                            <button 
                             type="button" @click="uploadForm=true" 
                             class="btn btn-outline-warning btn-block">
                                <span class="fa fa-plus-square"></span>
                                Criar imagem de Capa
                            </button>
                        </div>
                        <gallery v-else :title="selectionType" :images="images"
                         @click="selectedImage($event)" />
                    </div>

                </div>
            </div>
            <div slot="footer">
                <button class="btn btn-outline-primary">
                    Criar Album
                </button>
                <button class="btn btn-outline-danger" type="button"
                 @click="$emit('close')">
                    Cancelar
                </button>
            </div>
        </modal>
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
            name:null,
            description:null,
            publish:{label:'Publicar',checked:false},
            public:{label:'Público',checked:false},
            images:[],
            thumbnail:null,
            albumPictures:[],
            hasInstructions:false,
            success:false,
            uploadForm:false,
        }
    },
    mounted(){
        this.getThumbnails()
    },
    methods:{
        getThumbnails(){
            this.$http.get(this.$resource.thumbnails)
                .then(resp=>{
                    this.images=resp.data;
                    this.uploadForm=resp.data.length===0;
                })
                .catch(error=>console.log(error.response))
        },
        getAllImages(){
            this.$http.get(this.$resource.images)
                .then(resp=>{
                    this.images=resp.data
                })
                .catch(error=>{
                    console.log(error.response)
                })

        },
        selectedImage(image){
            if(this.thumbnail===null){
                this.thumbnail = image[0]
                this.hasInstructions=true
                this.getAllImages()
            }
            this.albumPictures=image;
        },
        createAlbum(e){
            const data = {name:this.name, description:this.description,
                published:this.publish.checked, public:this.public.checked,
                thumbnail:this.thumbnail.uuid, images:this.albumPictures.map(image=>image.uuid),
            }

            const csrfToken = this.$cookies.get('csrftoken')
            const headers = {'ContentType':'application/json', 'X-CSRFToken':csrfToken}

            this.$http.post(this.$resource.createAlbum, data, {headers:headers})
                .then(resp=>{
                    e.target.reset();
                    this.message="Album Incluído com Sucesso";
                    this.hasInstructions=true;
                    this.success=true;
                    this.getThumbnails();
                    this.thumbnail=null;
                    this.albumPictures=[];

                })
                .catch(error=>console.log(error.response))
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
