<template>
  <div id="app">
    <nav class="navbar">
      <div class="menu">
        <router-link to="/blogs">Blogs</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/books">Books</router-link>
      </div>

      <div class="login">
        <router-link to="/login">Login</router-link>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:#e6e2b3;
  padding:12px 20px;
}

.menu a{
  margin-right:20px;
  text-decoration:none;
  font-weight:bold;
  color:#333;
}

.login a{
  text-decoration:none;
  font-weight:bold;
  color:#333;
}

a.router-link-active{
  background:gold;
  padding:6px 10px;
  border-radius:4px;
}
</style>