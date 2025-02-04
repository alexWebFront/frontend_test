<template>
  <div :class="$style.SelectWrapper">
    <select
      :class="$style.formSelect"
    >
      <option value="" disabled>{{ label }}</option>
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
      type: Array,
      default: () => []
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
  //
}

.formSelect {
  //
}
</style>
