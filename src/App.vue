<template>
    <div class="corpo">
        <h1 class="centralizado">{{titulo}}</h1>
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto of fotos" :key="foto.url">
               <meu-painel :titulo="foto.titulo">
                        <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
               </meu-painel>
            </li>
        </ul>
    </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue'
export default {

    components: {
        'meu-painel' : Painel
    },
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
  .titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }
</style>
