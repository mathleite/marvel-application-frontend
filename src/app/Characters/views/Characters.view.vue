<template>
  <div class="flex justify-center column text-center">
    <v-container v-if="!username" fill-height>
      <v-layout class="align-center justify-center">
        <v-card
          raised
          height="200"
          width="400"
          elevation="20"
          class="text-center"
        >
          <v-card-title>Nome de usuário</v-card-title>
          <div class="px-2">
            <v-text-field
              ref="textField"
              label="Digite seu nome"
              outlined
            ></v-text-field>
          </div>
          <v-card-actions>
            <v-btn
              block
              color="primary"
              @click="setUsername"
            >
              Entrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
    <user-profile-header v-if="username"/>
    <characters-grid v-if="username"/>
  </div>
</template>

<script>
import UserProfileHeader from '../../User/components/UserProfileHeader.vue';
import CharactersGrid from '../components/CharactersGrid.vue';

export default {
  name: 'Characters',
  components: {
    UserProfileHeader,
    CharactersGrid,
  },
  data: () => ({
    username: '',
  }),
  methods: {
    setUsername() {
      const { textField } = this.$refs;
      this.username = textField.$refs.input.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.fill-height {
  height: 100vh;
}
</style>
