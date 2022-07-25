<template>
  <div class="textarea">
    <label class="textarea__label" for="desc">
      {{ label }}
    </label>
    <textarea
      id="desc"
      ref="input"
      :rows="rows"
      :value="value"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :placeholder="placeholder"
      class="textarea__field"
      @input="input"
      @keyup.enter="enter"
      @keypress.enter="onEnterPress"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    name: {
      type: String,
      default: ''
    },
    autoFocus: {
      type: Boolean,
      default: () => false
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
    rows: {
      type: [Number, String],
      default: 2
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
.textarea {
  display: flex;
  flex-direction: column;

  &__err {
    margin-top: 0.5rem;
    font-family: Source Sans Pro, sans-serif;
    font-size: 1.2rem;
    color: $coral;
  }

  &__label {
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.4rem;
  }

  &__field {
    padding: 1rem 1.6rem;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    background-color: $white;
    color: $grayB4;
    border: 0.1rem solid transparent;
    resize: none;
    transition: 0.25s;

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
