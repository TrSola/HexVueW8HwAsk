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
          {{  product }}
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
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative" v-for="(item) in product.imagesUrl" :key="item.id">
              <img :src="item" class="card-img-top rounded-0 object-fit-cover" alt="..." height="800">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">{{ product.title }}</a></h4>
                <p class="card-text mb-0">${{ product.price }} <span class="text-muted "><del>${{ product.origin_price }}</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import '../assets/all.css'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../stores/cartStore'
const { VITE_APP_URL: apiUrl, VITE_APP_PATH: apiPath } = import.meta.env
const route = useRoute()
const product = ref({})
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
onMounted(() => {
  getProduct()
})

</script>
