<script>
export default {
	name: 'AppBanner',
	props: {
		'title': String,
		'leadText': String,
		'callToAction': String,
		'callToActionUrl': String
	},
	data() {
		return {

		}
	}
}

</script>
<template>
	<div class="banner">
		<div class="container-fluid p-5">
			<h1>{{ title }}</h1>
			<p>{{ leadText }}</p>
			<router-link :to="{ name: callToActionUrl }" class="btn btn-primary">{{ callToAction }}</router-link>
		</div>
	</div>
</template>

<style scoped></style>