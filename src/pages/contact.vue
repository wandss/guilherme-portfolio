<!-- Create API to retrieve contact data and fields -->
<template>
    <div class="container-fluid">
        <h2>Contatos:</h2>
        <p>(31)9 9476-6537</p>
        <p>fotoguilhermes@gmail.com</p>
        <form @submit.prevent="sendMessage">
            <div class="row">
                <div class="col-md-6">
                    <app-input label="Nome:" :required="true" v-model="name"/>
                    <app-input label="Email:" type="email" :required="true" v-model="email"/>
                    <app-input label="Assunto:" :required="true" v-model="subject"/>
                </div>
                <div class="col-md-6">
                    <app-text-area label="Messagem:" :required="true" v-model="message"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button class="btn btn-success">
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default{
    name:'contact',
    data(){
        return{
            name:'',
            email:'',
            subject:'',
            message:'',
        }
    },
    methods:{
        sendMessage(){
            console.log("sending Message......")
            const data = {name:this.name, email:this.email,
                subject:this.subject, message:this.message}
            this.$http.post(this.$resource.sendMessage)
                .then(resp=>console.log(resp.data))
                .catch(error=console.log(error.response))
        }
    }
}
</script>
<style>
</style>
