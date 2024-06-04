<script>
export default {
	name: 'Appheader',
	data() {
		return {
			menu: [
				{
					'text': 'Home',
					'route': 'home'
				},
				{
					'text': 'About',
					'route': 'about'
				},
				{
					'text': 'Contacts',
					'route': 'contacts'
				},
				{
					'text': 'Blog',
					'route': 'blog'
				}
			]
		}
	}
}
</script>

<template>

	<header class="container-fluid">
		<nav class="navbar navbar-expand-sm navbar-light bg-light">
			<div class="container">
				<router-link :to="{ name: 'home' }" class="no_style">CARLO ADILE</router-link>
				<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
					data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="right-menu d-flex gap-3">
					<router-link v-for="link in menu" :to="{ name: link.route }" class="no_style">{{ link.text }}</router-link>
				</div>
			</div>
		</nav>

	</header>
</template>

<style scoped>
.no_style {
	text-decoration: none;
	color: inherit;
}
</style>