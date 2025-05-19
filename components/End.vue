<template>
  <div ref="container" :class="$style.container">
    <NuxtImg
      :class="$style.flowerTop"
      src="/images/lineDrawingEnd.svg"
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
      src="/images/infitity.svg"
      alt="Декоративный элемент"
      loading="lazy"
      :style="flowerBottomStyle"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const container = ref(null)
const flowerTopStyle = ref({ transform: 'translateX(-100%) rotate(90deg)' })
const flowerBottomStyle = ref({ transform: 'translateX(100%) rotate(-90deg)' })

let animationFrameId = null

const updateStyles = () => {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const elementVisible = rect.top < viewportHeight && rect.bottom > 0

  if (elementVisible) {
    const visibilityRatio = Math.min(1, Math.max(0, (viewportHeight - rect.top) / viewportHeight))

    flowerTopStyle.value = {
      transform: `translateX(${-100 + visibilityRatio * 100}%) rotate(90deg)`
    }

    flowerBottomStyle.value = {
      transform: `translateX(${100 - visibilityRatio * 100}%) rotate(-90deg)`
    }
  }
}

const handleScroll = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  animationFrameId = requestAnimationFrame(updateStyles)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateStyles)
  updateStyles()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateStyles)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style module lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  margin: 0px 0;
  width: 100%;
  overflow: hidden; // Добавлено для предотвращения появления полосы прокрутки


	@include respond(mobileS) {
    min-height: 240px;
  }

	@include respond(mobileM) {
    min-height: 415px;
  }

	@include respond(tablet) {
    min-height: 525px;
  }

	@include respond(desktop) {
    height: 800px;
  }

}

.textBlock {
  text-align: center;
  background-color: $container-color;
  border-radius: 20px;
  padding: 20px;
  margin: 0 10px;
  z-index: 1;
  max-width: 90%;
  
  p {
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
  width: 42%;
  max-width: 200px;
  z-index: 2;
  transition: transform 0.3s ease-out;
  will-change: transform;
  pointer-events: none;
}

.flowerTop {
  top: 35%;
  right: 35%;

	@include respond(mobileM) {
    right: 45%;
  }

	@include respond(desktop) {
    bottom: -35%;
    right: 65%;
    max-width: 350px;
  }
}

.flowerBottom {
  bottom: 35%;
  left: 35%;
  

	@include respond(mobileM) {
    left: 45%;
  }

	@include respond(desktop) {
    top: -35%;
    left: 65%;
    max-width: 350px;
  }

}

@include respond(mobile) {
  .flowerTop,
  .flowerBottom {
    width: 35%;
  }

  .textBlock {
    padding: 15px;
  }
}
</style>