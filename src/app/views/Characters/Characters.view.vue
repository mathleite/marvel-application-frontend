<template>
  <div class="flex justify-center column text-center">
    <user-profile-header/>
  </div>
</template>

<script>
import UserProfileHeader from '../../components/User/UserProfileHeader.vue';

export default {
  name: 'Characters',
  components: {
    UserProfileHeader,
  },
};
</script>
