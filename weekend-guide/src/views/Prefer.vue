<template>
  <div>
    <div class="header-bar">
      <h1>🎯 设置游玩偏好</h1>
      <p>填写信息，为你智能匹配周末活动</p>
    </div>
    <div class="card">
      <label>所在城市</label>
      <select v-model="formData.city">
        <option>衡阳</option>
        <option>长沙</option>
        <option>株洲</option>
      </select>

      <label>预算档位</label>
      <select v-model="formData.budget">
        <option value="0-30">0-30元（平价）</option>
        <option value="30-80">30-80元（适中）</option>
        <option value="80-200">80-200元（高品质）</option>
      </select>

      <label>同行方式</label>
      <select v-model="formData.peerType">
        <option>单人</option>
        <option>双人</option>
        <option>多人小团体</option>
      </select>

      <label>兴趣标签（点击多选）</label>
      <div class="tag-group">
        <span
          v-for="tag in hobbyOptions"
          :key="tag"
          @click="toggleTag(tag)"
          :class="['tag', formData.hobbyTags.includes(tag) ? 'tag-normal' : 'tag-gray']"
        >
          {{ tag }}
        </span>
      </div>
      <button class="btn btn-primary" @click="submitProfile">保存偏好，获取推荐</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const hobbyOptions = ["展览", "市集", "演出", "户外", "美食", "博物馆", "散步"]
const formData = ref({
  city: "衡阳",
  budget: "0-80",
  peerType: "单人",
  hobbyTags: []
})

const toggleTag = (tag) => {
  const idx = formData.value.hobbyTags.indexOf(tag)
  if (idx >= 0) {
    formData.value.hobbyTags.splice(idx, 1)
  } else {
    formData.value.hobbyTags.push(tag)
  }
}

const submitProfile = () => {
  if (formData.value.hobbyTags.length === 0) {
    alert("请至少选择一项兴趣爱好！")
    return
  }
  localStorage.setItem('userProfile', JSON.stringify(formData.value))
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
label {
  display: block;
  font-size: 14px;
  color: #4a5568;
  margin: 12px 0 6px;
}
select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  background: #fff;
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
  cursor: pointer;
}
.tag-normal {
  background-color: #edf2fb;
  color: #2b6cb0;
}
.tag-gray {
  background-color: #f1f4f8;
  color: #718096;
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
