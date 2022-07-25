<template>
  <div>
    <TransitionGroup class="cards-container" name="list" tag="div">
      <BlockAnimation v-for="(product, index) in list" :key="index">
        <ProductItem
          class="card-container"
          v-bind="product"
          :product="product"
        />
      </BlockAnimation>
    </TransitionGroup>
  </div>
</template>

<script>
import Vue from 'vue'
import ProductItem from './ProductItem.vue'
import BlockAnimation from '../BlockAnimation.vue'

export default Vue.extend({
  name: 'ProductsList',
  components: {
    ProductItem, BlockAnimation
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.cards-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1.6rem;

  @include mobile {
    flex-direction: column;
  }

  @include desktop {
    padding-left: 1.6rem;
  }
}
</style>
