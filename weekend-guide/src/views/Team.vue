<template>
  <div>
    <div class="header-bar">
      <h1>👥 组队广场</h1>
      <p>寻找同好，相约一起出发</p>
    </div>
    <div class="card">
      <h3>发起新组队</h3>
      <label>活动名称</label>
      <input v-model="newTeam.title" placeholder="输入想去的活动">
      <label>人数上限</label>
      <input type="number" v-model.number="newTeam.maxNum" placeholder="最多几人">
      <label>留言备注</label>
      <textarea v-model="newTeam.desc" placeholder="简单说下你的要求"></textarea>
      <button class="btn btn-primary" @click="addTeam">发布组队</button>
    </div>
    <div class="card" v-for="(item, index) in teamList" :key="index">
      <h4>{{ item.title }}</h4>
      <p class="desc">{{ item.desc }}</p>
      <p>招募：{{ item.maxNum }}人</p>
      <button class="btn btn-secondary" @click="joinTeam(index)">我要加入</button>
    </div>
    <div v-if="teamList.length === 0" class="card empty-tip">暂时还没有组队，快来发起第一个！</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let localTeam = JSON.parse(localStorage.getItem('teamList')) || []
const teamList = ref(localTeam)
const newTeam = ref({
  title:'',
  maxNum:4,
  desc:''
})

const addTeam = ()=>{
  if(!newTeam.value.title.trim()){
    alert('请填写活动名称')
    return
  }
  teamList.value.push({...newTeam.value})
  localStorage.setItem('teamList', JSON.stringify(teamList.value))
  newTeam.value = { title:'', maxNum:4, desc:'' }
}
const joinTeam = (idx)=>{
  alert(`成功加入【${teamList.value[idx].title}】的组队！`)
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
  min-height: 80px;
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
