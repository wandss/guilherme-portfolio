<template>
    <Modal :show="show" modalSize="modal-full" title="Criar Album"
     @click="$emit('close')" >
        <div slot="body">
            Form
            <hr/>
            Foto da Capa:
            Após Clicar na foto alterar nome para:
            Selecionar fotos.
            <hr/>
        </div>
    </Modal>
</template>
<script>
import Modal from '@/components/Modal';

export default{
    name:'CreateAlbum',
    components:{Modal,},
    props:{
        show:{
            type:Boolean,
            default:false,
            required:true
        }
    }
}
</script>
<style >
</style>
