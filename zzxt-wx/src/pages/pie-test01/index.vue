<template>
  <div>
    <view class="pie-container">
      <pieChart :chartData="chartData"/>
    </view>
    <view class="stack-bar">
      <stacked-bar-row :chartData="stackedBarData" canvasId="stackedbar"/>
    </view>
    <view class="stack-bar">
      <echartsStacking :chartData="echartsInfo" styleSkin="style1"></echartsStacking>
    </view>

  </div>

</template>

<script>
  import pieChart from '../../components/pieChart3'
  import stackedBarRow from '../../components/stackedBarRow'
  import echartsStacking from '../../components/echartsStacking'
  export default {
    components: {
      pieChart,
      stackedBarRow,
      echartsStacking
    },
    data () {
      return {
        chartData: [
          [
            {value: '886', name: '小学增加', itemStyle: {color: '#2386e7'}},
            {value: '886', name: '全部', itemStyle: {color: '#F2F3F0'}}
          ],
          [
            {value: '153', name: '初中增加', itemStyle: {color: '#de5a7a'}},
            {value: '2961', name: '全部', itemStyle: {color: '#F2F3F0'}}
          ],
          [
            {value: '216', name: '高中增加', itemStyle: {color: '#6f11b9'}},
            {value: '3028', name: '全部', itemStyle: {color: '#F2F3F0'}}
          ]
        ],
        stackedBarData: {
          largeInfo: {
            name: '各学段资助堆积图'
          },
          color: ['#2386e7', '#3D00B9', '#DE23CE', '#FFB825'],
          yAxis: ['学前', '义务', '普高', '中职', '本专科', '研究生'],
          xAxis: [
            {
              name: '国家资助',
              value: [320, 302, 301, 334, 390, 330]
            },
            {
              name: '地方资助',
              value: [120, 132, 101, 134, 90, 230]
            },
            {
              name: '社会资助',
              value: [220, 182, 191, 234, 290, 330]
            },
            {
              name: '学校资助',
              value: [150, 212, 201, 154, 190, 330]
            }
          ]
        },
        echartsInfo: [ // 横向多个堆叠图
          {
            name: '榆林市',
            total: '2542',
            infoData: [
              {name: '学前班数', data: [445]},
              {name: '小学班数', data: [515]},
              {name: '初中班数', data: [47]},
              {name: '高中班数', data: [111]}
            ]
          },
          {
            name: '宝鸡市',
            total: '2452',
            infoData: [
              {name: '学前班数', data: [123]},
              {name: '小学班数', data: [675]},
              {name: '初中班数', data: [324]},
              {name: '高中班数', data: [487]}
            ]
          },
          {
            name: '延安市',
            total: '1542',
            infoData: [
              {name: '学前班数', data: [698]},
              {name: '小学班数', data: [355]},
              {name: '初中班数', data: [154]},
              {name: '高中班数', data: [345]}
            ]
          },
          {
            name: '铜川市',
            total: '1542',
            infoData: [
              {name: '学前班数', data: [147]},
              {name: '小学班数', data: [254]},
              {name: '初中班数', data: [410]},
              {name: '高中班数', data: [256]}
            ]
          },
          {
            name: '西安市',
            total: '1666',
            infoData: [
              {name: '学前班数', data: [456]},
              {name: '小学班数', data: [458]},
              {name: '初中班数', data: [123]},
              {name: '高中班数', data: [200]}
            ]
          }
        ]
      }
    }
  }
</script>

<style>
  .pie-container{
    width: 100vw;
    height: 180px;
  }
</style>
