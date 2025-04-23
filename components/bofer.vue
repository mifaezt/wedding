<!-- WE -->
<template> 
    <h1 :class="$style.mainTitle">Wedding day</h1>
        <div :class="$style.weMain">
            
            <div :class="$style.imgContainer">
                <NuxtImg :class="$style.weImg" src="WeCut.jpg" />
            </div>
            <NuxtImg :class="$style.imgMainPlants"src="eucalyptusOrig.png" />
            <NuxtImg :class="$style.imgMainPlantsRight"src="eucalyptusOrig.png" />
            <div :class="$style.mainInfoTitle">
                <h2 :class="$style.names">Игорь и Анастасия</h2>
                <h2 :class="$style.date">25 / 07 / 2025</h2>
                <NuxtImg :class="$style.imgSecondPlants"src="eucalyptusOrig.png" />
                <NuxtImg :class="$style.imgSecondPlantsRight"src="eucalyptusOrig.png" />
            </div>
    
            <p :class="$style.letter">Дорогие родные и друзья <br>
                Приглашаем вас на нашу свадьбу! <br>
                Мы хотим разделить этот важный день нашей жизни с вами - самыми близкими и родными людьми. 
            </p>
            <NuxtImg :class="$style.ornamentCenter" src="divider.svg" />
    
    
    
        </div>
    </template>
    
    <script></script>
    
    <style style module lang="scss">
    
        .weMain {
            @include center;
            position: relative;
        }
    
        .imgContainer {
            margin: 0px 40px;
    
        }
    
        .weImg {
            // border-radius: 20px;
            border: 2px solid $text-color;
        }
    
        .mainTitle {
            @include center;
            font-size: 40px;
    
    
        }
    
        .names {
            margin-top: 20px;
            font-size: 35px;
            line-height: 1.4em;
    
        }
    
        .date {
            font-family: $font-main;
            font-weight: 200;
            font-size: 20px;
            text-align: center;
        }
    
        .letter {
            padding: 10px 30px;
            text-align: center;
        }
    
        .mainInfoTitle {
            // position: relative;
        }
    
        .ornamentCenter {
            width: 25%;
    
        }
    
        .imgMainPlants {
            position: absolute;
            width: 30%;
            left: 0%;
            top: -5%;
        }
    
    
    
        .imgMainPlantsRight {
            position: absolute;
            width: 30%;
            right: -2%;
            top: -5%;
            transform: scaleX(-1);
        }
    
        .imgSecondPlants{
            position: absolute;
            width: 20%;
            left: -5%;
            top: 65%;
        }
    
        .imgSecondPlantsRight {
            position: absolute;
            width: 20%;
            right: -2%;
            top: 65%;
            transform: scaleX(-1);
        }
    
    
    </style>