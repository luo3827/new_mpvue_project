<template>
  <div class="echarts-list-container">
    <van-grid square clickable column-num="3" border="false">
      <van-grid-item v-for="(item, index) in list" :key="index"
        link-type="navigateTo"
        :url="item.url"
        :text="item.text"
      />
    </van-grid>
  </div>
</template>

<script>

export default {

  data () {
    return {
      list: [
        {url: '/pages/baseBar/main', text: '基础柱形图'},
        {url: '/pages/rosePie/main', text: '南丁格尔图'},
        {url: '/pages/baseLine/main', text: '基础折线图'},
        {url: '/pages/basePie/main', text: '基础环形图'},
        {url: '/pages/pie-test01/main', text: '混合图'},
        {url: '/pages/barAndLine/main', text: '柱形折线混合图'}
      ]
    }
  }
}
</script>

<style>
.echarts-list-container{
  padding: 10px 20px;
}
</style>
