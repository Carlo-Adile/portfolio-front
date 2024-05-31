<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      projects: [],
      base_api_url: 'http://127.0.0.1:8000',
      base_projects_url: '/api/projects'
    }
  },
  mounted() {
    let url = this.base_api_url + this.base_projects_url
    this.callApi(url);
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          this.projects = response.data.projects;
          console.log(response);

        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}
</script>

<template>
  <header>
    header
  </header>
  <main>
    <div class="container">
      <div class="row">
        
      </div>
    </div>
  </main>
  <footer>
    footer
  </footer>
</template>

<style lang="scss"></style>
