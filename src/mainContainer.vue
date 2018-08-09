<template>
  <div class="row">
      <div class="col-md-12">
          <Brand title="Guilherme Augusto" subtitle="Fotografia"/>
          <div class="row">
              <Card size="8" :hasImage="true">
              <div slot='image'>
                    ADD IMAGE HERE
                    ADD IMAGE HERE
                </div>
                <h4>
                Olá que bacana você por aqui......
                Olá que bacana você por aqui......
                </h4>
              </Card>
          </div>

      </div>
  </div>
</template>

<script>
    import Brand from './components/Brand';
    import Card from './components/Card';
    export default {
        name: 'MainContainer',
        components:{
            Brand, Card
        },
    }
</script>

<style scoped>

</style>
