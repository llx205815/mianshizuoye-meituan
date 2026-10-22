<template>
  <div>
    <div class="header-bar">
      <h1>{{ activity.name }}</h1>
      <p>活动详情</p>
    </div>
    <div class="card">
      <div class="tag-group">
        <span class="tag tag-price">¥{{ activity.price }}</span>
        <span class="tag tag-normal">{{ activity.isIndoor ? '室内活动' : '室外活动' }}</span>
      </div>
      <p class="desc">{{ activity.desc }}</p>
      <p class="mt">推荐人群：{{ activity.tags.join('、') }}</p>
    </div>
    <div class="card">
      <h3>想找人一起出发？</h3>
      <button class="btn btn-primary" @click="goTeam">前往组队广场发起组队</button>
    </div>
    <div class="card">
      <button class="btn btn-secondary" @click="backHome">返回推荐页</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const router = useRouter()

const activityList = [
  {id:1,name:"城市美术馆现代艺术展",category:"展览",price:20,isIndoor:true,desc:"适合拍照打卡，人流量适中，文艺风格，适合单人或双人游玩",tags:["文艺","单人","双人"]},
  {id:2,name:"滨江创意手作市集",category:"市集",price:0,isIndoor:false,desc:"特色小吃、手工文创摊位，适合结伴休闲闲逛",tags:["多人","休闲"]},
  {id:3,name:"近郊山林轻徒步路线",category:"户外",price:15,isIndoor:false,desc:"低难度徒步路线，观赏自然风景，适合多人组队",tags:["多人","户外"]},
  {id:4,name:"独立乐队Live现场",category:"演出",price:118,isIndoor:true,desc:"现场氛围感强，适合喜爱音乐的小伙伴结伴",tags:["双人","音乐"]},
]

const activity = computed(() => {
  const id = Number(route.query.id)
  return activityList.find(item => item.id === id)
})

const goTeam = () => {
  router.push('/team')
}
const backHome = () => {
  router.push('/home')
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
.desc {
  font-size: 14px;
  color: #718096;
  line-height: 1.6;
}
.mt {
  margin-top:12px;
  font-size:14px;
  color:#4a5568;
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
.btn-secondary {
  background-color: #f1f4f8;
  color: #2d3748;
}
</style>
