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
