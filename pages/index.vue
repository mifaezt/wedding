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

html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;

}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;


  @include respond(desktop) {
    gap: 80px;
}
}

</style>