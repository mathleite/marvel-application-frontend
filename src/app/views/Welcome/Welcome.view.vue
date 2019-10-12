<template>
  <div class="flex justify-center text-center">
    <h1 class="mt-5">Bem vindo, ou não...</h1>

    <welcome-gifs/>

    <v-container class="mt-10">
      <span>Projeto criado para a materia de Engenharia de Software</span>
      <br/>
      <span>O Giuliano vai por alguma coisa aqui porque eu não sei o que dizer!</span>

      <div class="mt-10">
        <v-btn
          outlined
          @click="$_routerMixin_redirectTo(charactersRoute)"
        >Bora lá</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { CHARACTERS_ROUTE } from '../Characters/Characters.route';

import RouterMixin from '../../mixins/RouterMixin';

import WelcomeGifs from '../../components/Welcome/WelcomeGifs.vue';

export default {
  name: 'Welcome',
  components: {
    WelcomeGifs,
  },
  mixins: [RouterMixin],
  computed: {
    charactersRoute() {
      return CHARACTERS_ROUTE;
    },
  },
};
</script>
