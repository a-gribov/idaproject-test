export { default as BlockAnimation } from '../../components/BlockAnimation.vue'
export { default as BlockSort } from '../../components/BlockSort.vue'
export { default as DeleteButton } from '../../components/DeleteButton.vue'
export { default as MainComponent } from '../../components/MainComponent.vue'
export { default as Form } from '../../components/Form/Form.vue'
export { default as FormButton } from '../../components/Form/FormButton.vue'
export { default as FormInput } from '../../components/Form/Input.vue'
export { default as FormTextarea } from '../../components/Form/Textarea.vue'
export { default as ProductsProductItem } from '../../components/Products/ProductItem.vue'
export { default as ProductsList } from '../../components/Products/ProductsList.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
