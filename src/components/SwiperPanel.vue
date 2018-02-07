<template>
  <div>
    <swiper :options="swiperOption" class="swiper-wrapper"  ref="swiper-box">
      <swiper-slide class="swiper-slide"><img style="width:100%;height:100%;" src="https://img.alicdn.com/imgextra/i1/73/TB2Ws_NXiQnBKNjSZFmXXcApVXa_!!73-0-luban.jpg_q50.jpg"></swiper-slide>
      <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 4</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'SwiperPanel',
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs['swiper-box'].swiper
    }
  }
}
</script>
<style>
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #eee;
  }
  .swiper-slide {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform
  }
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .swiper-pagination-bullet-active{
    background: #FB635A
  }
</style>
