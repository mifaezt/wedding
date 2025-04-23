<template>
  <div :class="$style.calendarWrapper">
    <div :class="$style.calendarContainer">
      <div :class="$style.calendarImageWrapper">
        <NuxtImg 
          :class="$style.calendar" 
          src="calendars.svg" 
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
  padding: 20px;
}

.calendarContainer {
  position: relative;
  width: 100%;
  max-width: 500px;
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
}
</style>