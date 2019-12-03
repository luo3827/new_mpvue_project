<template>
  <div class="echarts-container">
    <baseBar :optionData="optionData1"></baseBar>
    <baseBar :optionData="optionData2"></baseBar>
  </div>
</template>

<script>
import baseBar from '../../components/baseBar'

export default {
  components: {
    baseBar
  },
  data () {
    return {
      optionData1: {
        id: 'base-bar-row',
        isRow: true,
        title: '每天客流量1',
        name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [120, 200, 150, 80, 70, 110, 130],
        color: ['#a52ea7']
      },
      optionData2: {
        id: 'base-bar-col',
        isRow: false,
        title: '每天客流量2',
        name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [120, 200, 150, 80, 70, 110, 130],
        color: ['#a52ea7']
      }
    }
  }
}
</script>

<style>
</style>
