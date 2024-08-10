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
		call-to-action="Torna ai progetti" call-to-action-url="home" />
</template>

<style scoped></style>