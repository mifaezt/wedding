<template>
  <div :class="$style.contactContainer">
    <div :class="$style.textContainer">
      <p :class="$style.contactMessageFirst">С нетерпением ждём встречи с вами 25 июля! </p>
      <p :class="$style.contactMessageSecond">С любовью, Игорь и Анастасия. </p>
    </div>
    <NuxtImg 
      :class="$style.flowers" 
      src="lineDrawing2.svg" 
      alt="Декоративный элемент"
      loading="lazy"
    />

    <NuxtImg 
      :class="$style.flowersDown" 
      src="lineDrawing2.svg" 
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
  transform: translateY(100px); /* можно двигать по вертикали */
  background-color: $container-color;
  border-radius: 20px;
  margin: 20px 10px;
  padding: 10px;

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
  width: 70%;
  // top: 50%;
  // left: 50%;
  top: -30%;
  transform: scaleY(-1) rotate(90deg);
  z-index: 0; /* цветы под текстом */
  // opacity: 0.7; /* можно регулировать прозрачность */
}

.flowersDown {
  position: absolute;
  transform: scale(1.2);
  width: 70%;
  // top: 50%;
  // left: 50%;
  top: 55%;
  transform: scaleY(1) scaleX(-1) rotate(90deg);
  z-index: 0; /* цветы под текстом */
  // opacity: 0.7; /* можно регулировать прозрачность */
}
</style>