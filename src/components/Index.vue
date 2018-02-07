<template>
<div>
  <div class="search_wrapper">
    <div role="button" class="search" style="top: 0px; z-index: 999;">
      <a class="content">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search">
          </use>
        </svg>
        <span>搜索服务、保养小知识</span>
      </a>
    </div>
  </div>
  <SwiperPanel></SwiperPanel>
</div>
</template>

<script>
import SwiperPanel from './SwiperPanel.vue'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    SwiperPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,button,dd,dl,ol,ul {
  margin: 0;
  padding: 0
}
.search_wrapper{
  position: sticky;
}
.search,.search-wrapper {
  background-image: -webkit-gradient(linear,left top,right top,from(#FD7962),to(#FB635A));
  background-image: -webkit-linear-gradient(left,#FD7962,#FB635A);
  background-image: linear-gradient(90deg,#FD7962,#FB635A)
}
.search {
  padding: .2rem .373333rem;
  padding: 2vw 3.733333vw;
  margin: -.013333rem 0;
  margin: -.133333vw 0
}
.search_wrapper:after,.search_wrapper:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  background-image: -webkit-gradient(linear,left top,right top,from(#FD7962),to(#FB635A));
  background-image: -webkit-linear-gradient(left,#FD7962,#FB635A);
  background-image: linear-gradient(90deg,#FD7962,#FB635A)
}
.search>.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: .96rem;
  height: 9.6vw;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: .026667rem;
  border-radius: .266667vw;
  background: #fff;
  color: #999;
  font-size: .373333rem
}
.search>.content>svg {
  display: inline-block;
  width: .426667rem;
  width: 4.266667vw;
  height: .426667rem;
  height: 4.266667vw;
  margin-right: .133333rem;
  margin-right: 1.333333vw
}

.search>.content>span {
  font-family: simsun
}
</style>
