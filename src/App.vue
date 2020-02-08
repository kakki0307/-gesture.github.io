<template>
<div>
  <index />
  <router-view />
</div>
</template>

<script>
import Vue from 'vue'
import Index from './components/index.vue'

export default Vue.extend({
  name: 'app',
  components: {
    Index
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
