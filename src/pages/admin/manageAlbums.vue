<!--Handle errors. Create an span within inputs to show errors.
Use name returned from backend to display messages errors underneath
inputs.

Some errors may return like : {detail:['message'] => add this to an Alert?
-->
<template>
    <div class="container-fluid">
        <div class="container">
            <Alert :showAlert="alert.show" :cssClass="alert.cssClass"
             @close="alert.show=false">
                <h4>{{alert.message}}</h4>
            </Alert>
            <div v-if='!isLoggedIn'>
                <login @getLogin="handleLogin" @closeAlert="showAlert=false"/>
            </div>
        </div>
        <div class="row">
            <div class="col" v-for="item in items" :key="item.uuid" v-if="items.length>0">
                <Card :title="item.title" :icon="item.icon"
                  @click="$router.push(item.url)"
                />
            </div>
        </div>
    </div>
</template>
<script>
import Login from '@/pages/forms/login';
export default{
    name:'ManageAlbums',
    components:{Login},
    data(){
        return{
            items:[],
            isLoggedIn:false,
            alert:{show:false, cssClass:'info', message:null},
        }
    },
    mounted(){
        this.getMenuItems();
    },
    methods:{
        getMenuItems(){
            this.$http.get(this.$resource.adminMenu)
                .then(resp=>{
                    this.items=resp.data;
                    this.isLoggedIn = true;
                })
                .catch(error=>{
                    this.alert.show = true;
                    this.alert.cssClass = 'danger';
                    let message = error.response.data
                    if(error.response.status === 403){
                        this.alert.cssClass = 'info'
                        message = 'É necessário logar para acessar essa área!!!';
                    }
                    this.alert.message = message
                })
        },
        handleLogin(login){
            if(login){
                this.isLoggedIn = login;
                this.getMenuItems()
            }
            else{
                this.alert.message = 'Verifique usuário e senha.';
                this.alert.cssClass = 'danger';
            }
        }
    },

}
</script>
<style >
.manageAlbums{
    background-color:#DFDFDF;
}
</style>
