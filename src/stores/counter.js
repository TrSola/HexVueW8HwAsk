import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('counter', () => {
  const count = ref(0)
  const increment = () => {
    count.value += 1
  }
  return { count, increment }
})
