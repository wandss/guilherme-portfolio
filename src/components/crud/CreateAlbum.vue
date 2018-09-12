<template>
    <Modal :show="show" modalSize="modal-full" title="Criar Album"
     @click="$emit('close')" >
        <div slot="body">
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
                </div>
                <hr/>
                Foto da Capa:
                Após Clicar na foto alterar nome para:
                Selecionar fotos.
                <hr/>
            </form>
        </div>
    </Modal>
</template>
<script>
import Modal from '@/components/Modal';
import AppCheckbox from '@/components/AppCheckbox';

export default{
    name:'CreateAlbum',
    components:{Modal, AppCheckbox},
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
        }
    }
}
</script>
<style >
</style>
