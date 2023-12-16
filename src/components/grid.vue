<script setup>
import {ref,reactive} from 'vue'
import myvideo from './video.vue';

const data = reactive({
  url:'/minio-path/rms/all/2023/12/01/6773cb76-a598-49cc-b18d-e063d67140f4-' + encodeURIComponent('中国八大阶级分层现状——当代中国社会各阶级的分析.mp4')
})

// console.log(data.url);

</script>

<template>
  
  <div class="container">
    <div class="child">
      <!-- <myvideo :datas=data ></myvideo> -->
      <myvideo :datas=data></myvideo>
    </div>
  </div>
</template>

<style scoped>
/* .container{
  height: 800px;
  width: 600px;
} */
/* .child{
  display: flex;
  justify-content: center;
  align-items: center; 
} */
</style>
