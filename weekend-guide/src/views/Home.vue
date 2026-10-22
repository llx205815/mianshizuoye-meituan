<template>
  <div>
    <div class="header-bar">
      <h1>✨ AI智能推荐</h1>
      <p>根据天气、预算、兴趣自动筛选游玩项目</p>
    </div>
    <div class="card">
      <h3>今日天气 {{ weatherState === 'rain' ? '🌧️ 雨天' : '☀️ 晴天' }}</h3>
      <p class="desc">雨天优先为你推荐室内活动</p>
    </div>
    <div
      v-for="item in recommendList"
      :key="item.id"
      class="card"
      @click="goDetail(item)"
    >
      <h3>{{ item.name }}</h3>
      <div class="tag-group">
        <span class="tag tag-price">¥{{ item.price }}</span>
        <span class="tag tag-normal">{{ item.isIndoor ? '室内' : '室外' }}</span>
      </div>
      <p class="desc">{{ item.desc }}</p>
    </div>
    <div v-if="recommendList.length === 0" class="card empty-tip">
      暂无匹配活动，请重新修改偏好
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const weatherState = ref('rain')

const activityList = [
  {
    id: 1,
    name: "城市美术馆现代艺术展",
    category: "展览",
    price: 20,
    isIndoor: true,
    desc: "适合拍照打卡，人流量适中，文艺风格，适合单人或双人游玩",
    tags: ["文艺", "单人", "双人"]
  },
  {
    id: 2,
    name: "滨江创意手作市集",
    category: "市集",
    price: 0,
    isIndoor: false,
    desc: "特色小吃、手工文创摊位，适合结伴休闲闲逛",
    tags: ["多人", "休闲"]
  },
  {
    id: 3,
    name: "近郊山林轻徒步路线",
    category: "户外",
    price: 15,
    isIndoor: false,
    desc: "低难度徒步路线，观赏自然风景，适合多人组队",
    tags: ["多人", "户外"]
  },
  {
    id: 4,
    name: "独立乐队Live现场",
    category: "演出",
    price: 118,
    isIndoor: true,
    desc: "现场氛围感强，适合喜爱音乐的小伙伴结伴",
    tags: ["双人", "音乐"]
  },
]
const profile = JSON.parse(localStorage.getItem('userProfile'))

const recommendList = computed(() => {
  if (!profile) return []
  const budgetMax = Number(profile.budget.split('-')[1])
  return activityList.filter(act => {
    if (weatherState.value === 'rain' && !act.isIndoor) return false
    if (act.price > budgetMax) return false
    return act.tags.some(t => profile.hobbyTags.includes(t))
  })
})
const goDetail = (item) => {
  router.push({ path: '/detail', query: { id: item.id } })
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
.card h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
}
.desc {
  font-size: 14px;
  color: #718096;
  line-height: 1.6;
}
.tag-group {
  margin: 12px 0;
}
.tag {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 13px;
  margin: 4px 4px 4px 0;
}
.tag-normal {
  background-color: #edf2fb;
  color: #2b6cb0;
}
.tag-price {
  background-color: #fff5eb;
  color: #c05621;
  font-weight: 500;
}
.empty-tip {
  text-align: center;
  padding: 30px 0;
  color: #a0aec0;
  font-size: 14px;
}
</style>
