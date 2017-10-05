<template>
    <div>
        <h1 class="centralizado" v-text="titulo"></h1>

        <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtro por parte do titulo">
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.url">
               <meu-painel :titulo="foto.titulo">
                    <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
                    <meu-botao 
                        tipo="button" 
                        rotulo="REMOVER" 
                        @botaoAtivado="remove(foto)" 
                        :confirmacao="false"
                        estilo="perigo"/>
               </meu-painel>
            </li>
        </ul>
    </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

    components: {
        'meu-painel' : Painel,
        'imagem-responsiva' : ImagemResponsiva,
        'meu-botao' : Botao
    },
    data(){
        return{
            titulo: 'Alurapic',
            fotos: [],
            filtro : ''
        }
    },

    computed: {
        fotosComFiltro(){
            if(this.filtro){
                /* filtra */
                return this.fotos.filter(foto => new RegExp(this.filtro.trim(), 'i').test(foto.titulo));
            }else{
                return this.fotos;
            }
        }
    },

    methods: {
        remove(foto){
            alert('Remover a foto!' + foto.titulo);
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

.centralizado {
    text-align: center;
}
  .titulo {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
