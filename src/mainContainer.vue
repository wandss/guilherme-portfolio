<template>
  <div class="row">
      <div class="col-md-12">
          <Brand title="Guilherme Augusto" subtitle="Fotografia"/>
          <CardContainer :hasImage="true">
            <ImagePlaceHolder slot="image"
             height="200rem"
            />
            <div slot="content">
                Olá, que bacana!!!!
                Olá, que bacana!!!!
                Olá, que bacana!!!!
                Olá, que bacana!!!!
                Olá, que bacana!!!!
            </div>
          </CardContainer>

      </div>
  </div>
</template>

<script>
    import Brand from './components/Brand';
    import CardContainer from './components/CardContainer';
    import Card from './components/Card';
    import ImagePlaceHolder from './components/ImagePlaceHolder';

    export default {
        name: 'MainContainer',
        components:{
            Brand, CardContainer, Card, ImagePlaceHolder
        },
    }
</script>

<style scoped>

</style>
