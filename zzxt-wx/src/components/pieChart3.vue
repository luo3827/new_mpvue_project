<template>
  <mpvue-echarts lazyLoad :echarts="echarts" :onInit="initChartColumn" canvasId="canvasColumn" ref="echarts"/>
</template>

<script>
  import echarts from 'echarts/lib/echarts'
  import mpvueEcharts from 'mpvue-echarts'
  import 'echarts/lib/chart/pie'

  let chartPie = null

  export default {
    components: {
      mpvueEcharts
    },
    props: {
      chartData: Object
    },
    data () {
      return {
        echarts,
        canvasHeight: 180,
        option: null
      }
    },
    mounted () {
      console.log(this.chartData)
      if (this.chartData.length !== 0 && !this.chartData.ifEmpty) {
        this.canvasHeight = 180
        this.setChart()
      }
    },
    methods: {
      initChartColumn (canvas, width, height) {
        chartPie = echarts.init(canvas, null, {
          width: width,
          height: 180
        })
        canvas.setChart(chartPie)
        chartPie.setOption(this.option)

        return chartPie
      },
      setChart () {
        let option = {
          series: [
            {
              type: 'pie',
              radius: ['30%', '40%'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              label: {
                normal: {
                  show: false
                }
              },
              data: this.chartData[0]
            },
            {
              type: 'pie',
              radius: ['50%', '60%'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              label: {
                normal: {
                  show: false
                }
              },
              data: this.chartData[1]
            },
            {
              type: 'pie',
              radius: ['70%', '80%'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              label: {
                normal: {
                  show: false
                }
              },
              data: this.chartData[2]
            }
          ]
        }

        this.option = option
        console.log(this.$refs)
        this.$refs.echarts.init()
      }
    }
  }
</script>

<style scoped>

</style>
