<template>
  <div>
    <div class="header-bar">
      <h1>📝 发布打卡攻略</h1>
      <p>分享你的游玩体验</p>
    </div>
    <div class="card">
      <label>标题</label>
      <input v-model="article.title" placeholder="攻略标题">
      <label>游玩地点</label>
      <input v-model="article.place" placeholder="去哪里玩">
      <label>心得内容</label>
      <textarea v-model="article.content" placeholder="写下你的体验、避坑建议"></textarea>
      <button class="btn btn-primary" @click="publish">提交攻略</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const article = ref({
  title:'',
  place:'',
  content:''
})

const publish = ()=>{
  if(!article.value.title.trim() || !article.value.content.trim()){
    alert('标题和内容不能为空')
    return
  }
  const list = JSON.parse(localStorage.getItem('articleList')) || []
  list.push({
    ...article.value,
    time: new Date().toLocaleString()
  })
  localStorage.setItem('articleList', JSON.stringify(list))
  alert("发布成功！")
  router.push('/community')
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
label {
  display: block;
  font-size: 14px;
  color: #4a5568;
  margin: 12px 0 6px;
}
input, textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  background: #fff;
}
textarea {
  min-height: 120px;
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
