<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from '@/pages/home/components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
