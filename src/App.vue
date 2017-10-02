<template>
    <div>
        <h1>{{titulo}}</h1>
        <ul>
            <li v-for="foto of fotos" :key="foto.url">
                <img :src="foto.url" :alt="foto.titulo">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            titulo: 'Alurapic',
            fotos: []
        }
    },

    created(){
        //promise
        this.$http.get('http://localhost:3000/v1/fotos')
            .then(res => res.json()) // res.json() tambem é um promise
            .then(fotos => this.fotos = fotos, err => console.log(err)); // fotos é o resultado da promise do res.json()
        
    }
}
</script>

<style lang="scss">

</style>
