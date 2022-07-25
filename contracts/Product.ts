
export type Product = {
  readonly title: string
  readonly text: string
  readonly price: string
  readonly image: string
}

export const getEmptyProduct = (): Product => ({
  title: '',
  text: '',
  price: '',
  image: ''
})
