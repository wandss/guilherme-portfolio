<template>
    <div class='row'>
        <div class="col-md-12">
            <form @submit.prevent="login">
                <app-input label="Login:" type="text" v-model="username"/>
                <app-input label="Senha:" type="password" v-model="passwd"/>
                <button class="btn btn-primary btn-block">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>
<script>
    export default{
        name:'login',
        data(){
            return{
                username:'',
                passwd:'',
            }
        },
        methods:{
            login(){
                const data={username:this.username,
                    password:this.passwd}

                this.$http.post(this.$resource.login, data)
                    .then(resp=>{
                        console.log(resp.data)
                        this.$emit('getLogin', true)
                    })
                    .catch(error=>console.log(error.response))

                console.log('Logging.....')
            }
        }
    }
</script>
<style>
</style>
