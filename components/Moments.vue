<template>
  <div :class="$style.momentsContainer">
    <h2 :class="$style.momentsTitle">Важные моменты</h2>
    <div :class="$style.momentsMomentLeft">
      <h2 :class="$style.momentNum">01</h2>
      <p :class="$style.momentMessage">Дорогие гости, для вас мы организуем единый трансфер до места события, просьба быть пунктуальными! Время и место сбора гостей сообщим вам ближе к дате торжества.
      </p>
    </div>
    <div :class="$style.momentsMomentRight">
      <h2 :class="$style.momentNum">02</h2>
      <p :class="$style.momentMessage">Мы будем рады вашим поздравлениям и теплым словам вместо традиционных букетов.
      </p>
      <NuxtImg 
          :class="$style.drawingLeft" 
          src="lineDrawing.png" 
          alt="Декоративный элемент"
          loading="lazy"
        />
    </div>
    <div :class="$style.momentsMomentLeft">
      <h2 :class="$style.momentNum">03</h2>
      <p :class="$style.momentMessage">Мы будем рады любому подарку, не важно, в какой конверт вы его положите
      </p>
      <NuxtImg 
          :class="$style.drawingRight" 
          src="lineDrawing.png" 
          alt="Декоративный элемент"
          loading="lazy"
        />
    </div>
    <div :class="$style.momentsMomentRight">
      <h2 :class="$style.momentNum">04</h2>
      <p :class="$style.momentMessage">Что то тут бы написать наверное
      </p>
      <NuxtImg 
          :class="$style.drawingLeftSecond" 
          src="lineDrawing.png" 
          alt="Декоративный элемент"
          loading="lazy"
        />
    </div>
  </div>
</template>

<script setup>
// import { ref, onMounted, onUnmounted } from 'vue';

// const scrollY = ref(0);
// const initialDressRotation = 0; // градусов
// const drawingDressStyle = ref({ 
//   transform: `scaleX(-1) scaleY(1) rotate(${initialDressRotation}deg)` 
// });

// const handleScroll = () => {
//   scrollY.value = window.scrollY;
//   const rotationFactor = scrollY.value * 0.03; // Коэффициент скорости вращения
  
  
//   // Dress - вращение по часовой (угол уменьшается)
//   drawingDressStyle.value = {
//     transform: `scaleX(-1) scaleY(1) rotate(${initialDressRotation + rotationFactor}deg)`
//   };
// };

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
//   handleScroll(); // Инициализация начального положения
// });

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll);
// });
</script>

<style module lang="scss">
.momentsContainer {
  margin: 100px 8px 30px 6px;
  padding: 0px 20px;
  position: relative;

}

.momentsTitle {
  font-size: 40px;
  text-align: center;
  line-height: 110%;
  color: white;

}

.momentNum {
  font-size: 60px;
  line-height: 130%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.445);
}

.momentMessage{
  padding-top: 10px;
  font-size: 20px;
  line-height: 1.3;
  text-shadow: 1px 1px 2px black;
  line-height: 120%;
}


.momentsMomentLeft {
  display: flex;
  flex-direction: column;
  text-align: start;
  position: relative;
  margin-bottom: 20px;

}

.momentsMomentRight {
  display: flex;
  flex-direction: column;
  text-align: end;
  position: relative;
  margin-bottom: 20px;

}


.drawingRight {
    position: absolute;
    width: 200px;
    top: -20px;
    right: -60px;
    transform: scaleX(-1) scaleY(-1) rotate(50deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;
}

.drawingLeft {
    position: absolute;
    width: 170px;
    top: 0;
    left: -70px;
    transform: scaleY(-1) rotate(50deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;
}

.drawingLeftSecond {
    position: absolute;
    width: 250px;
    top: -50px;
    left: -30px;
    transform: scaleY(-1) rotate(60deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;
}

</style>