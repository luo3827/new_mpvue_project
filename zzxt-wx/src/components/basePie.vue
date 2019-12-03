<template>
 <div>
  <h1>{{optionData.title}}</h1>
  <div class="echarts-container">
    <mpvue-echarts  :echarts="echarts" :onInit="onInitEcharts" canvasId="base-pie"></mpvue-echarts>
  </div>
</div>
</template>

<script>
  import echarts from 'echarts'
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
          legend: {
            orient: 'vertical',
            x: 'left',
            data: this.optionData.legendData
          },
          series: [
            {
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: true
                  // position: 'center'
                }
              },
              labelLine: {
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
.echarts-container {
  width: 100%;
  height: 300px;
}
</style>
