<template>
  <div class="echarts-wrap">
    <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas" />
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import mpvueEcharts from 'mpvue-echarts'
import 'echarts/lib/component/title'
import 'echarts/lib/chart/line'

let chart = null

export default {
  components: {
    mpvueEcharts
  },
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
        title: {
          text: '折线图堆叠',
          x: 'center'
        },
        legend: {
          top: '30',
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '100',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
