<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
    <home-categories/>
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
    </div>
    <home-content/>
  </div>
</template>

<script setup>

import { watch } from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue';
import HomeContent from './cpns/home-content.vue';
import SearchBar from '@/components/search-bar/search-bar.vue'

import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll'
import { computed } from '@vue/reactivity';

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// 监听页面滚动hook
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 定义的可响应式数据, 依赖另外一个可响应式的数据, 那么可以使用计算函数(computed)
// 和显示搜索框
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 44px;
}

.banner {
  img {
    width: 100%;
  }
}

</style>