<script>
import AppBanner from '../components/AppBanner.vue'

export default {
	name: 'AppAbout',
	components: {
		AppBanner
	}
}
</script>


<template>
	<AppBanner title="About me"
		lead-text="In this section you can discover more about me. Find more about my studies, background and personal info."
		call-to-action="View Projects" call-to-action-url="blog" />
</template>

<style scoped></style>