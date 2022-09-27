<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getDetailInfos } from "@/services"

// 组件的引入
import DetailSwipe from './cpns/detail-swipe.vue';

const router = useRouter();
const route = useRoute();

const houseId = route.params.houseId

// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data.data
})

const onClickLeft = () => {
  router.back();
}

</script>

<style lang="less" scoped>

</style>