<template>
  <div>
    <div class="pie-chart-header">
      <div class="pie-chart-light"></div>
      <div class="pie-chart-name">{{chartData.largeInfo.name}}</div>
    </div>
    <div class="column-chart-wrap" :style="{height: canvasHeight + 'px'}" v-if="!chartData.ifEmpty">
      <mpvue-echarts :echarts="echarts"  :onInit="initChartColumn" :canvasId="canvasId" ref="echarts"></mpvue-echarts>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts'
  import mpvueEcharts from 'mpvue-echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/tooltip'
  // const  chartData = {
  //   largeInfo: {
  //     name: '各学段资助堆积图'
  //   },
  //   color: ['#2386e7', '#3D00B9', '#DE23CE', '#FFB825'],
  //     yAxis: ['学前', '义务', '普高', '中职', '本专科', '研究生'],
  //     xAxis: [
  //     {
  //       name: '国家资助',
  //       value: [320, 302, 301, 334, 390, 330]
  //     },
  //     {
  //       name: '地方资助',
  //       value: [120, 132, 101, 134, 90, 230]
  //     },
  //     {
  //       name: '社会资助',
  //       value: [220, 182, 191, 234, 290, 330]
  //     },
  //     {
  //       name: '学校资助',
  //       value: [150, 212, 201, 154, 190, 330]
  //     }
  //   ]
  // }
  let chartBar = null

  export default {
    components: {mpvueEcharts},
    props: {
      chartData: Object,
      canvasId: String
    },
    data () {
      return {
        echarts,
        option: null,
        legend: {
          data: [],
          itemWidth: 14
        },
        series: [],
        canvasHeight: 0
      }
    },
    mounted () {
      console.log(this.chartData)
      if (this.chartData.yAxis.length !== 0 && !this.chartData.yAxis.ifEmpty) {
        this.legend.data = this.chartData.xAxis.map((item) => {
          return item.name
        })
        this.series = this.chartData.xAxis.map((item) => {
          return {
            name: item.name,
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
              normal: {
                show: false
              }
            },
            data: item.value
          }
        })
        this.canvasHeight = this.chartData.yAxis.length * 50
        console.log(this.canvasHeight)
        this.setChart()
      }
    },
    methods: {
      initChartColumn (canvas, width, height) {
        chartBar = echarts.init(canvas, null, {
          width: width,
          height: this.chartData.yAxis.length * 50
        })
        canvas.setChart(chartBar)
        chartBar.setOption(this.option)

        return chartBar
      },
      setChart () {
        let option = {
          tooltip: {
            trigger: 'axis',
            // confine: true,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
              height: 30
            },
            position: function (point, params, dom, rect, size) {
              // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
              var obj = ['50%', '50%']
              if (point[1] < (size.viewSize[1] - params.length * 30)) {
                obj = ['50%', point[1]]
              } else {
                let bottom = point[1] - params.length * 30 / 2
                obj = ['50%', bottom]
              }
              return obj
            }
          },
          color: this.chartData.color,
          legend: this.legend,
          grid: {
            left: '3%',
            right: '4%',
            top: 30,
            bottom: '0',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            show: false
          },
          yAxis: {
            type: 'category',
            data: this.chartData.yAxis,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          series: this.series
        }

        this.option = option
        this.$refs.echarts.init()
      }
    }
  }
</script>

<style scoped>
  .pie-chart-header {
    display: flex;
    align-items: center;
  }
  .pie-chart-light {
    width: 8rpx;
    height: 34rpx;
    background-color:#2568ED;
    border-radius: 4rpx;
    margin-right: 12rpx;
  }
  .pie-chart-name {
    flex: 1;
    font-size: 34rpx;
    font-weight: bold;
    color: #000000;
  }
</style>
