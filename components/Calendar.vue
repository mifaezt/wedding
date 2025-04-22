<template>
    <div :class="$style.calendarContainer">
        <NuxtImg :class="$style.calendar" src="calendar.png" />
        <NuxtImg :class="$style.drawning" src="lineDrawing.png" />
    </div>
    
</template>

<script></script>

<style style module lang="scss">
.calendar {
    
}

.calendarContainer {
    @include center;
    position: relative;
    height: 260px;
}


.drawning {
    position: absolute;
    // transform: rotateY(180deg);
    bottom: -25%;
    right: 0;
    transform: scaleX(-1)  rotate(30deg);
    width: 40%;
    
}

</style>