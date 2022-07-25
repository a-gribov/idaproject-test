<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    class="input"
    :rules="rules"
    :name="name"
    :mode="validationMode"
    slim
  >
    <div class="input__container">
      <label class="input__label" for="name">
        {{ label }}
      </label>
      <div v-if="isRequired" class="input__required" />
    </div>
    <input
      id="name"
      ref="input"
      :step="step"
      :type="name === 'price' ? 'number' : ''"
      class="input__field"
      :placeholder="placeholder"
      :value="value"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @input="input"
      @keyup.enter="enter"
      @keypress.enter="onEnterPress"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
    <div v-if="!isHideError" class="input__err">
      {{ errorMessage(errors[0]) }}
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: {
      type: String,
      default: ''
    },
    autoFocus: {
      type: Boolean,
      default: () => false
    },
    step: {
      type: String,
      default: 'any'
    },
    onEnterPress: {
      type: Function,
      default: () => { }
    },
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: 'on'
    },
    isHideError: {
      type: Boolean,
      default: false
    },
    rules: {
      type: [String, Array, Object],
      description: 'Vee validate validation rules',
      default: ''
    },
    validationMode: {
      type: String,
      default: 'aggressive'
    },
    isRequired: {
      type: [Boolean, String],
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.focus()
  },
  methods: {
    errorMessage (e) {
      if (e === 'min') {
        return 'Введенное значение меньше допустимого'
      } else if (e === 'required') {
        return 'Поле является обязательным'
      } else if (e === 'max') {
        return 'Введенное значение больше допустимого'
      } else if (e === 'alpha_num') {
        return 'Нечисловое значение'
      }
    },
    focus () {
      if (this.autoFocus) { this.$refs.input.focus() }
    },
    enter ($event) {
      this.$emit('enter', $event.target.value)
    },
    input ($event) {
      this.$emit('input', $event.target.value)
      if (this.selector) {
        this.$emit('selector', $event.target.value)
      }
    },
    clear () {
      this.$emit('input', '')
      this.$emit('clear', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;

  &__err {
    margin-top: 0.5rem;
    font-family: Source Sans Pro, sans-serif;
    font-size: 1.2rem;
    color: $coral;
  }

  &__container {
    display: flex;
    flex-direction: row;
  }

  &__required {
    background: $coral;
    border-radius: 0.4rem;
    width: 0.4rem;
    height: 0.4rem;
  }

  &__label {
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.4rem;
  }

  &__field {
    padding: 1rem 1rem;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    background-color: $white;
    color: $grayB4;
    border: 0.1rem solid transparent;
    transition: 0.25s;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button {
      display: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &_red {
      border-color: $coral;
    }

    &:focus {
      border-color: $blue;
    }

    &:hover {
      border-color: $green;
    }

    &:active {
      border-color: $violet;
    }
  }
}
</style>
