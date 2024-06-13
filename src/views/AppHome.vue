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
			base_api_url: 'http://127.0.0.1:8000',
			base_projects_url: '/api/projects',
			/* base_projects_url: '/api/latest', */
			types: [
				{ id: 1, name: 'Fullstack' },
				{ id: 2, name: 'Front-end' },
				{ id: 3, name: 'Back-end' },
				{ id: 4, name: 'IoT' },
			],

			/* types */
			selectedType: '',
			base_types_url: '/api/filtered',
			/* offcanvas */
			isToggle: false
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
					if (response.data.success) {
						this.projects = response.data.projects;
						this.loading = false;
						console.log(response.data);
					} else {
						console.error("api not reached successfully");
					}
				})
				.catch(err => {
					console.error(err);
				})
		},
		/* api calls */
		filterByType(type) {
			console.log('Selected type:', type);
			this.selectedType = type;
			console.log(this.selectedType);

			if (type) {
				const url = this.base_api_url + this.base_projects_url + `?type_id=${type.id}`;
				console.log('API URL:', url);
				this.projects.data = null;
				this.callApi(url);
			} else {
				this.callApi(this.base_api_url + this.base_projects_url);
			}
		},
		clearFilter() {
			this.projects.data = null;
			this.selectedType = '';
			this.callApi(this.base_api_url + this.base_projects_url);
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
		<AppHeader />
	</div>

	<!-- first section, offcanvas btn, filter menu -->
	<div class="container py-5" :class="{ offcanvas_spacing: isToggle == true }">
		<div class="row">
			<!-- refactor in component -->
			<div class="col-12 d-flex justify-content-between">
				<h3 class="pb-5">Portfolio</h3>
				<button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#my_offcanvas"
					aria-controls="my_offcanvas" @click="toggleOffcanvas">
					<i v-if="isToggle == false" class="fa-solid fa-bars"></i>
					<i v-else="isToggle == true" class="fa-solid fa-x"></i>
				</button>
			</div>
			<div class="col-8">
				<h2>Ciao, sono Carlo Adile</h2>
				<h4>Jr Full Stack Web Developer Trainee</h4>
			</div>
			<div class="col-4 align-self-end">
				<ul id="type_list">
					<li @click="clearFilter" :class="{ active_filter: selectedType === '' || selectedType === null }">All</li>
					<li v-for="type in types" @click="filterByType(type)" :key="type.id"
						:class="{ active_filter: selectedType.id === type.id }">
						{{ type.name }}
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- projects rendering -->
	<div class="container py-2 " style="min-height: 400px">
		<div class="row px-2" v-if="projects.data">
			<transition-group appear @before-enter="beforeEnter" @enter="enter">
				<div class="col-4" v-for="(project, index) in projects.data" data-index="index" :key="project.id">
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
				<li class="page-item" v-for="page in projects.last_page" :class="{ 'active': page == projects.current_page }"
					aria-current="page">
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
#type_list {
	display: flex;
	gap: 1rem;
	justify-content: flex-end;
	list-style-type: none;
	color: inherit;

	li:hover {
		border-bottom: 2px solid black;
	}

	.active_filter {
		font-weight: bold;
		border-bottom: 2px solid black;
	}
}
</style>