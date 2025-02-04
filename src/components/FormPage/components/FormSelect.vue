<template>
  <div
    v-if="options"
    :class="$style.SelectWrapper"
  >
    <label
      v-if="label"
      :class="$style.label"
    >
      {{ label }}
    </label>

    <select
      :class="$style.formSelect"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FormSelect',

  props: {
    options: {
      type: [Array, Object],
      default: () => []
    },

    modelValue: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
.SelectWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.label {
  margin-bottom: .2rem;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
