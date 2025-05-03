<template>
	<div :class="$style.contactContainer">
		<h2 :class="$style.contactTitle">Контакты</h2>
		<p :class="$style.contactMessage">
			До торжества — мы на связи. В сам день праздника — ваш координатор
			Любовь/Вероника? и телефон или ЛС?.
		</p>

		<NuxtLink
			:class="$style.button"
			to="https://yandex.ru/maps/-/CHfaqTZF"
			aria-label="Чат свадьбы"
		>
			<span>Чат свадьбы</span>
			<!-- <svg :class="$style.arrowIcon" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> -->
		</NuxtLink>
	</div>
</template>

<script setup></script>

<style module lang="scss">
.contactContainer {
	margin-top: 60px;
	padding: 0px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;

	@include respond(desktop) {
		margin: 10px 10%;
	}
}

.contactTitle {
	font-size: 40px;
	text-align: center;

	line-height: 110%;
	color: white;
	padding-bottom: 10px;

	@include respond(desktop) {
		font-size: 120px;
	}
}

.contactMessage {
	padding-top: 10px;
	font-size: 20px;
	line-height: 1.3;
	text-shadow: 1px 1px 2px black;
	line-height: 120%;
	text-align: center;

	@include respond(desktop) {
		font-size: 80px;
	}
}

.button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	margin-top: 20px;
	padding: 12px 10px;
	border-radius: 20px;
	border: 2px solid white;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.493);
	// background-color: white;
	color: $text-color;
	font-size: 20px;
	font-family: Comfortaa;
	font-weight: 300; // Легкий для основного текста
	text-decoration: none;
	transition: all 0.3s ease;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	// position: relative;
	// overflow: hidden;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);

		// .arrowIcon {
		//     transform: translateX(3px);
		// }
	}

	@include respond(desktop) {
		font-size: 60px;
		margin: 40px;
		padding: 30px 40px;
		border-radius: 40px;
		border: 4px solid white;
	}
}
</style>
