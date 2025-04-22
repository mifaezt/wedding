<template>
    <div :class="$style.placeMainContainer">
        <div :class="$style.placeContainer">
            <h2>Место торжества</h2>
            <NuxtImg :class="$style.logo"src="karjalaLogoWhite.png" />
            <p>п. Матросы, местность Сойважпорог, д. 3</p>
            <NuxtImg :class="$style.karjala"src="KarjalaPark.jpg" />
            <NuxtLink :class="$style.button" to="#">В путь</NuxtLink>
        </div>
        
    </div>

</template>

<script>

</script>

<style style module lang="scss">

.placeMainContainer {
    @include center;
    margin-top: 30px;
    z-index: 2;


}

.placeContainer {
    @include center;
    position: relative;
width: 90%;
height: 300px;

clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 76%, 0 100%);
background-color: $secondary-color;
}


.button {
    height: 50px;
    width: 50px;
    border-radius: 30px;
    background-color: $text-color;
    color: $secondary-color;
    position: absolute;
    bottom: 20%;
    z-index: 1;
}
</style>