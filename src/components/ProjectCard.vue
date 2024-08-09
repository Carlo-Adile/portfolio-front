<script>

export default {
	name: 'ProjectCard',
	data() {
		return {

		}
	},
	props: {
		project: {
			type: Object,
			required: true
		},
		baseApiUrl: {
			type: String,
			required: true
		}
	},
	mounted() {
		/* console.log('progetto selezionato:', this.project); */
	}
}
</script>

<template>

	<router-link :to="{ name: 'project', params: { slug: project.slug } }" class="no_style">

		<div class="card card_style border-0 rounded-0 mb-3">
			<img v-if="project.cover_image" :src="baseApiUrl + '/storage/' + project.cover_image" :alt="project.title">
			<img v-else src="https://placehold.co/400x400" :alt="project.title" class="card-img-top">
		</div>

		<div class="card_details px-2 pt-1 mb-4">
			<h4 class="card_title">{{ project.title }}</h4>
			<p class="line_clamp">{{ project.content }}</p>
			<p v-if="project.type">{{ project.type.name }}</p>
		</div>
	</router-link>

</template>

<style lang="scss">
.no_style {
	text-decoration: none;
	color: inherit;
}

.card_style {
	position: relative;
	width: 100%;
	overflow: hidden;

	&::before {
		content: "";
		display: block;
		padding-top: 100%;

	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>