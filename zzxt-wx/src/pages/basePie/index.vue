<template>
  <div class="echarts-container">
    <basePie :optionData="optionData"></basePie>
  </div>
</template>

<script>
import basePie from '../../components/basePie'

export default {
  components: {
    basePie
  },
  data () {
    return {
      optionData: {}
    }
  },
  mounted () {
    this.optionData = {
      title: '基础环形图',
      color: ['#8dcaea', '#ffd85c', '#dd6b66', '#de7e7b', '#3698cc', '#d0b704'],
      legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  }
}
</script>

<style>
</style>
