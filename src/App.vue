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
            fotos: [
                {
                    url: 'https://abrilvejasp.files.wordpress.com/2016/12/02179.jpg?quality=70&strip=info',
                    titulo: 'cachorro'
                },
                {
                    url: 'https://abrilvejasp.files.wordpress.com/2016/12/02179.jpg?quality=70&strip=info',
                    titulo: 'cachorro2'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
