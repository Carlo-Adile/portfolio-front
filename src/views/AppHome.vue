<script>
import AppBanner from '../components/AppBanner.vue'
import ProjectCard from '../components/ProjectCard.vue';
import AppHeader from '../components/AppHeader.vue';
import axios from 'axios';
import gsap from 'gsap';

export default {
	name: 'AppHome',
	components: {
		AppBanner,
		AppHeader,
		ProjectCard
	},
	data() {
		return {
			loading: true,
			projects: [],
			/* base_api_url: 'https://back-office.carloadile.com', */
			/* base_api_url: 'http://127.0.0.1:8000', */
			base_api_url: import.meta.env.VITE_BASE_API_URL,
			base_projects_url: '/api/projects',
			base_filtered_url: '/api/filtered',

			/* categories */
			selectedCategory: null,
			categories: [
				{ id: 1, title: 'WebSites' },
				{ id: 2, title: 'Applications' },
				{ id: 3, title: 'Games' }
			],
			/* header */
			headerMenu: [
				{
					'text': 'Portfolio progetti',
					'route': 'home'
				},
				{
					'text': 'Formazione ed esperienze',
					'route': 'about'
				},
				{
					'text': 'Contatti',
					'route': 'contacts'
				},
				{
					'text': 'Blog personale',
					'route': 'blog'
				}
			],
			/* offcanvas */
			isToggle: false
		}
	},
	mounted() {
		/* let url = this.base_api_url + this.base_projects_url */
		this.callApi();
		/* console.log("verifica base api url locale: ", this.base_api_url); */
	},
	methods: {
		/* api calls */
		callApi() {
			let url = this.base_api_url + this.base_projects_url;
			console.log("url composto: ", url);
			if (this.selectedCategory) {
				url = this.base_api_url + this.base_filtered_url + `?category_id=${this.selectedCategory.id}`;
			}
			axios
				.get(url)
				.then(response => {
					if (response.data.success) {
						this.projects = response.data.projects;
						this.loading = false;
						console.log("tutti i progetti caricati:", response.data);
					} else {
						console.error("api not reached successfully");
					}
				})
				.catch(err => {
					console.error(err);
				})
		},
		selectCategory(category) {
			this.selectedCategory = category;
			this.callApi();
		},
		clearFilter() {
			this.selectedCategory = null;
			this.callApi();
		},
		/* pagination */
		prevPage() {
			if (this.prevPageUrl) {
				this.callApi(this.projects.prevPageUrl);
			}
		},
		nextPage() {
			if (this.nextPageUrl) {
				this.callApi(this.projects.nextPageUrl);
			}
		},
		goTo(page) {
			const url = this.base_api_url + this.base_projects_url + `?page=${page}`
			this.callApi(url);
		},
		/* animation */
		beforeEnter(el) {
			el.style.opacity = 0;
			el.style.transform = 'translateY(60px)';
		},
		enter(el) {
			gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 1,
				delay: el.dataset.index * 0.2
			})
		},
		toggleOffcanvas() {
			setTimeout(() => {
				this.isToggle = !this.isToggle;
			}, 200);
		}
	}
}
</script>

