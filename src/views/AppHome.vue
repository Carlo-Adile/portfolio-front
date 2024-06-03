<script>
import AppBanner from '../components/AppBanner.vue'

export default {
	name: 'AppHome',
	components: {
		AppBanner
	},
	data() {
		return {
			loading: true;
			latestPosts: []
		}
	}
}
</script>


<template>

	<AppBanner title="Home page"
		lead-text="This is the home page of my demo portfolio. Feel free to navigate through existing pages."
		call-to-action="View Projects" call-to-action-url="blog" />
</template>



<style scoped></style>