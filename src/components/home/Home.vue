<template>
    <div>
        <h1 class="centralizado" v-text="titulo"></h1>
        <p class="centralizado" v-show="mensagem">{{ mensagem }}</p>
        <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtro por parte do titulo">
        <ul class="lista-fotos">
            <transition-group name="lista-fade">
                <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.url">
                    <meu-painel :titulo="foto.titulo">
                            <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>
                            <meu-botao 
                                tipo="button" 
                                rotulo="REMOVER" 
                                @botaoAtivado="remove(foto)" 
                                :confirmacao="false"
                                estilo="perigo"/>
                    </meu-painel>
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

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
            filtro : '',
            mensagem: ''
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

            this.service
                .apaga(foto._id)
                .then(() => {
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = 'Foto removida com sucesso';
                }, err => {
                    console.log(err);
                    this.mensagem = 'Não foi possivel remover a foto';
                })

            /*
            this.resource
            .delete({ id: foto._id})
            .then(() => {
                let indice = this.fotos.indexOf(foto);
                this.fotos.splice(indice, 1);
                this.mensagem = 'Foto removida com sucesso';
            }, err => {
                console.log(err);
                this.mensagem = 'Não foi possivel remover a foto';
            })
            */
            /*
            this.$http
            .delete(`v1/fotos/${foto._id}`)
            .then(() => {
                let indice = this.fotos.indexOf(foto);
                this.fotos.splice(indice, 1);
                this.mensagem = 'Foto removida com sucesso';
            }, err => {
                console.log(err);
                this.mensagem = 'Não foi possivel remover a foto';
            })
            */
        }
    },

    created(){

        this.service = new FotoService(this.$resource);

        this.service
            .lista()
            .then(fotos => this.fotos = fotos, err => console.log(err));

        // criando
        //this.resource = this.$resource('v1/fotos{/id}');
        /*
        this.resource
            .query()
            .then(res => res.json()) // res.json() tambem é um promise
            .then(fotos => this.fotos = fotos, err => console.log(err)); // fotos é o resultado da promise do res.json()
        */
        //promise
        /*
        this.$http.get('v1/fotos')
            .then(res => res.json()) // res.json() tambem é um promise
            .then(fotos => this.fotos = fotos, err => console.log(err)); // fotos é o resultado da promise do res.json()
        */
        
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

.lista-fade-enter, .lista-fade-leave-active {
  opacity: 0
}

.lista-fade-enter-active, .lista-fade-leave-active {
  transition: opacity .4s
}
</style>
