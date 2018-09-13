<template>
    <modal :show="show" modalSize="modal-full" title="Criar Album"
     @click="$emit('close')" >
        <div slot="body">
            <modal title="Instruções" :show="hasInstructions" @click="hasInstructions=false">
                <div slot="body">
                    <h5>Foto de Capa escolhida. </h5>
                    <h6>Ecolha agora as imagens que farão parte do álbum.</h6>
                </div>
            </modal>
            <form>
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
                    </div>
                    <gallery :title="selectionType" :images="images"
                     @click="selectedImage($event)" />
                </div>
                <hr/>
                Foto da Capa:
                Após Clicar na foto alterar nome para:
                Selecionar fotos.
                <hr/>
            </form>
        </div>
    </modal>
</template>
<script>
import Modal from '@/components/Modal';
import AppCheckbox from '@/components/AppCheckbox';
import Gallery from '@/components/Gallery';

export default{
    name:'CreateAlbum',
    components:{Modal, AppCheckbox, Gallery},
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
        }
    },
    mounted(){
        this.getAllImages()
    },
    methods:{
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
            }
            this.albumPictures=image;
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
