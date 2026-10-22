<template>
  <div>
    <div class="header-bar">
      <h1>📖 攻略社区</h1>
      <p>看看大家分享的游玩打卡</p>
    </div>
    <div class="card">
      <button class="btn btn-primary" @click="goPublish">发布新攻略</button>
    </div>
    <div class="card" v-for="(item, idx) in articleList" :key="idx">
      <h4>{{ item.title }}</h4>
      <p class="small">📍 {{ item.place }} · {{ item.time }}</p>
      <p class="desc">{{ item.content }}</p>
    </div>
    <div v-if="articleList.length === 0" class="card empty-tip">还没有攻略，快来第一个分享！</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const articleList = ref([])
onMounted(()=>{
  const data = JSON.parse(localStorage.getItem('articleList')) || []
  articleList.value = data
})
const goPublish = ()=>{
  router.push('/publish')
}
</script>

<style scoped>
.header-bar {
  background: #ffffff;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.header-bar h1 {
  font-size: 20px;
  font-weight: 600;
  color: #2b6cb0;
}
.header-bar p {
  font-size: 13px;
  color: #718096;
  margin-top: 4px;
}
.card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.small {
  font-size:12px;
  color:#a0aec0;
  margin: 4px 0 10px;
}
.desc {
  font-size: 14px;
  color: #718096;
  line-height: 1.6;
}
.empty-tip {
  text-align: center;
  padding: 30px 0;
  color: #a0aec0;
  font-size: 14px;
}
.btn {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
}
.btn-primary {
  background-color: #2b6cb0;
  color: white;
}
</style>
