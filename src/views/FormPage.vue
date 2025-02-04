<template>
  <div :class="$style.PageWrapper">
    <form :class="$style.form">
      <div :class="$style.formContainer">
        <FormSelect/>
      </div>
    </form>
  </div>
</template>

<script>
// Components
import FormSelect from '@/components/FormPage/components/FormSelect.vue'

export default {
  name: 'FormPage',

  components: { FormSelect }
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

.form {
  //
}

.formContainer {
  //
}
</style>
