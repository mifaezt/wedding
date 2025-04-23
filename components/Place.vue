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
                    <span>В путь</span>
                    <svg :class="$style.arrowIcon" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </NuxtLink>
            </div>
        </div>
        <NuxtImg 
        :class="$style.drawingLeft" 
        src="lineDrawing.png" 
        alt="Декоративный элемент"
        loading="lazy"

      />
      <NuxtImg 
        :class="$style.drawingRight" 
        src="lineDrawing.png" 
        alt="Декоративный элемент"
        loading="lazy"

      />
    </div>
</template>

<script setup>
// Можно добавить логику при необходимости
</script>

<style module lang="scss">
// @use "@/assets/scss/mixins" as *;
// @use "@/assets/scss/variables" as *;

.placeMainContainer {
    @include center;
    margin: 60px 0;
    padding: 0 10px;
    position: relative;
    // z-index: 2;
}

.placeContainer {
    // position: relative;
    width: 100%;
    max-width: 800px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background-color: $secondary-color;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
}

.contentWrapper {
    // position: relative;
    padding: 20px 20px 20px;
    text-align: center;
    color: $text-color;
}

.title {
    font-size: 2.2rem;
    // margin-bottom: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
    // position: relative;
    display: inline-block;
    
    // &::after {
    //     content: '';
    //     position: absolute;
    //     bottom: -10px;
    //     left: 50%;
    //     transform: translateX(-50%);
    //     width: 60px;
    //     height: 2px;
    //     background: rgba(255, 255, 255, 0.5);
    // }
}

.logoWrapper {
    // margin: 20px 0;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
}

.logo {
    height: 60px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.address {
    font-size: 1.1rem;
    margin: 10px 0 10px;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
}

.imageWrapper {
    // position: relative;
    width: 100%;
    height: 250px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 30px;
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
    // position: absolute;
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
    padding: 12px 28px;
    border-radius: 30px;
    background-color: white;
    color: $secondary-color;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        
        &::after {
            transform: translateX(0);
        }
        
        .arrowIcon {
            transform: translateX(3px);
        }
    }
    
    // &::after {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background: linear-gradient(to right, rgba(255, 255, 255, 0.2), transparent);
    //     transform: translateX(-100%);
    //     transition: transform 0.3s ease;
    // }
}

.arrowIcon {
    width: 18px;
    height: 18px;
    margin-left: 8px;
    transition: transform 0.3s ease;
}


.drawingRight {
    position: absolute;
    width: 50%;
    transform: scaleX(-1) scaleY(-1);

}

.drawingLeft {
    position: absolute;
    width: 50%;
    transform: scaleY(-1);
}
</style>