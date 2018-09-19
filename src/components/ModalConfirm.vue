<template>
    <modal :show="show" @click="$emit('close')"
     title="Confirma:">
        <div slot="body">
            <h5>{{message}}</h5>
        </div>
        <div slot="footer">
            <button class="btn btn-outline-success mx-2"
             @click="$emit('getUserResponse', true)">
                Sim
            </button>
            <button class="btn btn-outline-danger mx-2"
             @click="$emit('getUserResponse', false)">
                Não
            </button>
        </div>
    </modal>
</template>
<script>
import Modal from "@/components/Modal";
export  default{
    name:'ModalConfirm',
    components:{Modal},
    props:{
        show:{
            type:Boolean,
            default:false,
            required:true,
        },
        message:{
            type:String,
            default:'Tem certeza?',
            required:true,
        }
    },
}
</script>
<style>
</style>
