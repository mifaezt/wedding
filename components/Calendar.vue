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
export default {
  // Логика компонента без анимации
}
</script>

<style module lang="scss">
.calendarWrapper {
  position: relative;
  padding: 0px 0px 30px 0px;
  // background-color: rgba(0, 51, 7, 0.103);
  // border-radius: 16px;
}

.calendarContainer {
  position: relative;
  width: 100%;
  // max-width: 800px;
  margin: 0 auto;

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

  @include respond(desktop) {
    width: 1000px;

    }
}
</style>