<template>
  <button
    class="button"
    :class="{ disabled: this.disabled }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span class="text" v-html="buttonText" />
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    imgLink: {
      type: String,
      default: require('@/assets/img/basket.svg')
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    buttonText: {
      type: String,
      default: 'Добавить товар'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 1rem;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding: 1rem;
  color: $white;
  background: $light_green;
  transition: 0.25s;

  &.disabled {
    background: $gray;
    color: $grayB4;
  }
}
</style>
