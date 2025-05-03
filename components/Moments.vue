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
</script>

<style module lang="scss">
.momentsContainer {
  margin: 100px 8px 30px 6px;
  padding: 0px 20px;
  position: relative;
  @include respond(desktop) {
    margin-top: 2%;
    max-width: 60%;
    }

}

.momentsTitle {
  text-align: end;
  line-height: 110%;

}

.momentNum {
  line-height: 130%;
}

.momentMessage{
  padding-top: 10px;
  line-height: 1.3;
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
    top: -55px;
    right: -60px;
    transform: scaleX(-1) scaleY(-1) rotate(50deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;

    @include respond(mobileS) {
      width: 150px;
      top: -40px;
      right: -60px;
    }

    @include respond(desktop) {
      width: 370px;
      top: -110px;
      right: -300px;
    }

}

.drawingLeft {
    position: absolute;
    width: 170px;
    top: -30px;
    left: -70px;
    transform: scaleY(-1) rotate(50deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;

    @include respond(mobileS) {
      width: 150px;
      top: -40px;
      left: -60px;
    }

    @include respond(desktop) {
      width: 360px;
      top: -110px;
      left: -130px;
    }
}

.drawingLeftSecond {
    position: absolute;
    width: 200px;
    top: -55px;
    left: -50px;
    transform: scaleY(-1) rotate(60deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;

    @include respond(mobileS) {
      width: 180px;
      top: -50px;
      left: -60px;
    }

    @include respond(desktop) {
       width: 570px;
      top: -100px;
     left: -400px;
  }
}

</style>