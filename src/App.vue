<template>
  <div>
    <header class="headerInfo">
      <div class="headerInfo_title">
        一休家电维修
      </div>
    </header>
    <footer>
      <div class='index-footer_Gtduid'>
        <Tabbaritem v-for = '(item, index) in items' :key='index' :itemdata= 'item' />
      </div>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabbaritem from '@/Tabbaritem'
export default {
  name: 'app',
  components: {
    Tabbaritem
  },
  data () {
    return {
      items: [
        {
          text: '主页',
          url: '/index',
          icon: ['#index-regular.f67031c', '#index.b8d51ef']
        },
        {
          text: '订单',
          url: '/order',
          icon: ['#order-regular.e1ebaca', '#order.5fa2fba']
        },
        {
          text: '我的',
          url: '/user',
          icon: ['#profile-regular.813faec', '#profile.e6a81e5']
        }
      ]
    }
  }
}
</script>

<style>
*,::after,::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent
}
a {
  outline: 0;
  color: inherit;
  text-decoration: none
}
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #f5f5f5;
  color: #333;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  line-height: 1.2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
}
body,button,dd,dl,ol,ul {
  margin: 0;
  padding: 0
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.index-wrapper {
  height: 1.6rem;
  height: 16vw;
}
.index-footer_Gtduid {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding-top: 0.12rem;
  padding-top: 1.2vw;
  background-color: #fff;
  height: 1.333333rem;
  height: 13.333333vw;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
}
.headerInfo{
  padding: .266667rem .373333rem 0;
  padding: 2.666667vw 3.733333vw 0;
  background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  background-image: linear-gradient(90deg,#0af,#0085ff);
  color: #fff
}
.headerInfo.headerInfo-cyYks {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.headerInfo_title{
  height:9.2vw;
  align-items: center;
  display:flex;
  font-weight: 700;
}
</style>
