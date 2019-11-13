<template>
  <v-card class="c-card text-left" hover outlined>
    <v-img
      class="c-card__img"
      aspect-ratio="1"
      :alt="characterName"
      :src="imageSrc"
      :lazy-src="imageSrc"
    >
    <template v-slot="placeholder">
      <v-layout
        fill-height
        align-center
        justify-center
        ma-0
      >
        <v-progress-circular indeterminate color="primary"/>
      </v-layout>
    </template>
    </v-img>

    <div class="c-card__footer">
      <v-card-text>
        <h4 class="text-no-wrap text-truncate">{{ characterName }}</h4>
      </v-card-text>

      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import CharacterModel from '../models/CharacterModel';

export default {
  name: 'CharacterCard',
  props: {
    character: {
      type: CharacterModel,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      const { thumbnail } = this.character;

      return `${thumbnail.path}.${thumbnail.extension}`;
    },
    characterName() {
      return this.character.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-card {
  &__img {
    max-height: 250px;
    overflow: hidden;
  }
  &__footer {
    display: flex;
    justify-content: space-around;
    .v-card__text {
      min-width: 80%;
    }
  }
}
</style>
