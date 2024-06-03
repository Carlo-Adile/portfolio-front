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
		<div class="card-header p-0">
			<img v-if="project.cover_image" :src="baseApiUrl + '/storage/' + project.cover_image" :alt="project.title"
				class="card-img-top">
			<img v-else src="https://placehold.co/400x200" :alt="project.title" class="card-img-top">
		</div>

		<div class="card-body">
			<h3 class="card-title">{{ project.title }}</h3>
			<p class="card-text line_clamp">{{ project.content }}</p>

			<hr>

			<div v-if="project.type">
				<h5>Type of project - {{ project.type.name }}</h5>
			</div>

			<hr>

			<div v-if="project.technologies && project.technologies.length">
				<h5>Technologies used:</h5>
				<ul>
					<li v-for="technology in project.technologies" :key="technology.id">
						{{ technology.name }}
					</li>
				</ul>
			</div>

		</div>
	</div>
</template>


<style lang="scss"></style>