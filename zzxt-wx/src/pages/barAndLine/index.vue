<template>
  <div class="echarts-wrap">
    <barLine :optionData="optionData" />
  </div>
</template>

<script>
import barLine from '../../components/barLine'

export default {
  components: {
    barLine
  },
  data () {
    return {
      optionData: {}
    }
  },
  mounted () {
    this.optionData = {
      title: '一周最新成交价和预购队列统计图',
      color: ['#8dcaea', '#ffd85c'],
      legendData: ['最新成交价', '预购队列'],
      data: [
        [12, 40, 30, 25, 18, 21, 35],
        [120, 132, 101, 134, 90, 230, 210]
      ],
      yAxis: [
        {max: 50, min: 0},
        {max: 300, min: 0}
      ],
      xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  }
}
</script>

<style>
.echarts-wrap {
  width: 100%;
  height: 400px;
}
</style>
