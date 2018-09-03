<template>
</template>
<script>
export  default{
    name:'logout',
    mounted(){
        if(this.$cookies.get('csrftoken').length>0){
            console.log('Trigger a logout, then redirects')
            this.$http.get(this.$resource.logout)
                .then(resp=>console.log(resp.data))
                .catch(error=>console.log(error.response))
            this.$router.push('/')
        }
    }

}
</script>
<style>
</style>
