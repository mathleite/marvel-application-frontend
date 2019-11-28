<template>
  <base-section>
    <template slot="header">
      <v-container>
        <v-layout class="column align-center justify-space-around">
          <h1 class="mb-4">Personagens Marvel</h1>
          <v-btn-toggle
            mandatory
          >
            <v-btn>
              Todos
            </v-btn>
            <v-btn>
              Favoritos
            </v-btn>
          </v-btn-toggle>
        </v-layout>
      </v-container>
    </template>
    <template slot="content">
      <v-container grid-list-lg>
        <v-layout class="row align-start wrap">
          <v-flex xs12 sm6 lg3 v-for="character in characters" :key="character.id">
            <character-card :character="character"/>
          </v-flex>
        </v-layout>
      <v-progress-circular v-show="loading" indeterminate color="primary"/>
      </v-container>
    </template>
  </base-section>
</template>

<script>
import CharacterModel from '../models/CharacterModel';
import CharacterService from '../services/CharacterService';
import BaseSection from '../../Base/components/BaseSection.vue';
import CharacterCard from './CharacterCard.vue';

export default {
  name: 'CharactersGrid',
  components: {
    BaseSection,
    CharacterCard,
  },
  data: () => ({
    characters: [],
    loading: false,
  }),
  created() {
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      this.loading = true;
      const { data } = await CharacterService.getCharacters();
      this.setResponseData(data);
      this.loading = false;
    },
    setResponseData(data) {
      this.characters = data.map((character) => {
        const characterModel = new CharacterModel();
        characterModel.fill(character);

        return characterModel;
      });
    },
  },
};
</script>
