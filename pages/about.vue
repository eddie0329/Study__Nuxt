<template>
<div>
  <h1>HELLO about</h1>
  <h3>{{ count }}</h3>
  <button @click="INCREMENT">PLUS</button>
  <button @click="DECREMENT">MINUS</button>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('counter', ['count'])
  },
  methods: {
    ...mapMutations('counter', ['INCREMENT', 'DECREMENT'])
  }
}
</script>

<style>

</style>