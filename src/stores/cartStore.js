import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
const { VITE_APP_URL: apiUrl, VITE_APP_PATH: apiPath } = import.meta.env
export const useCartStore = defineStore('cartStore', () => {
  const carts = ref([])
  const finalTotal = ref(0)
  const total = ref(0)
  // const product = ref({})
  const getCart = () => {
    const url = `${apiUrl}/api/${apiPath}/cart`
    axios
      .get(url)
      .then((res) => {
        carts.value = res.data.data
        finalTotal.value = res.data.data.final_total
        total.value = res.data.data.total
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }
  const addToCart = (id) => {
    const url = `${apiUrl}/api/${apiPath}/cart`
    const cartData = {
      product_id: id,
      qty: 1
    }
    axios
      .post(url, { data: cartData })
      .then((res) => {
        // getProduct()
        console.log(res)
        getCart()
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }
  return {
    carts,
    finalTotal,
    total,
    getCart,
    addToCart
  }
})
