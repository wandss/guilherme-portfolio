<template>
    <div class="row">
        <div class="col-md-12">
            <div class="pull-right" id="items">
                <NavbarItem v-for="item in menuItems" :key="item.uuid"
                 :name="item.name" :link="item.link" />
            </div>
        </div>
    </div>
</template>
<script>
import NavbarItem from '@/components/NavbarItem';
export default{
    name:'NavBar',
    components:{NavbarItem},
    mounted(){
        this.getMenu();
    },
    data(){
        return{
            menuItems:[],
        }
    },
    methods:{
        getMenu(){
            this.$http.get(this.resources.navbar)
                .then(resp=>{
                    this.menuItems = resp.data
                })
                .catch(error=>console.log(error))
        }
    },

}
</script>
<style scoped>
#items{
    margin-top:2rem;
}

</style>
