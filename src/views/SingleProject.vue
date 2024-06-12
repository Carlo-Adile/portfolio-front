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
			base_api_url: 'http://127.0.0.1:8000',
			base_projects_url: '/api/projects'
		}
	},
	mounted() {
		let url = this.base_api_url + this.base_projects_url + `/${this.$route.params.slug}`
		this.callApi(url);
	},
	methods: {
		callApi(url) {
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
	<AppBanner title="About this project"
		lead-text="See a more detailed brief of this specific project. Feel free to discover the source code on GitHub or just check the functioning here on this view."
		call-to-action="View all projects" call-to-action-url="blog" />
	<!-- <div v-if="project">
		<h5>Single project: {{ project.title }}</h5>
	</div> -->
	<div class="container py-2" v-if="project">
		<div class="row justify-content-start">
			<div class="col-6">
				<img :src="base_api_url + '/storage/' + project.cover_image" alt="" class="img-fluid">
			</div>
			<div class="col-4">
				<h4>{{ project.title }}</h4>
				<span class="text-secondary">Description:</span>
				<p>{{ project.content }}</p>
			</div>
		</div>

	</div>

</template>