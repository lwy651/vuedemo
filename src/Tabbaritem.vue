<template>
  <router-link :to= "{path: itemdata.url }" class='index-footerTab'>
    <svg class="footer_Tabitem">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf(itemdata.url)!==-1?itemdata.icon[1]:itemdata.icon[0]">
      </use>
    </svg>
    <span class='index-footerTabText'>{{itemdata.text}}</span>
  </router-link>
</template>
<script>
export default {
  name: 'Tabbaritem',
  icons: [],
  data () {
    return {
    }
  },
  computed: {
    iconName () {
      return '#discover.3cd85b8'
    }
  },
  props: ['itemdata']
}
</script>

<style>
.footer_Tabitem{
  width: .533333rem;
  width: 5.333333vw;
  height: .533333rem;
  height: 5.333333vw
}
  .index-footerTabText {
    display: block;
    color: #666;
    font-size: .266667rem;
  }
  .index-footerTab {
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
  }
  .router-link-exact-active {
    color: #0089dc
  }
  .router-link-exact-active span {
    color: #0089dc
  }
</style>
