<script setup>
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/get_asset'
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  console.log(router)
  router.push(item.path)
}

</script>
<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key>
      <div class="tab-bar-item" :class="{ active: currentIndex === index }" @click="itemClick(index, item)">
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>


<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  // left: 0;
  // right: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #333;

  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px;
    }

    .text {
      margin-top: 2px;
      font-size: 12px;
    }


  }
}
</style>