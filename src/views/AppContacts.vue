<script>
import AppBanner from '../components/AppBanner.vue'
export default {
	name: 'AppContacts',
	components: {
		AppBanner
	}
}
</script>

<template>
	<AppBanner title="Contatti"
		lead-text="Sei interessato a lavorare con me? hai domande o curiosità? sentiti libero di contattarmi tramite questa pagina."
		call-to-action="Torna ai progetti" call-to-action-url="home" />

	<div class="container">
		<h4 class="p-2">Get in touch with me</h4>
		<form action="" class="w-25">

			<div class="mb-3">
				<label for="name" class="form-label">Name</label>
				<input type="text" class="form-control" name="name" aria-describedby="helperName"
					placeholder="Your name">
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">Email</label>
				<input type="email" class="form-control" name="email" aria-describedby="helperEmail"
					placeholder="Your email">
			</div>
			<div class="col mb-3">
				<label for="message" class="form-label">Message</label>
				<!-- <input type="text" class="form-control" name="message" aria-describedby="helperMessage"
					placeholder="Enter a message"> -->
				<div>
					<textarea name="message" id="message" rows="4" aria-describedby="helperMessage"
						placeholder="Enter a message" class="form-control"></textarea>
				</div>
			</div>

			<button type="submit" class="btn btn-primary">
				Submit
			</button>

		</form>
	</div>
</template>

<style scoped></style>