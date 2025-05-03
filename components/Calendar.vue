<template>
  <div :class="$style.calendarWrapper">
    <div :class="$style.calendarContainer">
      <div :class="$style.calendarImageWrapper">
        <NuxtImg 
          :class="$style.calendar" 
          src="calendar.svg" 
          alt="Дата свадьбы"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style module lang="scss">
.calendarWrapper {
  position: relative;
  padding: 0px 0px 30px 0px;
}

.calendarContainer {
  position: relative;
  width: 100%;
  margin: 0 auto;

  @include respond(desktop) {
		max-width: 50%;
    margin-bottom: 30px;
	}

}

.calendarImageWrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.calendar {
  width: 100%;
  height: 100%;
  object-fit: contain;

  @include respond(tablet) {
    width: 600px;
	}

  @include respond(desktop) {
    width: 1000px;
    }
}
</style>