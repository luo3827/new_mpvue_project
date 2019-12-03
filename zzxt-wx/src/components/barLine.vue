<template>
<div>
  <h1>{{optionData.title}}</h1>
  <div class="echarts-wrap">
    <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas" />
  </div>
</div>
  
</template>

<script>
import echarts from 'echarts/lib/echarts'
import mpvueEcharts from 'mpvue-echarts'
import 'echarts/lib/chart/line'

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
    onInit (canvas, width, height) {
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
          top: 10,
          right: '5%',
          data: this.optionData.legendData
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: this.optionData.xAxisData
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '价格',
            max: this.optionData.yAxis[0].max,
            min: this.optionData.yAxis[1].min,
            interval: 10,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            name: '预购量',
            max: this.optionData.yAxis[1].max,
            min: this.optionData.yAxis[1].min,
            interval: 60,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0]
              }
            },
            name: '预购队列',
            type: 'bar',
            barWidth: 10,
            yAxisIndex: 1,
            data: this.optionData.data[1]
          },
          {
            name: '最新成交价',
            type: 'line',
            yAxisIndex: 0,
            data: this.optionData.data[0]
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
  height: 400px;
}
</style>
