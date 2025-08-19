<template>
	<div :class="$style.contactContainer">
		<h2 :class="$style.contactTitle">Контакты</h2>
		<p :class="$style.contactMessage">
			До торжества — мы на связи. В сам день праздника будем заняты, наш организатор
			Любовь +79217012201
		</p>

		<NuxtLink
			:class="$style.button"
			to="https://img02.rl0.ru/afisha/e1500x1000i/daily.afisha.ru/uploads/images/5/f6/5f69db3ed5c07c016af0dd0267606303.png"
			aria-label="Чат свадьбы"
		>
			<span>Чат свадьбы</span>
		</NuxtLink>
	</div>
</template>

<script setup></script>

<style module lang="scss">
.contactContainer {
	margin-top: 20px;
	padding: 0px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;

	@include respond(desktop) {
		max-width: 60%;
	}
}

.contactTitle {
	text-align: center;
	line-height: 110%;
	padding-bottom: 10px;
}

.contactMessage {
	padding-top: 10px;
	line-height: 1.3;
	text-shadow: 1px 1px 2px black;
	line-height: 120%;
	text-align: center;
}

.button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	// width: 50%;
	margin-top: 20px;
	padding: 12px 10px;
	border-radius: 20px;
	border: 2px solid white;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.493);
	color: $text-color;
	font-size: 20px;
	font-family: Comfortaa;
	font-weight: 300;
	text-decoration: none;
	transition: all 0.3s ease;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
	}

	@include respond(mobileS) {
		font-size: 18px;
        padding:12px 20px ;
        border-radius: 15px;
	}

	@include respond(mobile) {
		font-size: 18px;
		padding: 12px 20px;
		border-radius: 15px;
	}

	@include respond(tablet) {
		font-size: 25px;
		padding: 20px 20px;
		border-radius: 20px;
	}


	@include respond(desktop) {
		font-size: 40px;
		padding: 30px 40px;
		border-radius: 40px;
		border: 4px solid white;
	}

}
</style>
