<template>
  <div :class="$style.PageWrapper">
    <div
      :class="$style.description"
      v-html="TEST_DESCRIPTION"
    >
    </div>

    <form :class="$style.form">
      <div :class="$style.formContainer">
        <FormSelect
          v-model="selectedData.selectedCity"
          :label="CITIES_LABEL"
          :options="citiesArr"
        />

        <FormSelect
          v-model="selectedData.selectedWorkshop"
          :label="WORKSHOPS_LABEL"
          :options="workshops"
        />

        <FormSelect
          v-model="selectedData.selectedEmployee"
          :label="EMPLOYEE_LABEL"
          :options="employee"
        />

        <FormSelect
          v-model="selectedData.selectedBrigade"
          :label="BRIGADE_LABEL"
          :options="brigade"
        />

        <FormSelect
          v-model="selectedData.selectedShift"
          :label="SHIFTS_LABEL"
          :options="shifts"
        />
      </div>

      <div
        :class="$style.formButton"
        @click="setData"
      >
        {{ FORM_BUTTON_TEXT }}
      </div>
    </form>
  </div>
</template>

<script>
// Components
import FormSelect from '@/components/FormPage/components/FormSelect.vue'

// Constants
const SELECT_CITY_TEXT = 'Выберите город'
const FORM_BUTTON_TEXT = 'Сохранить выбранные значения'
const CITIES_LABEL = 'Город'
const WORKSHOPS_LABEL = 'Цех'
const EMPLOYEE_LABEL = 'Сотрудник'
const BRIGADE_LABEL = 'Бригада'
const SHIFTS_LABEL = 'Смена'
const TEST_DESCRIPTION = `
Тестовое задание:
    <p>Создайте форму с использованием Html + JavaScript (Vue 3), на которой разместите поля ввода:
      <ul>
        <li>Город – выпадающий список;</li>
        <li>Цех – выпадающий список;</li>
        <li>Сотрудник – выпадающий список;</li>
        <li>Бригада – выпадающий список;</li>
        <li>Смена – выпадающий список:</li>
      </ul>
      <br>
      Первые три поля зависят друг от друга, т.е. выбрали Город и список Цехов уменьшился.
      Сохраните выбранные значения в Cookie в формате JSON.
    </p>
`

export default {
  name: 'FormPage',

  components: { FormSelect },

  data () {
    return {
      selectedData: {
        selectedCity: '',
        selectedWorkshop: '',
        selectedEmployee: '',
        selectedBrigade: '',
        selectedShift: '',
      },

      citiesArr: ['Moscow', 'Novosibirsk'],
      cityData: {
        Moscow: {
          workshops: ['Цех-1', 'Цех-2', 'Цех-3'],
          employee: ['Работник-1', 'Работник-2', 'Работник-3'],
          brigade: ['Бригада-1', 'Бригада-2', 'Бригада-3'],
          shifts: ['Смена-1', 'Смена-2', 'Смена-3'],
        },
        Novosibirsk: {
          workshops: ['Цех-4'],
          employee: ['Работник-4', 'Работник-5'],
          brigade: ['Бригада-4', 'Бригада-5', 'Бригада-6'],
          shifts: ['Смена-4', 'Смена-5', 'Смена-6'],
        },
      },

      TEST_DESCRIPTION,
      SELECT_CITY_TEXT,
      FORM_BUTTON_TEXT,
      CITIES_LABEL,
      WORKSHOPS_LABEL,
      EMPLOYEE_LABEL,
      BRIGADE_LABEL,
      SHIFTS_LABEL,
    }
  },

  computed: {
    cityDetails () {
      return this.selectedData.selectedCity ? this.cityData[this.selectedData.selectedCity] : {}
    },
    workshops () {
      if (!this.cityDetails) {
        return []
      }
      return this.cityDetails.workshops || []
    },
    employee () {
      if (!this.cityDetails) {
        return []
      }
      return this.cityDetails.employee || []
    },
    brigade () {
      if (!this.cityDetails) {
        return []
      }
      return this.cityDetails.brigade || []
    },
    shifts () {
      if (!this.cityDetails) {
        return []
      }
      return this.cityDetails.shifts || []
    },
  },

  methods: {
    setData (event) {
      event.preventDefault()

      const selectedData = {
        city: this.selectedData.selectedCity,
        workshop: this.selectedData.selectedWorkshop,
        employee: this.selectedData.selectedEmployee,
        brigade: this.selectedData.selectedBrigade,
        shift: this.selectedData.selectedShift,
      }

      document.cookie = `formData=${JSON.stringify(selectedData)}; path=/`

      this.selectedData.selectedCity = []
      this.selectedData.selectedWorkshop = []
      this.selectedData.selectedEmployee = []
      this.selectedData.selectedBrigade = []
      this.selectedData.selectedShift = []

      alert('Данные сохранены')
    },
  },
}
</script>

<style lang="scss" module>
.PageWrapper {
  max-width: 140rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.description {
  font-size: 1rem;
  max-width: 30rem;

  ul {
    margin: 0;
    padding-left: 1rem;
  }
}

.formContainer {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.formButton {
  margin-top: 2rem;
  border: 1px solid black;
  padding: 1rem;
  cursor: pointer;
}

</style>
