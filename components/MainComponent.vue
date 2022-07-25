<template>
  <div class="app">
    <div class="header">
      <h2 class="title">Добавление товара</h2>
      <BlockSort v-model="activeSort" :items="sortTypes" />
    </div>
    <div class="content">
      <div class="form-container">
        <Form />
      </div>
      <ProductsList :list="compProducts" class="cards" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Form from './Form/Form.vue'
import ProductsList from './Products/ProductsList.vue'
import BlockSort from './BlockSort.vue'
import { LocalStorageService } from '~/utils/localStorageService'

export default Vue.extend({
  name: 'MainComponent',
  components: {
    ProductsList,
    Form, BlockSort
  },
  data () {
    return {
      activeSort: '',
      sortTypes: [
        'по умолчанию',
        'по цене min',
        'по цене max',
        'по названию',
      ],
    }
  },
  methods: {
    setCart (cart) {
      this.$nuxt.$store.dispatch('cart/setCartProductsFromLs', cart)
    },
  },
  computed: {
    ...mapGetters({
      relevantCartProducts: 'cart/getCart',
    }),
    compProducts () {
      let newArr = this.relevantCartProducts.slice()
      if (this.activeSort == 1) {
        newArr.sort((prev, next) => prev.price - next.price)
      } else if (this.activeSort == 2) {
        newArr.sort((prev, next) => next.price - prev.price)
      } else if (this.activeSort == 3) {
        function compare (a, b) {
          const titleA = a.title.toUpperCase()
          const titleB = b.title.toUpperCase()
          let comparison = 0
          if (titleA > titleB) {
            comparison = 1
          } else if (titleA < titleB) {
            comparison = -1
          }
          return comparison
        }
        newArr.sort(compare)
      }
      return newArr
    },
  },
  mounted () {
    this.setCart(LocalStorageService.get('cart') || [])
  },
})
</script>

<style lang="scss" scoped>
.title {
  font-family: Source Sans Pro, sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  @include tablet {
    font-size: 2rem;
  }
  @include mobile {
    font-size: 1.4rem;
  }
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  @include mobile_tablet {
    position: sticky;
  }
}
.form-container {
  width: 332px;
  @include mobile {
    width: 100%;
  }
  @include mobile_tablet {
    margin-bottom: 3rem;
  }
}
.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1.6rem;

  @include mobile_tablet {
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @include desktop {
    padding-left: 1.6rem;
  }
}
.content {
  display: grid;
  grid-template-columns: 2fr 10fr;
  @include mobile_tablet {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: center;
  }
}
.app {
  margin: 3.2rem;
  @include mobile_tablet {
    margin: 1.6rem;
  }
}
</style>

