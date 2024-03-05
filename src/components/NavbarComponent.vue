<template>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand">首頁</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <RouterLink class="nav-item nav-link me-4" to="/">首頁<span class="sr-only">(目前頁面)</span></RouterLink>
              <RouterLink class="nav-item nav-link me-4" to="/products">產品頁面</RouterLink>
            </div>
          </div>
        </nav>
</template>
