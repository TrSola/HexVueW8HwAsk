<template>
  <div>
    <h2 style="color: red">據說下方數字點到100...手就會很痠</h2>
    <button type="button" class="btn btn-primary" @click="store.increment">count is {{ store.count }}</button>
  </div>
</template>

<script setup>
import counterStore from '../stores/counter.js'
const store = counterStore()

</script>

<style scoped>
</style>
