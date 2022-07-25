<template>
  <div class="card">
    <DeleteButton class="button" :product="product" />
    <div class="image-container">
      <img v-if="image" class="image" :src="image" :alt="title" />
    </div>
    <div class="content">
      <h3 class="title" v-if="title" v-html="title" />
      <p v-if="text" class="text" v-html="text" />
      <p
        v-if="price"
        class="price"
        v-html="
          price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' руб.'
        "
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import DeleteButton from '~/components/DeleteButton.vue'

export default Vue.extend({
  name: 'ProductItem',
  components: {
    DeleteButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
    product: {
      type: Object,
      default: () => { },
    },
  },
})
</script>

<style lang="scss" scoped>
.card {
  height: 42.3rem;
  background-color: $white;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 0.4rem;
  position: relative;
  transition: 0.25s;
  width: 100%;
  flex-direction: column;
  display: flex;
  cursor: url('~/assets/img/cursor.svg') 2 2, pointer;

  &:hover {
    box-shadow: 2px 4px 28px 6px rgba(34, 60, 80, 0.2);

    .button {
      z-index: 20;
      opacity: 1;
    }
  }

  .image-container {
    width: 100%;
    height: 21rem;
    flex-shrink: 0;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 0;
    }
  }

  .button {
    transition: opacity 0.25s ease-out;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(40%, -40%);
    cursor: url('~/assets/img/cursor.svg'), pointer;
  }

  .content {
    padding: 1.6rem 1.6rem 2.4rem 1.6rem;
    height: 100%;
    flex-direction: column;
    display: flex;
  }

  .title,
  .text,
  .price {
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
  }

  .title {
    color: $black;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1.6rem;
  }

  .text {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    color: $black;
    margin-bottom: 3.2rem;
    height: 8.5rem;
    overflow: auto;
  }

  .price {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3rem;
    color: $black;
    margin-top: auto;
  }
}
</style>
