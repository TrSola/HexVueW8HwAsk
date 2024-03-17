<template>
    <!-- <router-link to="/about">About</router-link> -->
    <div>
      <swiper
      v-bind="swiperOptions"
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide>
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </swiper-slide>
      </swiper>
    </div>
  </template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]
const swiperOptions = {
  loop: true // 开启循环滚动
  // 其他配置选项...
}
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
