<template>
	<div :class="$style.dressContainer">
		<div :class="$style.dressContent">
			<h2 :class="$style.dressTitle">Дресс-код</h2>
			<p :class="$style.dressMessage">
				Мы не хотим вас ограничивать в выборе наряда, но будем рады, если это
				будут спокойные пастельные тона.
			</p>
		</div>
		<NuxtImg
			:class="$style.drawingDress"
			src="/images/colorEucal.png"
			alt="Декоративный элемент"
			loading="lazy"
			:style="drawingDressStyle"
		/>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scrollY = ref(0)
const initialDressRotation = -20

const drawingDressStyle = ref({
	transform: `scaleX(-1) scaleY(-1) rotate(${initialDressRotation}deg)`,
})

const handleScroll = () => {
	scrollY.value = window.scrollY
	const rotationFactor = scrollY.value * 0.03

	drawingDressStyle.value = {
		transform: `scaleX(-1) scaleY(-1) rotate(${
			initialDressRotation + rotationFactor
		}deg)`,
	}
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
	handleScroll()
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style module lang="scss">
.dressContainer {
	margin: 10px 8px 30px 0px;
	position: relative;
	margin: 0 auto;
	padding: 0px 20px;

	@include respond(desktop) {
	max-width: 60%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.dressContent {
	width: 80%;

	@include respond(desktop) {
		margin-left: 10%;
		width: 60%;
	}
}

.dressTitle {
	text-align: left;
	margin-bottom: 20px;

	@include respond(mobileM) {
		margin-bottom: 10px;
		margin-top: 10px;
	}

	@include respond(desktop) {
		margin-bottom: 30px;
	}
}

.dressMessage {
	line-height: 1.5;
	text-shadow: 1px 1px 2px black;

	@include respond(desktop) {
		line-height: 1.6;
	}
}

.drawingDress {
	position: absolute;
	width: 400px;
	bottom: -230px;
	right: -50px;
	transform: scaleX(-1) scaleY(-1) rotate(-20deg);
	will-change: transform;
	transition: transform 0.3s ease;
	z-index: 1;



	@include respond(mobileS) {
		width: 350px;
		bottom: -180px;
		right: -40px;
		transform: scaleX(-1) scaleY(-1) rotate(-20deg);
	}

	@include respond(mobileM) {
		width: 350px;
		bottom: -200px;
		right: -40px;
		transform: scaleX(-1) scaleY(-1) rotate(-20deg);
	}

	@include respond(desktop) {
		width: 850px;
		bottom: -240px;
		right: -300px;
		transform: scaleX(-1) scaleY(-1) rotate(-20deg);
	}
}
</style>
