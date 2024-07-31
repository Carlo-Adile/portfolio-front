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

	<header class="container-fluid" id="my_header">
		<div class="container h-100 py-4">
			<!-- <router-link :to="{ name: 'home' }" class="no_style">CARLO ADILE</router-link> -->
			<div class="row h-100 justify-content-between">
				<div class="row col-4 h-100 align-items-center">
					<router-link v-for="link in menu" :to="{ name: link.route }" id="header_links">
						<h5>{{ link.text }}</h5>
					</router-link>
				</div>
				<div class="row col-8 h-100 align-items-center">
					<h3>header</h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eveniet, consequuntur neque labore nesciunt
						nihil odio reiciendis iure dicta officiis quidem voluptatibus quos libero possimus, nisi vel reprehenderit
						tempore porro?
					</p>

				</div>
			</div>

		</div>

	</header>
</template>

<style scoped>
#my_header {
	width: 100%;
	height: 200px;
	background-color: #212529;
	color: #F8F9FA;
}

#header_links {
	text-decoration: none;
	color: inherit;

	h5 {
		margin-bottom: 0;
		display: inline;
	}

	h5:hover {
		border-bottom: 2px solid #F8F9FA;
	}
}
</style>