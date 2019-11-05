<template>
  <div class="c-header">
    <v-card
      raised
      elevation="20"
      class="text-xs-center xs c-header__card"
    >
      <v-layout class="column align-center c-header__layout">
        <slot name="header"/>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
};
</script>

<style lang="scss" scoped>
  .c-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    &__layout {
      padding: 20px 0;
    }
    &__card {
      width: 70%;
      background: url("https://statig0.akamaized.net/bancodeimagens/3r/b2/dp/3rb2dpe873w0hnlnm8wwz4vtf.jpg") no-repeat center center fixed;
      background-size: cover;
    }
  }
</style>
