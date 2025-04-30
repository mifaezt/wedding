<template>
  <div :class="$style.dressContainer">
    <div :class="$style.dressContent">
      <h2 :class="$style.dressTitle">Дресскод</h2>
      <p :class="$style.dressMessage">
        Мы не хотим вас ограничивать в выборе наряда, но будем рады, если это будут спокойные пастельные тона.
      </p>
    </div>
    <NuxtImg 
      :class="$style.drawingDress" 
      src="colorEucal.png" 
      alt="Декоративный элемент"
      loading="lazy"
      :style="drawingDressStyle"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);
const initialDressRotation = -20;

const drawingDressStyle = ref({ 
  transform: `scaleX(-1) scaleY(-1) rotate(${initialDressRotation}deg)` 
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
  const rotationFactor = scrollY.value * 0.03;
  
  drawingDressStyle.value = {
    transform: `scaleX(-1) scaleY(-1) rotate(${initialDressRotation + rotationFactor}deg)`
  };
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style module lang="scss">
.dressContainer {
  margin: 10px 8px 30px 20px;
  position: relative;
  // max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  @include respond(desktop) {
    // padding: 80px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.dressContent {
  width: 80%;

  @include respond(desktop) {
   margin-left: 10%;
   width: 60%;
    // max-width: 600px;
  }
}

.dressTitle {
  font-size: 40px;
  text-align: left;
  color: white;
  margin-bottom: 20px;

  @include respond(desktop) {
    font-size: 120px;
    margin-bottom: 30px;
  }
}

.dressMessage {
  font-size: 20px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px black;

  @include respond(desktop) {
    font-size: 80px;
    line-height: 1.6;
  }
}

.drawingDress {
  position: absolute;
  width: 400px;
  bottom: -200px;
  right: -50px;
  transform: scaleX(-1) scaleY(-1) rotate(-20deg);
  will-change: transform;
  transition: transform 0.3s ease;
  z-index: 1;

  @include respond(desktop) {

    width: 850px;
    bottom: -200px;
    right: -5px;

    transform: scaleX(-1) scaleY(-1) rotate(-20deg);
  }
}
</style>