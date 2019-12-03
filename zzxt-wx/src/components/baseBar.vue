<template>
<div>
  <h1>{{optionData.title}}</h1>
  <div class="echarts-container">
    <mpvue-echarts  :echarts="echarts" :onInit="onInitEcharts" :canvasId="optionData.id"></mpvue-echarts>
  </div>
</div>
  
</template>

<script>
import mpvueEcharts from 'mpvue-echarts'
import echarts from 'echarts'
var chart = null

export default {
  components: {mpvueEcharts},
  props: ['optionData'],
  data () {
    return {
      echarts,
      option: {},
      xAxis: {},
      yAxis: {},
      barBorderRadius: [5, 5, 0, 0]
    }
  },
  methods: {
    initData () {
      if (this.optionData.isRow) {
        this.xAxis = {
          type: 'category',
          data: this.optionData.name
        }
        this.yAxis = {
          type: 'value'
        }
        this.barBorderRadius = [5, 5, 0, 0]
      } else {
        this.yAxis = {
          type: 'category',
          data: this.optionData.name
        }
        this.xAxis = {
          type: 'value'
        }
        this.barBorderRadius = [0, 5, 5, 0]
      }
    },
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
      this.initData()
      let option = {
        color: this.optionData.color,
        grid: {
          left: '3%',
          right: '4%',
          bottom: '5%',
          top: 20,
          containLabel: true
        },
        yAxis: this.yAxis,
        xAxis: this.xAxis,
        series: [
          {
            type: 'bar',
            barGap: '-100%', // 不同系列的柱间距离
            barCategoryGap: '40%', // 同一系列的柱间距离
            animation: false
          },
          {
            itemStyle: {
              normal: {
                barBorderRadius: this.barBorderRadius
              }
            },
            type: 'bar',
            barWidth: 10,
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
.echarts-container {
  width: 100%;
  height: 300px;
}
</style>
