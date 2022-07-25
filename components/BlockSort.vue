<template>
  <div>
    <div class="dd dd_min-width">
      <slot name="card" />
      <button
        class="dd__btn"
        :class="{ dd__btn_disabled: this.elementsIsEmpty }"
        :disabled="disabled || elementsIsEmpty"
        @click="isShown = !isShown"
      >
        <span class="icon-more_horizontal" />

        <span class="dd__title">
          {{ dataType === 'array' ? items[value] : items[value].title }}
        </span>
        <span v-if="!items[value] && placeholder" class="dd__title">
          {{ placeholder }}
        </span>
        <img
          class="dd__caret dd__caret_dark"
          src="../assets/img/arrow-down.svg"
        />
      </button>
      <transition name="fade">
        <div v-if="isShown" class="dd__items">
          <button
            v-for="(item, i) in items"
            :key="`dd__item-${i}`"
            class="dd__item"
            :class="{
              dd__item_hide: isSelected(i),
            }"
            @click="selectItem(i)"
          >
            {{ dataType === 'array' ? item : item.title }}
          </button>
          <slot name="buttonCard" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Input from './Form/Input.vue'

export default {
  name: 'BlockSort',
  components: { Input },
  props: {
    dataType: {
      type: String,
      default: () => 'array'
    },
    disabledIndexes: {
      type: Array,
      default: () => []
    },
    items: {
      type: [Array, Object],
      default: () => []
    },
    placeholder: {
      type: [String, Number],
      default: 'по умолчанию'
    },
    value: {
      type: [Number, String],
      default: 0
    },
    mode: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideSelected: {
      type: Array,
      default: () => []
    },
  },
  data: () => ({
    isShown: false,
  }),
  computed: {
    elementsIsEmpty () {
      return this.items.length - this.hideSelected.length <= 0
    },

  },
  methods: {
    hideDd () {
      this.isShown = false
    },
    selectItem (i) {
      if (this.hideSelected.includes(i)) { return }
      this.isShown = false
      this.$emit('input', i)
    },
    isSelected (i) {
      return this.hideSelected.includes(i)
    },

  }
}
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
}
img.dd__caret {
  height: unset;
  width: unset;
  max-width: unset;
}
.ctm-field__header {
  letter-spacing: -0.025em;
  margin-bottom: 13px;
  height: 24px;
  color: #212529;
}
.dd {
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: $gray8D;
  position: relative;
  text-align: left;
  &_min-width {
    min-width: 131px;
  }
  &_small {
    min-width: unset;
  }
  &__title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: $gray8D;
    &_white {
      color: $white;
    }
    &_black {
      color: $black27 !important;
    }
  }
  &__top {
    align-items: flex-start;
  }
  &__items {
    background: #ffffff;
    border: 1px solid #f7f8fa;
    box-sizing: border-box;
    box-shadow: 0 17px 17px rgba(0, 0, 0, 0.05),
      0 5.125px 5.125px rgba(0, 0, 0, 0.0325794),
      0 2.12866px 2.12866px rgba(0, 0, 0, 0.025),
      0 0.769896px 0.769896px rgba(0, 0, 0, 0.0174206);
    border-radius: 6px;
    width: 100%;
    flex-basis: 100%;
    position: absolute;
    top: calc(100% + 4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 15px;
    padding: 15px 20px;
    z-index: 4;
    &_underline-type {
      width: fit-content;
      min-width: fit-content;
      right: 0;
    }
    &_small {
      max-height: 200px;
      grid-gap: 10px;
      overflow-y: auto;
      overscroll-behavior-y: contain;
    }
    &_wide {
      min-width: 131px;
      right: calc(100% - 30px);
    }
  }
  &__item {
    background: transparent;
    text-align: left;
    flex-basis: 100%;
    width: 100%;
    height: 100%;
    color: $gray8D;
    font-size: 11px;
    font-family: Source Sans Pro, sans-serif;
    &:hover {
      color: $black27;
    }
    &_disabled {
      cursor: default;
      color: $grayB9;
      &:hover {
        color: $grayB9;
      }
    }
    &_icon {
      display: flex;
      align-items: center;
      img {
        margin-right: 5px;
        height: 24px;
        width: 24px;
      }
    }
    &_hide {
      display: none;
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    img {
      height: 24px;
      width: 24px;
      margin-right: 5px;
    }
    span {
      margin-right: 5px;
    }
  }
  &__btn {
    background-color: $white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 12px;
    padding: 10px 16px;
    color: $grayB4;
    display: flex;
    align-items: center;
    gap: 13px;
    border: 1px solid transparent;
    &:hover {
      border-color: $grayF2;
    }
    &_blue {
      background-color: $blue;
    }
    &_dark {
      background: #151552;
    }
    &_gray {
      background-color: $light;
    }
    &_disabled {
      background-color: #e6e6e7;
    }
    &_border {
      border: 1px solid $light;
    }
    &_underline {
      border: none;
      background: none;
      min-height: 26px;
      padding-right: 0;
      padding-left: 0;
      margin-top: 5px;
      .dd__title {
        border-bottom: 1px solid $blue !important;
        color: $blue !important;
      }
      &:hover {
        border: none;
      }
    }
  }
  .icon-more_horizontal {
    display: none;
  }
  &__dots-btn {
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    padding: 0;
    width: 30px;
    height: 30px;
    .dd__title,
    .dd__caret {
      display: none;
    }
    .icon-more_horizontal {
      display: block;
      color: #7c838d;
      font-size: 19px;
    }
  }
  &__search {
    width: 100%;
  }
}
</style>
