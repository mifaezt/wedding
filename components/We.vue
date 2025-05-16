<template>
	<div :class="$style.weMain" ref="weMain">
		<h1 :class="$style.mainTitle">Wedding day</h1>
		<div :class="$style.imgContainer">
			<NuxtImg :class="$style.weImg" src="/images/We.jpg" />
		</div>
		<NuxtImg
			:class="$style.imgMainPlants"
			src="/images/eucalyptusOrig.png"
			:style="mainPlantsStyle"
		/>
		<NuxtImg
			:class="$style.imgMainPlantsRight"
			src="/images/eucalyptusOrig.png"
			:style="mainPlantsRightStyle"
		/>
		<div :class="$style.mainInfoTitle">
			<h2 :class="$style.names">Игорь и Анастасия</h2>
			<h3 :class="$style.date">25 / 07 / 2025</h3>
		</div>
		<NuxtImg
			:class="$style.imgSecondPlants"
			src="eucalyptusSecond.png"
			:style="secondPlantsStyle"
		/>
		<NuxtImg
			:class="$style.imgSecondPlantsRight"
			src="eucalyptusSecond.png"
			:style="secondPlantsRightStyle"
		/>

		<p :class="$style.letter">
			Дорогие родные и друзья! <br />
			Приглашаем вас на нашу свадьбу! <br />
			Мы хотим разделить этот важный день нашей жизни с вами -<br />
			самыми близкими и родными людьми.
		</p>
		<NuxtImg :class="$style.ornamentCenter" src="infitity.svg" />
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
	setup() {
		const weMain = ref(null)
		const scrollY = ref(0)

		const mainPlantsStyle = ref({ transform: 'translateY(0px) rotate(0deg)' })
		const mainPlantsRightStyle = ref({
			transform: 'scaleX(-1) translateY(0px) rotate(0deg)',
		})
		const secondPlantsStyle = ref({ transform: 'translateY(0px) rotate(0deg)' })
		const secondPlantsRightStyle = ref({
			transform: 'scaleX(-1) translateY(0px) rotate(0deg)',
		})

		const handleScroll = () => {
			scrollY.value = window.scrollY

			// Параллакс эффект для ветвей
			mainPlantsStyle.value = {
				transform: `translateY(${scrollY.value * 0.2}px) rotate(${
					scrollY.value * 0.01
				}deg)`,
			}

			mainPlantsRightStyle.value = {
				transform: `scaleX(-1) translateY(${scrollY.value * 0.2}px) rotate(${
					-scrollY.value * -0.01
				}deg)`,
			}

			secondPlantsStyle.value = {
				transform: `translateY(${scrollY.value * 0.1}px) rotate(${
					scrollY.value * 0.01
				}deg)`,
			}

			secondPlantsRightStyle.value = {
				transform: `scaleX(-1) translateY(${scrollY.value * 0.1}px) rotate(${
					-scrollY.value * -0.01
				}deg)`,
			}
		}

		onMounted(() => {
			if (window.innerWidth < 1200) {
				window.addEventListener('scroll', handleScroll)
				handleScroll() // Инициализация начального положения
			}
		})

		onUnmounted(() => {
			window.removeEventListener('scroll', handleScroll)
		})

		return {
			weMain,
			mainPlantsStyle,
			mainPlantsRightStyle,
			secondPlantsStyle,
			secondPlantsRightStyle,
		}
	},
}
</script>

<style module lang="scss">
.weMain {
	@include center;
	// position: relative;
	padding: 0px 10px;

	@include respond(tablet) {
		padding: 40px 0;
	}
}

.imgContainer {
	margin: 0px 20px;
	z-index: 2;
	max-width: 1200px;
	display: flex;
	justify-content: center;
	align-items: center;

	@include respond(mobile) {
		margin: 0px 30px;
	}

	@include respond(tablet) {
		margin: 0px 40px;
	}
}

.weImg {
	border: 2px solid $text-color;
	max-width: 100%;
	height: auto;
	margin-top: 37%;

	@include respond(desktop) {
		max-width: 50%;
		margin-top: 17%;
	}
}

.mainTitle {
	@include center;
	position: absolute;
	top: 73px;
	z-index: 4;
	text-shadow: 1px 1px 10px black;


	@include respond(mobileS) {
		top: 40px;
	}

	@include respond(mobileM) {
		top: 62px;
	}

	@include respond(tablet) {
		top: 150px;
	}

	
	@include respond(desktop) {
		top: 70px;
	}


}

.names {
	line-height: 1.4em;
	text-align: center;

}

.date {
	font-family: $font-main;
	font-weight: 200;
	text-align: center;

}

.letter {
	padding: 10px 10px;
	text-align: center;
	background-color: $container-color;
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.527);

	@include respond(desktop) {
		max-width: 50%;
	}

}

.mainInfoTitle {
	position: relative;
	margin: 20px 0;
}

.ornamentCenter {
	width: 40%;
	margin: 20px auto;
	display: block;

	@include respond(mobile) {
		width: 40%;
	}

	@include respond(tablet) {
		width: 25%;
	}

	@include respond(desktop) {
		width: 30%;
	}
}

.imgMainPlants {
	position: absolute;
	width: 40%;
	left: 0;
	top: 0;
	z-index: 3;
	@include transition-all(0.1s);

	@include respond(mobile) {
		width: 35%;
		left: 0;
	}

	@include respond(tablet) {
		width: 30%;
		left: 0%;
	}
}

.imgMainPlantsRight {
	position: absolute;
	width: 40%;
	right: 0;
	top: 0;
	z-index: 3;
	@include transition-all(0.1s);

	@include respond(mobile) {
		width: 35%;
		right: 0;
	}

	@include respond(tablet) {
		width: 30%;
		right: -2%;
	}
}

.imgSecondPlants {
	position: absolute;
	width: 30%;
	left: -10%;
	top: 12%;
	z-index: -1;
	transform: scaleY(-1);
	@include transition-all(0.1s);

	@include respond(mobile) {
		width: 25%;
		left: -5%;
		top: 14%;
	}

	@include respond(tablet) {
		width: 20%;
		left: -5%;
	}

	@include respond(desktop) {
		top: 15%;
	}
}

.imgSecondPlantsRight {
	position: absolute;
	width: 30%;
	right: -10%;
	top: 12%;
	z-index: -1;
	@include transition-all(0.1s);

	@include respond(mobile) {
		width: 25%;
		right: -5%;
		top: 14%;
	}

	@include respond(tablet) {
		width: 20%;
		right: -5%;
	}

	@include respond(desktop) {
		top: 15%;
	}
}
</style>
