<template>
  <div :class="$style.container">
    <We/>
    <Calendar/>
    <Place/>
    <Program />
    <Dress />
    <Moments />
    <Contacts />
    <End />
  </div>
</template>

<script setup></script>

<style module lang="scss">
.container {
  max-width: 1200px; // или любая другая максимальная ширина
  // padding: 0 20px; // добавить отступы по бокам
  // margin: 0 auto;
  overflow-x: hidden;
  width: 100%;
}
</style>