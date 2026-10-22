<template>
  <div>
    <div class="header-bar">
      <h1>👤 个人中心</h1>
      <p>你的偏好与记录</p>
    </div>
    <div class="card">
      <h3>当前偏好设置</h3>
      <p>城市：{{ profile.city }}</p>
      <p>预算区间：{{ profile.budget }}</p>
      <p>同行偏好：{{ profile.peerType }}</p>
      <p>兴趣标签：{{ profile.hobbyTags.join('、') || '无' }}</p>
      <button class="btn btn-primary" @click="resetPrefer">重新设置偏好</button>
    </div>
    <div class="card">
      <h3>我的打卡攻略</h3>
      <div v-if="myArticles.length === 0">暂无发布记录</div>
      <div v-for="(art, i) in myArticles" :key="i" class="item">
        <p>{{ art.title }} | {{ art.place }}</p>
      </div>
    </div>
    <div class="card">
      <h3>功能说明</h3>
      <p class="desc">1. 根据你的偏好、预算、天气智能推荐本地活动</p>
      <p class="desc">2. 在组队广场发起、加入结伴活动</p>
      <p class="desc">3. 发布游玩打卡，分享攻略给其他人</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const profile = ref({
  city:'衡阳',
  budget:'0-80',
  peerType:'单人',
  hobbyTags:[]
})
const allArticles = ref([])
onMounted(()=>{
  const p = JSON.parse(localStorage.getItem('userProfile'))
  if(p) profile.value = p
  allArticles.value = JSON.parse(localStorage.getItem('articleList')) || []
})
const myArticles = computed(()=> allArticles.value)
const resetPrefer = ()=>{
  localStorage.removeItem('userProfile')
  router.push('/')
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
.item {
  padding: 6px 0;
  border-bottom: 1px #eee solid;
}
.desc {
  font-size: 14px;
  color: #718096;
  line-height: 1.6;
}
.btn {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  margin-top: 12px;
  cursor: pointer;
}
.btn-primary {
  background-color: #2b6cb0;
  color: white;
}
</style>
