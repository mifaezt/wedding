<template>
  <div :class="$style.dressContainer">
    <div :class="$style.dressP">
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
const initialDressRotation = -20; // градусов
const drawingDressStyle = ref({ 
  transform: `scaleX(-1) scaleY(-1) rotate(${initialDressRotation}deg)` 
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
  const rotationFactor = scrollY.value * 0.03; // Коэффициент скорости вращения
  
  
  // Dress - вращение по часовой (угол уменьшается)
  drawingDressStyle.value = {
    transform: `scaleX(-1) scaleY(-1) rotate(${initialDressRotation + rotationFactor}deg)`
  };
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Инициализация начального положения
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style module lang="scss">
.dressContainer {
  margin: 10px 8px 30px 20px;
  position: relative;
}

.dressTitle {
  font-size: 40px;
  text-align: left;
  margin-right: 10%;
  color: white;

}

.dressP {
  width: 80%;
}

.dressMessage {
  font-size: 20px;
  line-height: 1.3;
  text-shadow: 1px 1px 2px black;
}

.drawingDress {
  position: absolute;
    width: 350px;
    top: 50px;
    right: -50px;
    transform: scaleX(-1) scaleY(-1) rotate(-20deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;

}
</style>