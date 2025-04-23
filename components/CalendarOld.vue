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
      
      <NuxtImg 
        :class="$style.drawing" 
        src="lineDrawing.png" 
        alt="Декоративный элемент"
        loading="lazy"
        :style="drawingStyle"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    // Начальные значения, соответствующие CSS-стилям
    const initialX = -15; // right: -15%
    const initialY = 0;   // bottom: 0
    const initialRotation = 0; // начальный угол
    
    const drawingStyle = ref({
      transform: `translateX(0) translateY(${initialY}px) rotate(${initialRotation}deg) scaleX(-1)`,
      right: `${initialX}%`,
      bottom: `${initialY}px`,
      opacity: 0.9
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const moveX = -scrollPosition * 0.2; // Движение влево
      const moveY = -scrollPosition * 0.1; // Движение вверх
      const rotation = scrollPosition * 0.1; // Плавное вращение
      
      drawingStyle.value = {
        transform: `translateX(${moveX}px) translateY(${moveY}px) rotate(${rotation}deg) scaleX(-1)`,
        right: `${initialX}%`, // Сохраняем начальное положение right
        bottom: `${initialY}px`, // Сохраняем начальное положение bottom
      };
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Инициализация позиции
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      drawingStyle
    };
  }
};
</script>

<style module lang="scss">
.calendarWrapper {
  position: relative;
  padding: 20px 0;
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

.drawing {
  position: absolute;
  bottom: 0;
  right: -15%;
  width: 60%;
  transform: scaleX(-1);
  will-change: transform;
  transition: transform 0.1s linear;
  z-index: 10;
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2));
}
</style>