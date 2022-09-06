import { defineStore } from 'pinia';
import api from '@/api/api.js'
import { KEY_API } from '@/api/key.js'
import { ProductCart } from '@/types/product'
export const useProductsState = defineStore('photo', {
  state: (): any => ({
    productList: [],
    cartProduct: []
  }),

  actions: {
    async getProductList(page: number = 1) {
      try {
          const data = await api.fetchApi(`photos?page=${page}&client_id=${KEY_API}`, 'GET');
          this.productList = data.map(item => {
            return {
              ...item,
              price: Math.floor(Math.random() * 60000) + 1000
            }
          })
      } catch (e) {
        console.log(e)
      }
    },


    productCard(product: ProductCart) {
      const findedProduct = this.cartProduct.find(item => item.id === product.id);
      // если продукт добавлен в кразину то просто увеличиваем amount
      // если его нет, то добавляем в карзину
      findedProduct
        ? findedProduct.amount = product.amount
        : this.cartProduct.push(product);
      // отчищаю массив где у продуктов amount 0
      this.cartProduct = this.cartProduct.filter(item => item.amount > 0);
    }
  },

  getters: {
    totalPrice(): number {
      return this.cartProduct.reduce((acc, item) => (item.price * item.amount) + acc, 0)
    },
  }
})
