<template>
    <ModalConfirm @close="show=false" @getUserResponse="logout($event)"
     :show="show" :message="message"
    />

</template>
<script>
import ModalConfirm from '@/components/ModalConfirm';

export  default{
    name:'logout',
    components:{ModalConfirm},
    data(){
        return{
            show:true,
            message:'Tem certeza que deseja sair?'
        }
    },
    mounted(){
        this.show=true;
    },
    methods:{
        logout(choice){
            if(choice){
                if(this.$cookies.get('csrftoken').length>0){
                    this.$http.get(this.$resource.logout)
                        .then(resp=>console.log(resp.data))
                        .catch(error=>console.log(error.response))
                    this.$router.push('/')
                }
            }
            else{this.$router.go(-1);}
            this.show=false;
        },
    }

}
</script>
<style>
</style>
