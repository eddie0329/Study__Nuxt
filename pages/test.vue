<template>
<div>
  <h1>THIS IS TEST PAGE</h1>
  <h3>{{ count }}</h3>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('counter', ['count'])
  }
}
</script>

<style>

</style>