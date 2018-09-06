<template>
    <h5>
        <router-link :to="link">
            {{name}}
        </router-link>
    </h5>
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
h5{
    display:inline;
    margin-right:1rem;
    cursor:pointer;
}
h5:hover{
    text-decoration:underline red;
    transition:all .5s ease-in;
}
</style>
