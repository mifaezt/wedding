<template>
  <div :class="$style.contactContainer">
    <div :class="$style.textContainer">
      <p :class="$style.contactMessageFirst">С нетерпением ждём встречи с вами 25 июля! </p>
      <p :class="$style.contactMessageSecond">С любовью, Игорь и Анастасия. </p>
    </div>
    <NuxtImg 
      :class="$style.flowers" 
      src="flowers.svg" 
      alt="Декоративный элемент"
      loading="lazy"
    />
  </div>
</template>

<script setup>
</script>

<style module lang="scss">
.contactContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px; /* или нужная вам высота */
}

.textContainer {
  position: relative;
  z-index: 1; /* чтобы текст был поверх цветов */
  text-align: center;
  margin-bottom: 20px; /* можно регулировать отступ */
  transform: translateY(0); /* можно двигать по вертикали */
  /* или использовать margin/padding для позиционирования */
}

.contactMessageFirst {
  font-size: 20px;
  line-height: 1.3;
  text-shadow: 1px 1px 2px black;
  margin-bottom: 10px; /* отступ между строками */
}

.contactMessageSecond {
  font-size: 20px;
  line-height: 1.3;
  text-shadow: 1px 1px 2px black;
}

.flowers {
  position: absolute;
  transform: scale(1.2);
  // top: 50%;
  // left: 50%;
  top: 10%;
  // transform:  scale(1.2);
  z-index: 0; /* цветы под текстом */
  // opacity: 0.7; /* можно регулировать прозрачность */
}
</style>