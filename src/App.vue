<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }

}
</script>

<template>
  <!-- <AppHeader /> -->

  <main id="flickering_fix">
    <RouterView />
  </main>

  <footer>
    <AppFooter />
  </footer>

</template>

<style lang="scss">
@import './assets/scss/structure.scss';

body {
  font-family: "Inconsolata", monospace;
}

i {
  font-size: 2.5rem;
}

#flickering_fix {
  min-height: 100vh;
}
</style>
