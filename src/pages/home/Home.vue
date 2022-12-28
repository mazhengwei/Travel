<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from '@/pages/home/components/Swiper.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    HomeSwiper,
    HomeHeader
  }
}
</script>

<style scoped>

</style>
