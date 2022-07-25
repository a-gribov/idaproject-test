import { Product } from '~/contracts/Product'
import { LocalStorageService } from '~/utils/localStorageService'

export type CartState = {
  cart: Array<Product>
}

export const state = (): CartState => ({
  cart: []
})

export const getters = {
  getCart: (state: CartState): ReadonlyArray<Product> => state.cart,
}

export const mutations = {
  SAVE_CART(state: CartState, payload: any) {
    const localProduct = payload.localProduct
    const addToCart = payload.addToCart

    if (addToCart === true) {
      localProduct.price = Number(localProduct.price)
      state.cart.push(localProduct)
    } else {
      const index = state.cart.findIndex((x) => x.title === localProduct.title)
      state.cart.splice(index, 1)
    }
    LocalStorageService.set('cart', state.cart)
  },
  SAVE_CART_FROM_LS(state: CartState, payload: any) {
    state.cart = payload
  },
}

export const actions = {
  setCartProducts({ commit }: { commit: Function }, payload: any) {
    commit('SAVE_CART', payload)
  },
  setCartProductsFromLs({ commit }: { commit: Function }, payload: any) {
    commit('SAVE_CART_FROM_LS', payload)
  },
}
