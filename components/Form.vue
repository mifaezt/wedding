<template>
  <div :class="$style.formContainer">
    <h2 :class="$style.titleForm">Анкета</h2>
    <h4 :class="$style.titleConfirmed">Пожалуйста, <b>подтвердите</b> свое присутствие:</h4>
    <form @submit.prevent="submitRSVP">
      <!-- Основной гость -->
      <input :class="$style.mainInput" v-model="form.mainGuest" placeholder="Ваши ФИО" required>

      <!-- Присутствие -->
      <select :class="$style.select" v-model="form.attendance" required>
        <option value="Да">Да, буду</option>
        <option value="Нет">К сожалению, не смогу</option>
      </select>

      <!-- Блок для гостей (показывается только если attendance === 'Да') -->
      <div v-if="form.attendance === 'Да'">
        <h4 :class="$style.titleConfirmed">Горячее, для каждого гостя одно на выбор:</h4>
        <div v-for="(guest, index) in form.guests" :key="index" :class="$style.guestItem">
          <div :class="$style.guestContainer">
            <input :class="$style.guestInput" v-model="guest.name" :placeholder="'Имя гостя #' + (index + 1)" required>
            <select :class="$style.select" v-model="guest.dish" required>
              <option value="Стейк">Стейк "Скерт"</option>
              <option value="Форель">Форель</option>
            </select>
            <button :class="$style.removeButton" @click="removeGuest(index)" type="button" v-if="form.guests.length > 1">✕</button>
          </div>
        </div>
        <button :class="$style.addButton" @click="addGuest" type="button">+ Добавить гостя</button>
      </div>
      <div :class="$style.buttonContainer">
        <button :class="$style.button" type="submit">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const form = reactive({
  mainGuest: '',
  attendance: 'Да',
  guests: [{ name: '', dish: 'Стейк' }] // Начальный гость
})

const addGuest = () => {
  form.guests.push({ name: '', dish: 'Стейк' })
}

const removeGuest = (index) => {
  if (form.guests.length > 1) {
    form.guests.splice(index, 1)
  }
}

const submitRSVP = async () => {
  try {
    const dataToSend = {
      main_guest: form.mainGuest,
      attendance: form.attendance,
      guests: form.attendance === 'Да' ? form.guests : [],
      total_guests: form.attendance === 'Да' ? form.guests.length + 1 : 0
    }

    await $fetch('/api/save-rsvp', {
      method: 'POST',
      body: dataToSend
    })

    alert('Спасибо за ответ!')
    resetForm()
  } catch (error) {
    alert('Ошибка: ' + error.data?.message || 'Не удалось отправить')
  }
}

const resetForm = () => {
  form.mainGuest = ''
  form.attendance = 'Да'
  form.guests = [{ name: '', dish: 'Стейк' }]
}
</script>

<style module lang="scss">
.formContainer {
  margin: 10px 10px;
  padding: 20px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.531);
  border-radius: 8px;
  max-width: 100%;
  box-sizing: border-box;
  background-color: $container-color;
  
  @include respond(tablet) {
    padding: 30px;
    margin: 10px auto;
    max-width: 80%;
  }
  
  @include respond(desktop) {
    margin-top: 2%;
    max-width: 60%;
    padding: 40px;
  }
}

.titleForm {
  text-align: center;
  margin-bottom: 20px;
  font-size: 40px;
  line-height: 30px;
  
  @include respond(tablet) {
    font-size: 50px;
  }
  
  @include respond(desktop) {
    font-size: 60px;
  margin-bottom: 30px;
  }
}

.titleConfirmed {
  font-size: 16px;
  margin: 20px 0 16px;
  
  @include respond(tablet) {
    font-size: 18px;
  }
  
  @include respond(desktop) {
    font-size: 20px;
  }
}

.mainInput,
.guestInput {
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 12px;
  width: 100%;
  background-color: #ffffff64;
  color: #00301c;
  font-size: 14px;
  margin-bottom: 16px;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.296);
  }
  
  @include respond(tablet) {
    padding: 12px 15px;
    font-size: 16px;
  }
}

.select {
  padding: 10px 12px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #ffffff64;
  color: #00301c;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 16px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 15px;
  
  @include respond(tablet) {
    padding: 12px 15px;
    font-size: 16px;
  }
  
  &:focus {
    outline: none;
    border-color: #00301c;
  }
}

.guestContainer {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;
  
  @include respond(mobile) {
    gap: 12px;
  }
  
  @include respond(tablet) {
    gap: 15px;
  }
}

.guestInput {
  // flex: 1;
  min-width: 0;
}

.removeButton {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  padding-bottom: 10px;
  line-height: 1;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.2);
  }
}

.addButton {
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @include respond(tablet) {
    padding: 10px 15px;
    font-size: 16px;
  }
}

.buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  padding: 12px 20px;
  border-radius: 15px;
  border: 2px solid white;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  @include respond(tablet) {
    font-size: 18px;
    padding: 14px 25px;
  }
  
  @include respond(desktop) {
    font-size: 20px;
    padding: 16px 30px;
    max-width: 350px;
  }
}
</style>