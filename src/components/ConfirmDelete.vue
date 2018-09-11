<template>
    <Modal title="Confirmar Exclusão" :hasFooter="true" :show="show">
        <div slot="body">
            Deseja remover o item?
        </div>
        <div slot="footer">
            <button>Sim</button>
            <button>Não</button>
        </div>
    </Modal>
</template>
<script>
import Modal from '@/components/Modal'
export default{
    name:'ConfirmDelete',
    components:{Modal,}
    props:{
        show:{
            type:Boolean,
            required:true,
            default:false
        }
    }
}
</script>
<style>
</style>
