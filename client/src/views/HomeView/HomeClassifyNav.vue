<template>
  <nav class="navbar navbar-expand-lg bg-body-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">推荐</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page">特惠</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page">国家补贴</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page">秒送</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page">团购</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page">本地生活</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HomeClassifyNav'
}
</script>

<style scoped>
.nav-link {
  font-size: 16px;
  color: var(--bs-danger);
  font-weight: 600;
  cursor: pointer;
}
.nav-link.active {
  border-bottom: 6px solid var(--bs-danger);
}
</style>