<template>
	<div :class="$style.container">
		<We />
		<Calendar />
		<Place />
		<Program />
		<Dress />
		<Moments />
		<Form />
		<Contacts />
		<End />
	</div>
</template>

<script setup></script>

<style module lang="scss">
html,
body {
	position: relative;
	overflow-x: hidden;
	width: 100%;
	max-width: 100%;

}

.container {
	display: flex;
	flex-direction: column;
	gap: 10px;

	justify-content: center;
	align-items: center;

	@include respond(desktop) {
		gap: 10px;
	}
}
</style>
