<template>
  <div class="app-root">
    <div class="wrap">
      <router-view />
    </div>
    <div class="tab-nav">
      <router-link to="/home">首页推荐</router-link>
      <router-link to="/team">组队广场</router-link>
      <router-link to="/community">攻略社区</router-link>
      <router-link to="/mine">个人中心</router-link>
    </div>
  </div>
</template>

<style scoped>
.app-root {
  background-color: #f7f8fa;
  min-height: 100vh;
}
.wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 16px 16px 90px 16px;
}
.tab-nav {
  max-width: 720px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  background: #fff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0 8px 0;
  border-top: 1px solid #e2e8f0;
}
.tab-nav a {
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  color: #718096;
}
.tab-nav a.router-link-active {
  color: #2b6cb0;
  font-weight: 600;
}
</style>
