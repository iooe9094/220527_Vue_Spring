<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">bezkoder</router-link>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">
              Add
            </router-link>
          </li>
        </div>
      <!-- div 끝 -->
    </nav>
    <!-- nav 끝 -->
    <div class="container mt-3">
      <!-- 위의 router-link 있는 메뉴 화면이 아래 위치에 표시 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>

<style>

</style>
