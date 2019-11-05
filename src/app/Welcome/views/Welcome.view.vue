<template>
  <div class="flex justify-center text-center">
    <h1 class="mt-5">Bem vindo, ou não...</h1>

    <welcome-gifs/>

    <v-container class="mt-10">
      <welcome-app-description/>

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
import { CHARACTERS_ROUTE } from '../../Characters/routes/Characters.route';

import RouterMixin from '../../mixins/RouterMixin';

import WelcomeGifs from '../components/WelcomeGifs.vue';
import WelcomeAppDescription from '../components/WelcomeAppDescription.vue';

export default {
  name: 'Welcome',
  components: {
    WelcomeGifs,
    WelcomeAppDescription,
  },
  mixins: [RouterMixin],
  computed: {
    charactersRoute() {
      return CHARACTERS_ROUTE;
    },
  },
};
</script>
