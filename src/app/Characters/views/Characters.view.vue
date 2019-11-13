<template>
  <div class="flex justify-center column text-center">
    <user-profile-header/>
    <characters-grid/>
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
};
</script>
