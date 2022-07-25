<template>
  <div>
    <Transition name="fade">
      <div class="form sended" v-if="isFormSend">
        <p class="text">Карточка добавлена</p>
      </div>
    </Transition>
    <Transition name="fade">
      <validation-observer
        v-if="!isFormSend"
        ref="validate"
        v-slot="{ handleSubmit, passed }"
      >
        <form class="form" @submit.prevent="handleSubmit(setProduct)">
          <Input
            v-model="product.title"
            class="input"
            is-required="true"
            rules="required|min:3|max:20"
            label="Наименование товара"
            placeholder="Введите наименование товара"
          />
          <Textarea
            v-model="product.text"
            class="input"
            rows="5"
            label="Описание товара"
            placeholder="Введите описание товара"
          />
          <Input
            v-model="product.image"
            class="input"
            rules="required"
            is-required="true"
            label="Ссылка на изображение товара"
            placeholder="Введите ссылку"
          />
          <Input
            v-model="product.price"
            class="input"
            rules="required|min:1"
            is-required="true"
            label="Цена товара"
            placeholder="Введите цену"
            name="price"
          />
          <FormButton
            :class="{ passed: '.button-passed' }"
            mode="text"
            button-text="Добавить товар"
            :disabled="!passed"
          />
        </form>
      </validation-observer>
    </Transition>
  </div>
</template>

<script>
import Input from './Input.vue'
import Textarea from './Textarea.vue'
import FormButton from './FormButton.vue'

export default {
  name: 'Form',
  components: {
    Input,
    Textarea,
    FormButton
  },
  data () {
    return {
      isFormSend: false,
      product: {
        title: '',
        text: '',
        image: '',
        price: ''
      }
    }
  },
  methods: {
    setProduct () {
      const addToCart = true
      const localProduct = { ...this.product }
      this.$store.dispatch('cart/setCartProducts', { localProduct, addToCart })
      this.isFormSend = true
      for (var member in this.product) this.product[member] = ''
      setTimeout(() => {
        this.isFormSend = false
      }, 900)
    }
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 0.4rem;
  background-color: $white;
  padding: 2.4rem;
  width: 332px;
  min-height: 44rem;
  @include mobile {
    width: 100%;
    padding: 1.2rem;
  }
  @include desktop {
    position: fixed;
  }
  .button-passed {
    background-color: $dark_blue;
  }

  .input {
    margin-bottom: 1.6rem;
  }
}

@include tablet {
  .form {
    z-index: 10;
    width: 346px;
  }
}
</style>
