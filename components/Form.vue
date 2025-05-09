<template>
  <h2>Анкета</h2>
  <h3>Пожалуйста, подтвердите свое присутствие:</h3>
  <form @submit.prevent="submitRSVP">
    <!-- Основной гость -->
    <input v-model="form.mainGuest" placeholder="Ваше ФИО" required>

    <!-- Присутствие -->
    <select v-model="form.attendance" required>
      <option value="Да">Да, буду</option>
      <option value="Нет">К сожалению, не смогу</option>
    </select>

    <!-- Блок для гостей (показывается только если attendance === 'Да') -->
    <div v-if="form.attendance === 'Да'">
      <h3>Горячее, для каждого гостя одно на выбор:</h3>
      <div v-for="(guest, index) in form.guests" :key="index">
        <input v-model="guest.name" :placeholder="'Гость #' + (index + 1)" required>
        <select v-model="guest.dish" required>
          <option value="Стейк">Стейк "Скерт"</option>
          <option value="Форель">Форель</option>
        </select>
        <button @click="removeGuest(index)" type="button">×</button>
      </div>
      <button @click="addGuest" type="button">+ Добавить гостя</button>
    </div>

    <button type="submit">Отправить</button>
  </form>
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
  form.guests.splice(index, 1)
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