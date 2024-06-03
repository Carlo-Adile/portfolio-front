<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
import AppBanner from '../components/AppBanner.vue'

export default {
	name: 'AppBlog',
	components: {
		ProjectCard,
		AppBanner
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

	<AppBanner title="Demo Portfolio" lead-text="This is the demo of my personal portfolio where you will be soon able to explore all of my projects in detail.
				Each project showcases the various technologies I have used.
				Feel free to browse through my work and see the skills I have developed over time.
				Whether it's web development, mobile applications, or other software solutions." call-to-action="View Projects"
		call-to-action-url="blog" />

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
</template>



<style scoped></style>