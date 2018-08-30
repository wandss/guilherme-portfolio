<!-- Create API to retrieve contact data and fields -->
<template>
    <div class="container-fluid">
        <h2>Contatos:</h2>
        <p>(31)9 9476-6537</p>
        <p>fotoguilhermes@gmail.com</p>
        <div class="row">
            <div class="col-md-6">
                <app-input label="Nome:" />
                <app-input label="Email:" type="email" />
                <app-input label="Assunto:" />
            </div>
            <div class="col-md-6">
                <app-text-area label="Messagem:" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <button class="btn btn-success">
                    Enviar
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'contact',
}
</script>
<style>
</style>
