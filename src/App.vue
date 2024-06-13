<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }

}
</script>

<template>
  <AppHeader />

  <main>

    <RouterView />

  </main>


</template>

<style lang="scss">
@import './assets/scss/structure.scss';

body {
  font-family: "Inconsolata", monospace;
}

i {
  font-size: 2.5rem;
}
</style>
