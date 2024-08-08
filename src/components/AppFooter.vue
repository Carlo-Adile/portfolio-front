<script>
export default {
	name: 'AppFooter',
	data() {
		return {
			socialIcons: [
				{ github: 'lorem', }
			]
		}
	}
}
</script>

<template>
	<div class="container py-5">
		<div class="row align-items-baseline">
			<div class="col-12 col-md-6">
				<p class="m-0">Portfolio made using Vue JS and Laravel. Designed with Bootstrap.</p>
			</div>
			<div class="col-12 col-md-6">
				<ul class="list-unstyled d-flex justify-content-start justify-content-md-end gap-3">
					<li class="rounded-circle bg-light social_li">
						<a href="https://github.com/Carlo-Adile" target="_blank" rel="noopener noreferrer">
							<i class="fa-brands fa-github text-black fs-4"></i>
						</a>
					</li>
					<li class="rounded-circle bg-light p-3 social_li">
						<a href="http://linkedin.com/in/carlo-adile-5673302b7" target="_blank"
							rel="noopener noreferrer">
							<i class="fa-brands fa-linkedin text-black fs-4"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<style lang="scss">
.social_li {
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>