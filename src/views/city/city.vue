<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
        v-model="searchValue"
        show-action
        placeholder="城市/区域/位置"
        shape="round"
        @cancel="cancelClick"
      />
      <!-- 2.tab的切换 -->
      <!-- tabActive默认索引 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :group-data="currentGroup"></city-group> -->
      <template v-for="(value, key, index) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';

import CityGroup from "./cpns/city-group.vue"

  const router = useRouter();

  // 搜索框功能
  const searchValue = ref("")
  const cancelClick = () => {
    router.back()
  }

  // search tab的切换
  const tabActive = ref();

  // 从stores拿到city数据
  const cityStore = useCityStore();
  cityStore.fetchAllCitiesData();
  const { allCities } = storeToRefs(cityStore)

  const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  // 布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>