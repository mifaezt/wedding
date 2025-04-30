<template>



    <div :class="$style.weMain" ref="weMain">
      <h1 :class="$style.mainTitle">Wedding day</h1>
      <div :class="$style.imgContainer">
        <NuxtImg :class="$style.weImg" src="We.jpg" />
      </div>
      <NuxtImg 
        :class="$style.imgMainPlants" 
        src="eucalyptusOrig.png" 
        :style="mainPlantsStyle"
      />
      <NuxtImg 
        :class="$style.imgMainPlantsRight" 
        src="eucalyptusOrig.png" 
        :style="mainPlantsRightStyle"
      />
      <div :class="$style.mainInfoTitle">
        <h2 :class="$style.names">Игорь и Анастасия</h2>
        <h2 :class="$style.date">25 / 07 / 2025</h2>
       
      </div>
      <NuxtImg 
          :class="$style.imgSecondPlants" 
          src="eucalyptusSecond.png" 
          :style="secondPlantsStyle"
        />
        <NuxtImg 
          :class="$style.imgSecondPlantsRight" 
          src="eucalyptusSecond.png" 
          :style="secondPlantsRightStyle"
        />
  
      <p :class="$style.letter">
        Дорогие родные и друзья <br>
        Приглашаем вас на нашу свадьбу! <br>
        Мы хотим разделить этот важный день нашей жизни с вами -<br> самыми близкими и родными людьми. 
      </p>
      <NuxtImg :class="$style.ornamentCenter" src="infitity.svg" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    setup() {
      const weMain = ref(null);
      const scrollY = ref(0);
      
      const mainPlantsStyle = ref({ transform: 'translateY(0px) rotate(0deg)' });
      const mainPlantsRightStyle = ref({ transform: 'scaleX(-1) translateY(0px) rotate(0deg)' });
      const secondPlantsStyle = ref({ transform: 'translateY(0px) rotate(0deg)' });
      const secondPlantsRightStyle = ref({ transform: 'scaleX(-1) translateY(0px) rotate(0deg)' });
  
      const handleScroll = () => {
        scrollY.value = window.scrollY;
        
        // Параллакс эффект для ветвей
        mainPlantsStyle.value = {
          transform: `translateY(${scrollY.value * 0.2}px) rotate(${scrollY.value * 0.01}deg)`
        };
        
        mainPlantsRightStyle.value = {
          transform: `scaleX(-1) translateY(${scrollY.value * 0.2}px) rotate(${-scrollY.value * -0.01}deg)`
        };
        
        secondPlantsStyle.value = {
          transform: `translateY(${scrollY.value * 0.1}px) rotate(${scrollY.value * 0.01}deg)`
        };
        
        secondPlantsRightStyle.value = {
          transform: `scaleX(-1) translateY(${scrollY.value * 0.1}px) rotate(${-scrollY.value * -0.01}deg)`
        };
      };
  
      onMounted(() => {
        if (window.innerWidth < 1200) {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Инициализация начального положения
      }
      });
  
      onUnmounted(() => {

        window.removeEventListener('scroll', handleScroll);
 
      });

 
  
      return {
        weMain,
        mainPlantsStyle,
        mainPlantsRightStyle,
        secondPlantsStyle,
        secondPlantsRightStyle
      };
    }
  };
  </script>
  
  <style module lang="scss">
  .weMain {
    @include center;
    // position: relative;
    padding: 0px 10px;

    
    @include respond(tablet) {
      padding: 40px 0;
    }

  }
  
  .imgContainer {
    margin: 0px 20px;
    z-index: 2;
    max-width: 1200px;
    
    @include respond(mobile) {
      margin: 0px 30px;
    }
    
    @include respond(tablet) {
      margin: 0px 40px;
    }
  }
  
  .weImg {
    border: 2px solid $text-color;
    max-width: 100%;
    height: auto;
    margin-top: 37%;
  }
  
  .mainTitle {
    @include center;
    font-size: 40px;
    position: absolute;
    top: 8%;
    z-index: 4;
    text-shadow: 1px 1px 10px black;
    // margin-bottom: 10px;
    
    @include respond(mobile) {
      font-size: 60px;
    }
    
    @include respond(tablet) {
      font-size: 40px;
    }

    @include respond(desktop) {
      font-size: 150px;
    }
    
  }
  
  .names {
    // margin-top: 20px;
    font-size: 40px;
    line-height: 1.4em;
    text-align: center;

    
    @include respond(mobile) {
      font-size: 40px;
    }
    
    @include respond(tablet) {
      font-size: 35px;
    }

    @include respond(desktop) {
      font-size: 130px;
    }
  }
  
  .date {
    font-family: $font-main;
    font-weight: 200;
    font-size: 30px;
    text-align: center;
    // margin-bottom: 20px;
    
    @include respond(tablet) {
      font-size: 20px;
    }

    @include respond(desktop) {
      font-size: 80px;
    }
  }
  
  .letter {
    padding: 10px 20px;
    text-align: center;
    font-size: 20px;
    text-shadow: 1px 1px 2px black;
    background-color: $container-color;
    border-radius: 16px;
    max-width: 1200px;

    
    @include respond(mobile) {
      padding: 10px 10px;
      font-size: 20px;
    }
    
    @include respond(tablet) {
      font-size: 18px;
    }

    @include respond(desktop) {
      font-size: 60px;
    }
  }
  
  .mainInfoTitle {
    position: relative;
    margin: 20px 0;
  }
  
  .ornamentCenter {
    width: 40%;
    margin: 20px auto;
    display: block;
    
    @include respond(mobile) {
      width: 40%;
    }
    
    @include respond(tablet) {
      width: 25%;
    }

    @include respond(desktop) {
      width: 30%;
    }
  }
  
  .imgMainPlants {
    position: absolute;
    width: 40%;
    left: 0;
    top: 0;
    z-index: 3;
    @include transition-all(0.1s);
    
    @include respond(mobile) {
      width: 35%;
      left: 0;
    }
    
    @include respond(tablet) {
      width: 30%;
      left: 0%;
    }
  }
  
  .imgMainPlantsRight {
    position: absolute;
    width: 40%;
    right: 0;
    top: 0;
    z-index: 3;
    @include transition-all(0.1s);
    
    @include respond(mobile) {
      width: 35%;
      right: 0;
    }
    
    @include respond(tablet) {
      width: 30%;
      right: -2%;
    }
  }
  
  .imgSecondPlants {
    position: absolute;
    width: 30%;
    left: -10%;
    top: 58%;
    z-index: -1;
    transform: scaleY(-1);
    @include transition-all(0.1s);
    
    @include respond(mobile) {
      width: 25%;
      left: -5%;
    }
    
    @include respond(tablet) {
      width: 20%;
      left: -5%;
    }
  }
  
  .imgSecondPlantsRight {
    position: absolute;
    width: 30%;
    right: -10%;
    top: 58%;
    z-index: -1;
    @include transition-all(0.1s);
    
    @include respond(mobile) {
      width: 25%;
      right: -5%;
    }
    
    @include respond(tablet) {
      width: 20%;
      right: -5%;
    }
  }
  </style>