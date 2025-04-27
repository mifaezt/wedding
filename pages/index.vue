<template>
  <div :class="$style.container">
    <We/>
    <Calendar/>
    <Place/>
    <Program />
  </div>
</template>

<script setup></script>

<style module lang="scss">
.container {
  max-width: 1200px; // или любая другая максимальная ширина
  // padding: 0 20px; // добавить отступы по бокам
  margin: 0 auto;
}
</style>