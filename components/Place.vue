<template>
    <div :class="$style.placeMainContainer">
        <div :class="$style.placeContainer">
            <div :class="$style.contentWrapper">
                <h2 :class="$style.title">Место торжества</h2>
                <div :class="$style.logoWrapper">
                    <NuxtImg 
                        :class="$style.logo" 
                        src="karjalaLogoWhite.png" 
                        alt="Логотип Karjala Park"
                        loading="lazy"
                    />
                </div>
                <p :class="$style.address">п. Матросы, местность Сойважпорог, д. 3</p>
                <div :class="$style.imageWrapper">
                    <NuxtImg 
                        :class="$style.karjala" 
                        src="KarjalaPark.jpg" 
                        alt="Фото Karjala Park"
                        loading="lazy"
                    />
                    <div :class="$style.imageOverlay"></div>
                </div>
                <NuxtLink 
                    :class="$style.button" 
                    to="https://yandex.ru/maps/-/CHfaqTZF"
                    aria-label="Перейти к карте"
                >
                    <span>На карте</span>
                    <!-- <svg :class="$style.arrowIcon" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> -->
                </NuxtLink>
            </div>
            <NuxtImg 
          :class="$style.drawingLeft" 
          src="lineDrawing.png" 
          alt="Декоративный элемент"
          loading="lazy"
          :style="drawingLeftStyle"
        />
        <NuxtImg 
          :class="$style.drawingRight" 
          src="lineDrawing.png" 
          alt="Декоративный элемент"
          loading="lazy"
          :style="drawingRightStyle"
        />
        </div>
        

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);

// Начальные значения из CSS
const initialLeftRotation = 30; // градусов
const initialRightRotation = 30; // градусов

const drawingLeftStyle = ref({ 
  transform: `scaleY(-1) rotate(${initialLeftRotation}deg)` 
});

const drawingRightStyle = ref({ 
  transform: `scaleX(-1) scaleY(-1) rotate(${initialRightRotation}deg)` 
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
  const rotationFactor = scrollY.value * 0.02; // Коэффициент скорости вращения
  
  // Left - вращение против часовой (угол увеличивается)
  drawingLeftStyle.value = {
    transform: `scaleY(-1) rotate(${initialLeftRotation + rotationFactor}deg)`
  };
  
  // Right - вращение по часовой (угол уменьшается)
  drawingRightStyle.value = {
    transform: `scaleX(-1) scaleY(-1) rotate(${initialRightRotation + rotationFactor}deg)`
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
.placeMainContainer {
    @include center;
    margin: 10px 10px 30px 10px;
    padding: 0 10px;
    position: relative;

    @include respond(desktop) {
        max-width: 50%;
    }
    
}

.placeContainer {
    width: 100%;
    max-width: 1200px;
    border-radius: 16px;
    position: relative;
    background-color: $container-color;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
}

.contentWrapper {
    padding: 20px 20px 20px;
    text-align: center;
    color: $text-color;
}

.title {
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;

}


.logoWrapper {
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
}

.logo {
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));

    @include respond(desktop) {
        height: auto;
    }
}

.address {
    font-size: 12px;
    margin: 0px 0px 10px;
    color: rgba(255, 255, 255, 0.9);

    @include respond(tablet) {
        font-size: 20px;
    }
    @include respond(desktop) {
        font-size: 20px;
    }
}

.imageWrapper {
    width: 100%;
    // height: 250px;
    border-radius: 8px;
    // overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.karjala {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    .imageWrapper:hover & {
        transform: scale(1.03);
    }
}

.imageOverlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 20px;
    border: 2px solid white;
    color: $text-color;
    font-size: 20px;
    font-family: Comfortaa;
    font-weight: 300; // Легкий для основного текста
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    // overflow: hidden;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        
        .arrowIcon {
            transform: translateX(3px);
        }
    }

    @include respond(mobileS) {
        font-size: 15px;
        padding:10px 20px ;
        border-radius: 20px;
        border: 2px solid white;
    }

    @include respond(mobile) {
        font-size: 18px;
        padding:10px 20px ;
        border-radius: 15px;
        border: 1px solid white;
    }

    @include respond(tablet) {
        font-size: 25px;
        padding:12px 20px ;
        border-radius: 15px;
        border: 2px solid white;
    }

    @include respond(desktop) {
        font-size: 30px;
        margin: 40px;
        padding:30px 40px ;
        border-radius: 40px;
        border: 4px solid white;
    }
}

// .arrowIcon {
//     width: 18px;
//     height: 18px;
//     margin-left: 8px;
//     transition: transform 0.3s ease;
// }

.drawingRight {
    position: absolute;
    width: 180px;
    top: -15%;
    right: -8%;
    transform: scaleX(-1) scaleY(-1) rotate(35deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;

    @include respond(mobileS) {
        width: 150px;
        top: -15%;
        right: -15%;
    }

    @include respond(tablet) {
        width: 250px;
        top: -10%;
        right: -10%;
    }

    @include respond(desktop) {
        width: 550px;
        top: -20%;
        right: -50%;
    }
}


.drawingLeft {
    position: absolute;
    width: 180px;
    top: -15%;
    left: -8%;
    transform: scaleY(-1) rotate(40deg); /* Начальное положение */
    will-change: transform;
    transition: transform 0.3s ease;

    @include respond(mobileS) {
        width: 150px;
        top: -15%;
        left: -15%;
    }

    @include respond(tablet) {
        width: 250px;
        top: -10%;
        left: -10%;
    }

    @include respond(desktop) {
        width: 550px;
        top: -20%;
        left: -50%;
    }
}
</style>