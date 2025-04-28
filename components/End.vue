<template>
  <div ref="container" :class="$style.container">
    <NuxtImg 
      :class="$style.flowerTop" 
      src="/lineDrawing2.svg" 
      alt="Декоративный элемент"
      loading="lazy"
      :style="flowerTopStyle"
    />
    
    <div :class="$style.textBlock">
      <p>С нетерпением ждём встречи с вами 25 июля!</p>
      <p>С любовью, Игорь и Анастасия.</p>
    </div>
    
    <NuxtImg 
      :class="$style.flowerBottom" 
      src="/lineDrawing2.svg" 
      alt="Декоративный элемент"
      loading="lazy"
      :style="flowerBottomStyle"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
const flowerTopStyle = ref({
  transform: 'translateX(100%) rotate(90deg) scaleY(-1) scaleX(1) ',
  // opacity: 0
})
const flowerBottomStyle = ref({
  transform: 'translateX(-100%) rotate(-90deg) scaleX(-1)',
  // opacity: 0
})

const handleScroll = () => {
  if (!container.value) return
  
  const rect = container.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const elementVisible = rect.top < viewportHeight && rect.bottom > 0
  
  if (elementVisible) {
    const visibilityRatio = 1 - (rect.top / viewportHeight)
    
    // Верхняя ветвь - из-за правого края
    flowerTopStyle.value = {
      transform: `translateX(${-100 + visibilityRatio * 100}%) rotate(90deg) scaleY(1) scaleX(1)`,
      // opacity: visibilityRatio
    }
    
    // Нижняя ветвь - из-за левого края
    flowerBottomStyle.value = {
      transform: `translateX(${100 - visibilityRatio * 100}%) rotate(-90deg) scaleY(1) scaleX(1)`,
      // opacity: visibilityRatio
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Проверяем сразу при загрузке
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style module lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  margin: 100px 0;

}

.textBlock {
  text-align: center;
  background-color: $container-color;
  border-radius: 20px;
  padding: 20px;
  margin: 0 10px;
  z-index: 1;
  
  p {
    font-size: 20px;
    line-height: 1.3;
    text-shadow: 1px 1px 2px black;
    
    &:first-child {
      margin-bottom: 10px;
    }
  }
}

.flowerTop,
.flowerBottom {
  position: absolute;
  width: 70%;
  z-index: 2;
  transition: transform 0.5s ease-out;
  will-change: transform;
}

.flowerTop {
  top: 70px;
  right: 0px;
  // transform-origin: right center;
}

.flowerBottom {
  bottom: 70px;
  left: 0px;
  // transform-origin: left center;
}
</style>