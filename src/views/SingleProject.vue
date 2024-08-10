<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';

export default {
	name: 'SingleProject',
	components: {
		AppBanner
	},
	data() {
		return {
			loading: true,
			project: null,
			/* base_api_url: 'http://127.0.0.1:8000', */
			base_api_url: import.meta.env.VITE_BASE_API_URL,
			base_projects_url: '/api/projects'
		}
	},
	mounted() {
		let url = this.base_api_url + this.base_projects_url + `/${this.$route.params.slug}`
		this.callApi(url);
	},
	methods: {
		callApi(url) {
			console.log("url composto per il singolo progetto: ", url);
			axios
				.get(url)
				.then(response => {
					if (response.data.success) {
						this.project = response.data.response;
						console.log(response.data);
					} else {
						this.$router.push({ name: 'not-found' })
					}
				})
				.catch(err => {
					console.error(err);
				})
		}
	}
}
</script>

<template>
	<AppBanner title="Anteprima progetto"
		lead-text="Ecco un anteprima più dettagliata su questo progetto. Clicka sui link disponibili per scoprire il codice sorgente su Github o il sito ufficiale."
		call-to-action="Vedi tutti i progetti" call-to-action-url="home" />

	<div class="container py-2" v-if="project">
		<div class="row justify-content-start">
			<!-- immagine-link -->
			<div class="col-12 col-lg-8">
				<div v-if="project.deploy_url">
					<a :href="project.deploy_url" style="font-size: 0.8rem;" target="_blank" rel="noopener noreferrer">
						<img :src="base_api_url + '/storage/' + project.cover_image" alt="project.title"
							style="width: 100%; height: auto;">
					</a>
				</div>
				<div v-else>
					<img :src="base_api_url + '/storage/' + project.cover_image" alt="project.title"
						style="width: 100%; height: auto;">
				</div>
			</div>

			<!-- info -->
			<div class="col-12 col-lg-4 mt-2">
				<h3>{{ project.title }}</h3>
				<p class="text-secondary mb-4">{{ project.category.title }}</p>
				<p class="mb-4">{{ project.content }}</p>
				<ul v-for="technology in project.technologies" :key="technology.id" class="custom_list">
					<li>{{ technology.title }}</li>
				</ul>
				<div class="my-4 d-flex gap-2">
					<a v-if="project.github_url" :href="project.github_url" class="btn border border-dark rounded-0"
						style="font-size: 0.8rem;" target="_blank" rel="noopener noreferrer">
						REPOSITORY GITHUB
					</a>
					<a v-if="project.deploy_url" :href="project.deploy_url" class="btn border border-dark rounded-0"
						style="font-size: 0.8rem;" target="_blank" rel="noopener noreferrer">
						SITO UFFICIALE
					</a>
				</div>
				<p v-if="project.note" class="align-self-end">note: <br> {{ project.note }}</p>
			</div>
		</div>

	</div>

</template>

<style lang="scss" scoped>
ul.custom_list {
	list-style: none;
	padding-left: 0;
}

ul.custom_list li::before {
	content: '-';
	margin-right: 10px;
}

ul.custom_list li {
	cursor: pointer;
}
</style>