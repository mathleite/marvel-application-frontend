<template>
  <div class="c-section">
    <v-card
      raised
      elevation="20"
      class="text-xs-center xs c-section__card"
    >
      <v-layout class="column c-section__layout">
        <slot name="header"/>
        <slot name="content"/>
        <slot name="footer"/>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'BaseSection',
};
</script>

<style lang="scss" scoped>
  .c-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    &__layout {
      padding: 20px 0;
    }
    &__card {
      width: 70%;
    }
  }
</style>
