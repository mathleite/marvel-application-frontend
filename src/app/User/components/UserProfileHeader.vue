<template>
  <base-header>
    <template slot="header">
      <v-avatar
        color="indigo"
        size="170"
        class="o-avatar__border"
      >
        <v-img
          src="/gatinho.jpg"
        />
      </v-avatar>
    </template>
  </base-header>
</template>

<script>
import BaseHeader from '../../Base/components/BaseHeader.vue';

export default {
  name: 'UserProfileHeader',
  components: {
    BaseHeader,
  },
};
</script>

<style lang="scss">
  .o-avatar__border {
    .v-responsive__content {
      border: 5px solid white;
    }
  }
</style>
