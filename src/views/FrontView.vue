<template>
  <!-- <RouterLink to="/">首頁</RouterLink> |
  <RouterLink to="/about">關於我們</RouterLink> |
  <RouterLink to="/cart">購物車列表</RouterLink> |
  <br>d
  <RouterLink to="/login">登入</RouterLink> |
  <br>
  <RouterLink to="/admin">後台快速通關(全部製作完成記得刪掉)</RouterLink> | -->
  <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand">首頁</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <RouterLink class="nav-item nav-link me-4" to="/">首頁<span class="sr-only">(目前頁面)</span></RouterLink>
  <RouterLink class="nav-item nav-link me-4" to="/product">產品頁面</RouterLink>
  <RouterLink class="nav-item nav-link me-4" to="/detail">商品細節頁面</RouterLink>
            </div>
          </div>
        </nav>
  <RouterView/>
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
        </div>
      </div>
    </div>
</template>

<script setup>

</script>
