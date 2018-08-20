<template>
    <h4>
        <router-link :to="link">
            {{name}}
        </router-link>
    </h4>
</template>
<script>
export default{
    name:'NavbarItem',
    props:{
        name:{
            type:String,
            required:true,
        },
        link:{
            type:String,
            default:'/',
        }
    }
}
</script>
<style scoped>
h4{
    display:inline;
    margin-right:2rem;
    cursor:pointer;
}
h4:hover{
    text-decoration:underline red;
    transition:all .5s ease-in;
}
</style>