<template>

	<!-- AppHeader -->
	<div class="offcanvas offcanvas-top offcanvas_style" tabindex="-1" id="my_offcanvas"
		aria-labelledby="myOffcanvasLabel">
		<header class="container-fluid" id="my_header">
			<div class="container h-100 py-4">
				<!-- <router-link :to="{ name: 'home' }" class="no_style">CARLO ADILE</router-link> -->
				<div class="row h-100 justify-content-between">
					<div class="row col-12 h-100 align-items-center">
						<router-link v-for="link in headerMenu" :to="{ name: link.route }" id="header_links">
							<h5>{{ link.text }}</h5>
						</router-link>
					</div>
					<div class="row col-8 h-100 align-items-center">
						<!-- <p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eveniet, consequuntur neque
							labore nesciunt
							nihil odio reiciendis iure dicta officiis quidem voluptatibus quos libero possimus, nisi vel
							reprehenderit
							tempore porro?
						</p> -->
					</div>
				</div>
			</div>
		</header>
	</div>

	<!-- first section, offcanvas btn, filter menu -->
	<div class="container py-5" :class="{ offcanvas_spacing: isToggle == true }">
		<div class="row">
			<!-- refactor in component -->
			<div class="col-12 d-flex justify-content-between">
				<h3 class="pb-5">Portfolio</h3>
				<button class="btn pt-0 d-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#my_offcanvas"
					aria-controls="my_offcanvas" @click="toggleOffcanvas">
					<i v-if="isToggle == false" class="fa-solid fa-bars"></i>
					<i v-else="isToggle == true" class="fa-solid fa-x"></i>
				</button>
			</div>
			<div class="col-12 col-md-8">
				<h1>Ciao, sono Carlo Adile</h1>
				<h4 class="mt-3 mb-4">Jr Full Stack Web Developer Trainee</h4>
			</div>
			<div class="col-12 col-md-4">
				<ul id="category_list">
					<li @click="clearFilter" :class="{ active_filter: selectedCategory === null }">
						All</li>
					<li v-for="category in categories" @click="selectCategory(category)" :key="category.id"
						:class="{ active_filter: selectedCategory && selectedCategory.id === category.id }">
						{{ category.title }}
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- projects rendering -->
	<div class="container py-2 " style="min-height: 400px">
		<div class="row px-2" v-if="projects.data">
			<transition-group appear @before-enter="beforeEnter" @enter="enter">
				<div class="col-12 col-lg-6 col-xl-4" v-for="(project, index) in projects.data" data-index="index"
					:key="project.id">
					<ProjectCard :project="project" :baseApiUrl="base_api_url" />
				</div>
			</transition-group>
		</div>
	</div>

	<!-- pagination -->
	<div class="container">
		<nav aria-label="Page navigation" v-if="this.projects.data" id="my_pagination">
			<ul class="pagination">
				<!-- prev page -->
				<li class="page-item" v-show="projects.prev_page_url" @click="prevPage()">
					<button class="page-link" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</button>
				</li>
				<!-- page numbers -->
				<li class="page-item" v-for="page in projects.last_page"
					:class="{ 'active': page == projects.current_page }" aria-current="page">
					<button class="page-link" @click="goTo(page)">{{ page }}</button>
				</li>
				<!-- next page -->
				<li class="page-item" v-show="projects.next_page_url" @click="nextPage()">
					<button class="page-link" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</button>
				</li>
			</ul>
		</nav>
	</div>

</template>

<style lang="scss">
body {
	/* allow scroll while offcanvas is active */
	overflow: auto !important;
}

/* header */
#my_header {
	width: 100%;
	height: 200px;
	background-color: #212529;
	color: #F8F9FA;
}

#header_links {
	text-decoration: none;
	color: inherit;

	h5 {
		margin-bottom: 0;
		display: inline;
	}

	h5:hover {
		border-bottom: 2px solid #F8F9FA;
	}
}

#my_offcanvas {
	display: flex;
	align-items: center
}

.offcanvas-backdrop {
	display: none !important;
}

.offcanvas.show {
	visibility: visible;
	transform: none;
}

.offcanvas_style {
	--bs-offcanvas-height: 200px;
	position: absolute;
}

.offcanvas_spacing {
	margin-top: 200px;
}

#my_pagination {
	/* space for animation */
	margin-top: 60px;
}

/* filter menu */
#category_list {
	display: flex;
	gap: 1rem;
	list-style-type: none;
	color: inherit;
	justify-content: flex-start;
	padding: 0;

	@media(min-width: 768px) {
		justify-content: flex-end;
	}

	li:hover {
		border-bottom: 2px solid black;
	}

	.active_filter {
		font-weight: bold;
		border-bottom: 2px solid black;
	}
}
</style>