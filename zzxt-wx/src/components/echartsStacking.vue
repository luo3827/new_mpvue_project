<style lang="scss">
  .carry-left{
    float: left;
  }
  .carry-right{
    float: right;
  }
  .carry-cf:after{
    content: "";
    display: block;
    clear: both;
  }
  .echart-main {
    width: 100%;
    /*图例*/
    .legend{
      width: 100%;
      .dis-box{
        display: inline-block;
        width: calc(100% / 4);
        line-height: 40px;

        .icon-style{
          width: 12px;
          height: 12px;
          margin-top: 14px;
          margin-right: 5px;
          display: inline-block;
        }
        span{
          display: inline-block;
          line-height: 40px;
          color: #333;
          font-size: 14px;
        }
      }
    }
    /*堆叠图*/
    .city-echart{
      margin-bottom: 10px;
    }
    .cls-title{
      color: #333;
      font-size: 14px;
    }
    .cls-number{
      color: #3e7fff;
      font-size: 14px;
    }
  }
</style>

<template>
  <div class="echart-main">
    <!--图例-->
    <div class="legend carry-cf">
      <div class="dis-box carry-left carry-cf">
        <i class="icon-style carry-left" :style="{backgroundColor: echartsConfig[0]}"></i><span class="carry-left">学前班数</span>
      </div>
      <div class="dis-box carry-left carry-cf">
        <i class="icon-style carry-left" :style="{backgroundColor: echartsConfig[1]}"></i><span class="carry-left">小学班数</span>
      </div>
      <div class="dis-box carry-left carry-cf">
        <i class="icon-style carry-left" :style="{backgroundColor: echartsConfig[2]}"></i><span class="carry-left">初中班数</span>
      </div>
      <div class="dis-box carry-left carry-cf">
        <i class="icon-style carry-left" :style="{backgroundColor: echartsConfig[3]}"></i><span class="carry-left">高中班数</span>
      </div>
    </div>
    <!--echarts堆叠图-->
    <div class="city-echart" v-for="(item,index) in chartData" :key="index">
      <div class="title-number carry-cf">
        <span class="cls-title carry-left">{{item.name}}</span>
        <span class="cls-number carry-right">{{item.total}}</span>
      </div>
      <div class="echarts-wrap" :style="{height: canvasHeight + 'px'}">
        <mpvue-echarts :echarts="echarts" :onInit="onInit" :canvasId="'canvasId'+index"/>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts'
  import mpvueEcharts from 'mpvue-echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/tooltip'

  let chart = null
  /* 自定义echarts组件样式与皮肤 */
  let skin1 = [
    '#00CCFF',
    '#0000CC',
    '#FF33FF',
    '#FF9900'
  ]
  let skin2 = [
    '#00c',
    '#fcc',
    '#1ff',
    '#f00'
  ]

  export default {
    components: {
      mpvueEcharts
    },
    props: {
      styleSkin: Array,
      chartData: Array
    },
    data () {
      return {
        echarts,
        canvasHeight: 0,
        option: null,
        dataArr: [], // 提供给series的数据数组
        echartsConfig: [], // echarts组件样式与皮肤数组
        couetIndex: 0
      }
    },
    onReady () {
      if (this.styleSkin === 'style1') {
        this.echartsConfig = skin1
      } else if (this.styleSkin === 'style2') {
        this.echartsConfig = skin2
      }
    },
    mounted () {
      if (this.chartData.length !== 0) {
        this.canvasHeight = 15
      }
    },
    methods: {
      onInit (canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        this.loopData(this.couetIndex)
        this.setChart(chart)
        chart.setOption(this.option)
        return chart
      },
      setChart () {
        let option = {
          backgroundColor: '#D1EEEE',
          barWidth: '15px',
          // tooltip: {
          //   trigger: 'axis'
          // },
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '0'
          },
          xAxis: {
            show: false,
            type: 'value',
            max: 2000
          },
          yAxis: {
            show: false,
            type: 'category',
            data: ['']
          },
          series: this.dataArr
        }
        this.option = option
      },
      /* 获取数据循环创建echart渲染格式 */
      loopData (index) {
        this.dataArr = [] // 初始化dataArr(清空)
        let dataInfo = this.chartData[index]
        for (let i = 0; i < dataInfo.infoData.length; i++) {
          let itemObj = {
            name: (dataInfo.infoData)[i].name,
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              color: this.echartsConfig[i]
            },
            data: (dataInfo.infoData)[i].data
          }
          this.dataArr.push(itemObj)
        }
        this.couetIndex = this.couetIndex + 1
      }
    },
    watch: {
      chartData: {
        // handler (newValue) {
        //   this.canvasHeight = newValue.length > 0 ? 15 : 0
        //   this.setChart()
        // },
        // deep: true
      }
    }
  }
</script>

