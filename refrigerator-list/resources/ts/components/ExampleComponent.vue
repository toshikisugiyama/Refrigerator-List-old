<template lang="pug">
  .container
    .row.justify-content-center
      .col-md-8
        .card
          .card-header Example Component
          .card-body I'm an example component
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    console.log('Component mounted.')
  }
})
</script>
