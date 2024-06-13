<script>
import AppBanner from '../components/AppBanner.vue'
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
import gsap from 'gsap';

export default {
	name: 'AppHome',
	components: {
		AppBanner,
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
		/* metodi api */
		filterByType(type) {
			console.log('Selected type:', type);
			this.selectedType = type;

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
			this.callApi(this.base_api_url + this.base_projects_url);
		},
		/* metodi pagination */
		prevPage() {
			if (this.prevPageUrl) {
				this.callApi(this.prevPageUrl);
			}
		},
		nextPage() {
			if (this.nextPageUrl) {
				this.callApi(this.nextPageUrl);
			}
		},
		goTo(page) {
			const url = this.base_api_url + this.base_projects_url + `?page=${page}`
			this.callApi(url);
		},
		/* metodi animation */
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
		}
	}
}
</script>

<template>

	<!-- header and filter -->
	<div class="container py-5">
		<div class="row">
			<div class="col-12">
				<h3 class="pb-5">Portfolio</h3>
			</div>
			<div class="col-8">
				<h2>Ciao, sono Carlo Adile</h2>
				<h4>Jr Full Stack Web Developer Trainee</h4>
			</div>
			<div class="col-4 align-self-end">
				<ul id="type_list">
					<li @click="clearFilter" :class="{ active: selectedType === '' }">All</li>
					<li v-for="type in types" @click="filterByType(type)">{{ type.name }}</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- projects rendering -->
	<div class="container py-2 " style="min-height: 400px">
		<div class="row" v-if="projects.data">
			<transition-group appear @before-enter="beforeEnter" @enter="enter">
				<div class="col-4" v-for="(project, index) in projects.data" data-index="index" :key="project.id">
					<ProjectCard :project="project" :baseApiUrl="base_api_url" />
				</div>
			</transition-group>
		</div>
	</div>

	<!-- navigation -->
	<div class="container">
		<nav aria-label="Page navigation" v-if="this.projects.data">
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
#type_list {
	display: flex;
	gap: 1rem;
	justify-content: flex-end;

	list-style-type: none;
	text-decoration: none;
	color: inherit;

	li:hover {
		border-bottom: 2px solid black;
	}
}

.active_line {
	border-bottom: 2px solid black;
}
</style>