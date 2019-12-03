<template>
  <div class="echarts-wrap">
    <rosePie :optionData="optionData" />
  </div>
</template>

<script>
import rosePie from '../../components/rosePie'

export default {
  components: {
    rosePie
  },
  data () {
    return {
      optionData: {}
    }
  },
  mounted () {
    this.optionData = {
      title: '南丁格尔玫瑰图',
      color: ['#8dcaea', '#ffd85c', '#dd6b66', '#de7e7b', '#3698cc', '#d0b704'],
      legendData: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6'],
      data: [
        {value: 10, name: 'rose1'},
        {value: 17, name: 'rose2'},
        {value: 15, name: 'rose3'},
        {value: 25, name: 'rose4'},
        {value: 20, name: 'rose5'},
        {value: 35, name: 'rose6'}
      ]
    }
  }
}
</script>

<style>
.echarts-wrap {
  width: 100%;
  height: 100vh;
}
</style>
