<template>
<div>
  <h1>{{optionData.title}}</h1>
  <div class="echarts-wrap">
    <mpvue-echarts :echarts="echarts" :onInit="onInitEcharts" canvasId="demo-canvas" />
  </div>
</div>
  
</template>

<script>
import echarts from 'echarts/lib/echarts'
import mpvueEcharts from 'mpvue-echarts'

let chart = null

export default {
  components: {
    mpvueEcharts
  },
  props: ['optionData'],
  data () {
    return {
      echarts,
      option: {}
    }
  },
  methods: {
    onInitEcharts (canvas, width, height) {
      chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(chart)
      this.updateOption()
      chart.setOption(this.option)

      return chart
    },
    updateOption () {
      let option = {
        color: this.optionData.color,
        legend: {
          x: 'center',
          y: 'top',
          data: this.optionData.legendData
        },
        calculable: true,
        series: [
          {
            name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['50%', '65%'],
            roseType: 'radius', // 是否展示成南丁格尔图
            label: {
              normal: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: true
              }
            },
            data: this.optionData.data
          }
        ]
      }
      this.option = option
    }
  }
}
</script>

<style>
.echarts-wrap {
  width: 100%;
  height: 300px;
}
</style>
