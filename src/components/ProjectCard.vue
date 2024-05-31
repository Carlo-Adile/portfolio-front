<script>


export default {
	name: 'ProjectCard',
	props: {
		project: {
			type: Object,
			required: true
		},
		baseApiUrl: {
			type: String,
			required: true
		}
	}

}
</script>

<template>
	<div class="card mb-3">
		<img v-if="project.cover_image" :src="baseApiUrl + '/storage/' + project.cover_image" :alt="project.title"
			class="card-img-top">
		<img v-else src="https://placehold.co/600x400" :alt="project.title" class="card-img-top">
		<div class="card-body">
			<h3 class="card-title">{{ project.title }}</h3>
			<p class="card-text line_clamp">{{ project.content }}</p>
		</div>


	</div>
</template>


<style lang="scss"></style>