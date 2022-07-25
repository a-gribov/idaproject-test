<template>
  <button class="button" @click="cartAction()">
    <img class="icon" :src="require('@/assets/img/basket.svg')" alt="delete" />
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'DeleteButton',
  data () {
    return {}
  },
  props: {
    product: {
      type: Object,
      default: () => { },
    },
  },
  methods: {
    cartAction () {
      const addToCart = false
      const localProduct = { ...this.product }
      this.$store.dispatch('cart/setCartProducts', { localProduct, addToCart })
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  border-radius: 1rem;
  color: $white;
  background-color: $coral;
  transition: 0.25s;
  width: 3.3rem;
  height: 3.5rem;
  padding: 0.8rem;
}
</style>
