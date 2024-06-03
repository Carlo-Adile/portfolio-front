<script>
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'App',
  components: {
    ProjectCard
  },
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
          console.log(response.data);
        })
        .catch(err => {
          console.error(err);
        })
    },
    prevPage(url) {
      this.callApi(url);
    },
    nextPage(url) {
      this.callApi(url);
    },
    goTo(page) {
      const url = this.base_api_url + this.base_projects_url + `?page=${page}`
      this.callApi(url);
    }
  }
}
</script>

<template>
  <header class="container-fluid">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page">Home
                <span class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Action 1</a>
                <a class="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form class="d-flex my-2 my-lg-0">
            <input class="form-control me-sm-2" type="text" placeholder="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

  </header>

  <main>
    <div class="p-5 mb-2 bg-tertiary">
      <div class="container-fluid py-3">
        <h1 class="display-5 fw-bold">Portfolio</h1>
        <p class="col-md-8 fs-4">
          This is my personal portfolio where you can explore all of my projects in detail.
          Each project showcases the various technologies I have used.
          Feel free to browse through my work and see the skills I have developed over time.
          Whether it's web development, mobile applications, or other software solutions.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <h2 class="p-3">Projects</h2>

        <!-- cards -->
        <div class="col-4" v-for="project in projects.data">
          <ProjectCard :project="project" :baseApiUrl="base_api_url" />
        </div>
      </div>

      <!-- navigation -->
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" v-show="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
            <button class="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li class="page-item" :class="{ 'active': page == projects.current_page }" aria-current="page"
            v-for="page in projects.last_page" @click="goTo(page)">
            <button class="page-link">{{ page }}</button>
          </li>

          <li class="page-item" v-show="projects.next_page_url" @click="nextPage(projects.next_page_url)">
            <button class="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>

    </div>
  </main>

  <footer>
    <div class="container-fluid p-4 mt-4 bg-light">
      <div class="row">
        <div class="col-4">
          <div class="d-flex gap-3 p-2">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat aspernatur quaerat veniam numquam vero
            maiores tempora animi sapiente nobis. Delectus atque ex praesentium accusantium ducimus at pariatur
            accusamus a?</p>
        </div>
        <div class="col-2">
          <ul class="list-unstyled">
            <li class="list-item">
              <h3>Products</h3>
            </li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="list-unstyled">
            <li class="list-item">
              <h3>Contacts</h3>
            </li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="list-unstyled">
            <li class="list-item">
              <h3>Info</h3>
            </li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
            <li class="list-item"><a href="" class="text-decoration-none">some link</a></li>
          </ul>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </footer>

</template>

<style lang="scss">
@import './assets/scss/structure.scss';

i {
  font-size: 2.5rem;
}
</style>
