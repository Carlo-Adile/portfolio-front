<script>

export default {
  name: 'App'

}
</script>

<template>
  <header class="container-fluid">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">CARLO ADILE</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="right-menu d-flex gap-3">
          <router-link :to="{ name: 'home' }" class="no_style">Home</router-link>
          <router-link :to="{ name: 'blog' }" class="no_style">Blog</router-link>
          <router-link :to="{ name: 'contacts' }" class="no_style">Contacts</router-link>
          <router-link :to="{ name: 'about' }" class="no_style">About</router-link>
        </div>
      </div>
    </nav>

  </header>

  <main>
    <RouterView />

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

.no_style {
  text-decoration: none;
  color: inherit;
}
</style>
