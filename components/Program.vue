
<template>

    <h2 class="programTitle">Программа</h2>
    <div class="program__items">
      <div v-for="(item, index) in items" :key="index" class="program__item">
        
        <div class="program__time">{{ item.time }}</div>
        <div class="program__event">{{ item.event }}</div>
      
      </div>
    </div>

</template>

<script setup>
const items = [
  { time: '14:30', event: 'Трансфер до места свадьбы' },
  { time: '16:00', event: 'Выездная регистрация' },
  { time: '17:00', event: 'Праздничный банкет' },
  { time: '21:00', event: 'Финал банкетной программы' },
  { time: '22:00', event: 'Трансфер до города' }
]
</script>

<style module lang="scss">


.programTitle {
  text-align: end;
  margin-bottom: 30px;

}

.program__items {
  display: flex;

  gap: 20px;
}

.program__item {
  display: flex;
  align-items: center;
  position: relative; /* Для позиционирования псевдоэлемента */
  padding-left: 70px; /* Отступ для времени */
}

.program__time {
  font-weight: bold;
  font-size: 18px;
  width: 60px;
  color: #555;
  position: absolute;
  left: 0;
}

.program__event {
  font-size: 16px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ccc;
  position: relative;
  padding-left: 20px; /* Отступ от линии */
  flex-grow: 1;
}

/* Вертикальная разделительная линия */
.program__event::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #ccc;
}

@media (max-width: 480px) {
  .program__item {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0;
    gap: 5px;
  }
  
  .program__time {
    position: static;
    margin-bottom: 5px;
  }
  
  .program__event {
    padding-left: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
  
  .program__event::before {
    display: none; /* Скрываем линию на мобильных */
  }
}
</style>