<template>
	<div ref="container" :class="$style.container">
		<NuxtImg
			:class="$style.flowerTop"
			src="/lineDrawing2.svg"
			alt="Декоративный элемент"
			loading="lazy"
			:style="flowerTopStyle"
		/>

		<div :class="$style.textBlock">
			<p>С нетерпением ждём встречи с вами 25 июля!</p>
			<p>С любовью, Игорь и Анастасия.</p>
		</div>

		<NuxtImg
			:class="$style.flowerBottom"
			src="/lineDrawing2.svg"
			alt="Декоративный элемент"
			loading="lazy"
			:style="flowerBottomStyle"
		/>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
const flowerTopStyle = ref({
	transform: 'translateX(-100%) rotate(90deg)',
})
const flowerBottomStyle = ref({
	transform: 'translateX(100%) rotate(-90deg)',
})

const handleScroll = () => {
	if (!container.value) return

	const rect = container.value.getBoundingClientRect()
	const viewportHeight = window.innerHeight
	const elementVisible = rect.top < viewportHeight && rect.bottom > 0

	if (elementVisible) {
		const visibilityRatio = Math.min(
			1,
			Math.max(0, 1 - rect.top / viewportHeight)
		)

		flowerTopStyle.value = {
			transform: `translateX(${-100 + visibilityRatio * 100}%) rotate(90deg)`,
		}

		flowerBottomStyle.value = {
			transform: `translateX(${100 - visibilityRatio * 100}%) rotate(-90deg)`,
		}
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
.container {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 300px;
	margin: 100px 0;
	width: 100%;
	max-width: 100%;
	// overflow: hidden;

	@include respond(mobile) {
	}
}

.textBlock {
	text-align: center;
	background-color: $container-color;
	border-radius: 20px;
	padding: 20px;
	margin: 0 10px;
	z-index: 1;
	max-width: 90%; /* Добавлено */

	@include respond(desktop) {
		padding: 40px;
	}

	p {
		font-size: 20px;
		line-height: 1.3;
		text-shadow: 1px 1px 2px black;

		@include respond(desktop) {
			font-size: 80px;
		}

		&:first-child {
			margin-bottom: 10px;
		}
	}
}

.flowerTop,
.flowerBottom {
	position: absolute;
	width: 42%;
	max-width: 200px; /* Добавлено */
	z-index: 2;
	transition: transform 0.5s ease-out;
	will-change: transform;
}

.flowerTop {
	top: 30%; /* Изменено с фиксированного значения */
	right: 25%; /* Изменено с фиксированного значения */
}

.flowerBottom {
	bottom: 30%; /* Изменено с фиксированного значения */
	left: 25%; /* Изменено с фиксированного значения */
}

/* Добавьте медиазапросы для адаптивности */
@include respond(mobile) {
	.flowerTop,
	.flowerBottom {
		width: 35%;
	}

	.textBlock {
		padding: 15px;
		font-size: 18px;
	}
}

@include respond(desktop) {
	.flowerTop,
	.flowerBottom {
		display: none;
	}
}
</style>
