<template>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="product.imageUrl" class="d-block w-100 object-fit-cover" alt="..." height="550">
              </div>
              <!-- <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div> -->
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
          <p class="mb-0 text-muted text-end"><del>${{ product.origin_price }}</del></p>
          <p class="h4 fw-bold text-end">${{ product.price }}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" @click="product.num--" :disabled="product.num <= 1">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <input type.prevent="number" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="product.num" value="1">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="product.num++">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <a class="text-nowrap btn btn-dark w-100 py-2" @click.prevent="addToCart(product.id, product.num)">加到購物車</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <p>{{ product.description }}</p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">{{ product.content }}</p>
        </div>
      </div>
      <h3 class="fw-bold">看看更多商品圖</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="item in filteredProducts" :key="item.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img :src="item.imageUrl" class="card-img-top rounded-0 object-fit-cover" alt="..." height="350">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">{{ item.title }}</h4>
                <p class="card-text mb-0">${{ item.price }} <span class="text-muted "><del>${{ item.origin_price }}</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="test">
      <template v-if="1">
  <!-- <router-link to="/about">About</router-link> -->
  <div>
    <swiper :slides-per-view="1" :space-between="50"
      :modules="modules"
      navigation
      :pagination="{ clickable: true }">
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>
    </div>

</template>

<script setup>
import '../assets/all.css'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../stores/cartStore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]

const { VITE_APP_URL: apiUrl, VITE_APP_PATH: apiPath } = import.meta.env
const route = useRoute()
const product = ref({})
const products = ref({})
const pagination = ref({})
const cartStoreFromPinia = useCartStore()
const { addToCart } = cartStoreFromPinia

const getProduct = () => {
  const { id } = route.params
  const url = `${apiUrl}/api/${apiPath}/product/${id}`
  axios
    .get(url)
    .then((res) => {
      product.value = res.data.product
      product.value.num = 1
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
}

const getData = (page = 1) => {
  const { category = '' } = route.query
  axios
    .get(`${apiUrl}/api/${apiPath}/products?category=${category}&page=${page}`)
    .then((res) => {
      products.value = res.data.products
      pagination.value = res.data.pagination
    })
    .catch((err) => alert(err.response.data.message))
}

const filteredProducts = computed(() => {
  // 確保 products.value 是一個陣列，否則返回空陣列
  if (!Array.isArray(products.value)) {
    return []
  }

  // 篩選出符合條件的產品
  return products.value.filter(item => item.id !== product.value.id)
})

onMounted(() => {
  getProduct()
  getData()
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.swiper {
  width: 600px;
  height: 400px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
