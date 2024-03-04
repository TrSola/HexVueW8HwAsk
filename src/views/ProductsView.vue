<template>
 <!-- <div class='container'>
        <div class='row py-3'>
          <div class='col-md-6'>
            <h2>產品列表</h2>
            <table class='table table-hover mt-4'>
              <thead>
                <tr>
                  <th>產品名稱</th>
                  <th>原價</th>
                  <th>售價</th>
                  <th>是否啟用</th>
                  <th>查看細節</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='product in products' :key='product.id'>
                  <td width='150'>{{product.title}}</td>
                  <td width='120'>{{product.origin_price}}</td>
                  <td width='120'>{{product.price}}</td>
                  <td width='150'>
                    <template v-if='product.is_enabled'>
                      <p class='text-success'>啟用</p>
                    </template>
                    <template v-else>
                      <p>未啟用</p>
                    </template>
                  </td>
                  <td width='120'>
                    <button
                      class='btn btn-primary'
                      type='button'
                      @click='seeDetails(product)'
                    >
                      查看細節
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {{ `目前有 ${products.length} 項產品` }}
          </div>
          <div class='col-md-6'>
            <h2>單一產品細節</h2>
            <template v-if='tempProduct.title'>
              <div class='card mb-3'>
                <img :src='tempProduct.imageUrl' alt='' style="background-size: cover; height: 350px;"/>
                <div class='card-body'>
                  <h5 class='card-title'>
                    {{ tempProduct.title}}
                    <span class='badge bg-primary ms-2'
                      >{{tempProduct.category}}</span
                    >
                  </h5>
                  <p class='card-text'>
                    商品描述 : {{tempProduct.description}}
                  </p>
                  <p class='card-text'>商品內容 : {{tempProduct.content}}</p>
                  <p>
                    <span class='me-2'> {{tempProduct.price}} </span
                    ><span class='text-muted text-decoration-line-through'>
                      {{tempProduct.origin_price}} </span
                    ><span>/ {{tempProduct.unit}}</span>
                  </p>
                </div>
              </div>
              <img
                :src='image'
                alt=''
                v-for='(image, i) in tempProduct.imagesUrl'
                :key='"image" + i'
                class='image m-2 img-fluid'
                style=" height: 150px;  background-size: cover;"
              />
            </template>
            <template v-else>
              <p>請選擇一個商品查看</p>
            </template>
          </div>
        </div>
      </div> -->
      <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand">商品頁面</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <RouterLink class="nav-item nav-link me-4" to="/">首頁</RouterLink>
  <RouterLink class="nav-item nav-link me-4" to="/product">產品頁面<span class="sr-only">(目前頁面)</span></RouterLink>
  <RouterLink class="nav-item nav-link me-4" to="/detail">商品細節頁面</RouterLink>
            </div>
        </div>
      </nav>
    </div>
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1;"></div>
      <h2 class="fw-bold">挑選一些自己喜歡的商品吧！</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    sideUl
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">item1</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item2</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item3</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item4</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item5</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    Ul2
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">item1</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item2</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item3</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item4</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item5</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    Ul3
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">item1</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item2</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item3</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item4</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">item5</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
            {{ `此頁有 ${products.length} 項產品` }}
          <div class="row">
            <div class="col-md-6" v-for="product in products" :key="product.id">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" class="card-img-top rounded-0" alt="商品圖片">
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    <RouterLink class="mb-0 mt-3" to="/detail">{{product.title}}</RouterLink>
                  </h4>
                  <p class="card-text mb-0">NT${{product.price}} <span class="text-muted "><del>NT${{product.origin_price}}</del></span></p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            </div>
          </div>
          <nav class="d-flex justify-content-center">
            <ul class="pagination">
              <pagination-component
        :pages="pagination"
        @emit-pages="getData"
      ></pagination-component>
            </ul>
          </nav>
        </div>
      </div>
    <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
          <p class="mb-0 fw-bold">試試搜尋自己喜歡的商品吧</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
               搜尋
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>;
      </div>
    </div>
</template>

<script setup>
import '../assets/all.css'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import PaginationComponent from '../components/PaginationComponent.vue'
const products = ref([])
const pagination = ref({})
// const tempProduct = ref({})
// const seeDetails = (product) => {
//   tempProduct.value = product
// }
const getData = (page = 1) => {
  const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
  axios
    .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${page}`)
    .then((res) => {
      products.value = res.data.products
      pagination.value = res.data.pagination
    })
    .catch((err) => alert(err.response.data.message))
}

onMounted(() => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
  axios.defaults.headers.common.Authorization = token
  getData()
})
</script>
