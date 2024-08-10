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

	<AppBanner title="Blog personale"
		lead-text="Questo è il blog del mio sito internet. Torna qui in futuro per vedere post e annunci di vario genere."
		call-to-action="Torna ai progetti" call-to-action-url="home" />

	<div class="container">
		<div class="row">
			<div class="col-12">
				<h5>Sezione in fase di sviluppo...</h5>
			</div>
		</div>
	</div>
</template>



<style scoped></style>