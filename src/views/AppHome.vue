<script>
import AppBanner from '../components/AppBanner.vue'
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default {
	name: 'AppHome',
	components: {
		AppBanner,
		ProjectCard
	},
	data() {
		return {
			loading: true,
			latestProjects: [],
			base_api_url: 'http://127.0.0.1:8000',
			base_projects_url: '/api/latest',
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
					this.latestProjects = response.data.projects;
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

	<AppBanner title="Home page"
		lead-text="This is the home page of my demo portfolio. Feel free to navigate through existing pages."
		call-to-action="View all Projects" call-to-action-url="blog" />

	<div class="container py-2">
		<h4 class="p-4">Some random text</h4>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores fugiat soluta ut fuga doloribus
			voluptatem amet accusamus quo labore ratione sapiente rem perferendis vitae possimus assumenda reiciendis
			obcaecati, atque pariatur non. Perferendis consequatur sint voluptate pariatur sed. Eaque minima numquam saepe in
			quaerat dolores ut beatae, accusantium explicabo, perspiciatis fuga magnam dignissimos eveniet laborum quis quia
			doloremque ratione ipsa? Ea officia itaque quidem ad vero quisquam ipsam dolor praesentium similique consectetur.
			Fugiat incidunt blanditiis non fugit, perferendis officiis obcaecati. Aperiam ipsam, quibusdam numquam provident
			voluptas cupiditate eveniet eligendi quam iusto nesciunt beatae odio. Perspiciatis saepe commodi vitae? Iure,
			officia!</p>
	</div>

	<div class="container py-2" style="min-height: 400px">
		<div class="row">
			<h4 class="p-4">Check the latest projects added</h4>
			<div class="col-4" v-for="project in latestProjects">
				<ProjectCard :project="project" :baseApiUrl="base_api_url" />
			</div>

		</div>
	</div>
</template>

<style scoped></style>