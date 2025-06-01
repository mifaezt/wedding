<template>
  <div :class="$style.programContainer">
    <h2 :class="$style.programTitle">Программа</h2>
    <div :class="$style.programContainerInner">
      <div :class="$style.timeColumn">
        <div v-for="(item, index) in items" :key="'time-'+index" :class="$style.programRow">
          <div :class="$style.programTime"><p>{{ item.time }}</p></div>
        </div>
      </div>
      <div :class="$style.verticalDivider"></div>
      <div :class="$style.eventColumn">
        <div v-for="(item, index) in items" :key="'event-'+index" :class="$style.programRow">
          <div :class="$style.programEvent"><p>{{ item.event }}</p></div>
        </div>
      </div>
    </div>
  </div>
     <p :class="$style.ps">Дорогие гости, могут быть небольшие корректировки в таймингах, самая актуальная информация будет в чате свадьбы, как и все подробности</p>
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
  margin: 10px 8px 30px 20px;

  @include respond(mobileM) {
    margin: 0px 8px 30px 20px;
  }
}

.programTitle {
  text-align: right;
  margin-right: 10%;

}

.programContainerInner {
  display: grid;
  grid-template-columns: auto 2px 1fr;

}

.timeColumn, .eventColumn {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(50px, auto));
  align-items: center;

  @include respond(mobileM) {
    gap: 10px;
  }

  @include respond(desktop) {
    // grid-template-rows: repeat(auto-fill, minmax(120px, auto)); // Больше места для строк
    gap: 20px; // промежутки между строками
  }
}

.programRow {
  min-height: 40px;
  display: flex;
  align-items: center;

  @include respond(desktop) {
    // min-height: 120px; 
    // padding-top: 20px; 
    // padding-bottom: 20px;
  }
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

  @include respond(mobileM) {
    height: 110%;
  }

  @include respond(desktop) {
    margin: 0; 
    height: 100%;
  }
}

.programTime {
  line-height: 1.3;
  display: flex;
  align-items: center;
  height: 100%;

}

.programEvent {
  line-height: 1.3;
  display: flex;
  align-items: center; 
  height: 100%; 

}

.ps {
  max-width: 600px;
  text-align: center;
  font-size: 15px;

	@include respond(desktop) {
      font-size: 20px;
	}
}
</style>