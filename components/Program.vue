<template>
  <div :class="$style.programContainer">
    <h2 :class="$style.programTitle">Программа</h2>
    <div :class="$style.programContainerInner">
      <div :class="$style.timeColumn">
        <div v-for="(item, index) in items" :key="'time-'+index" :class="$style.programRow">
          <div :class="$style.programTime">{{ item.time }}</div>
        </div>
      </div>
      <div :class="$style.verticalDivider"></div>
      <div :class="$style.eventColumn">
        <div v-for="(item, index) in items" :key="'event-'+index" :class="$style.programRow">
          <div :class="$style.programEvent">{{ item.event }}</div>
        </div>
      </div>
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
.programContainer {
  margin: 10px 8px 30px 6px;
}

.programTitle {
  font-size: 40px;
  text-align: right;
  margin-right: 10%;
  color: white;
}

.programContainerInner {
  display: grid;
  grid-template-columns: auto 2px 1fr;
  width: 100%;
  color: white;
}

.timeColumn, .eventColumn {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(40px, auto));
  align-items: center;
}

.programRow {
  min-height: 40px;
  display: flex;
  align-items: center;
}

.timeColumn {
  .programRow {
    justify-content: flex-end;
    padding-right: 20px;
  }
}

.eventColumn {
  .programRow {
    padding-left: 20px;
  }
}

.verticalDivider {
  background-color: white;
  margin: 5px 0;
}

.programTime {
  font-size: 24px; /* Увеличили размер шрифта */
  line-height: 1.3;
  text-shadow: 1px 1px 2px black;
  display: flex;
  align-items: center; /* Добавили для вертикального выравнивания */
  height: 100%; /* Занимает всю высоту строки */
}

.programEvent {
  font-size: 20px;
  line-height: 1.3;
  text-shadow: 1px 1px 2px black;
  display: flex;
  align-items: center; /* Добавили для вертикального выравнивания */
  height: 100%; /* Занимает всю высоту строки */
}
</style>