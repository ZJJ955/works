<template>
  <div>
    <mt-search class="search" v-model="search" cancel-text="取消" placeholder="搜索"></mt-search>
    <p @click="jump('candy')">糖果</p>

    <div id="container" style="width: 100%;height: 2rem;"></div>
    <tabBar :url="'/'"></tabBar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  created() {},
  mounted() {
    var map = new BMap.Map("container"); // 创建地图实例
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true); //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom(true); //启用地图惯性拖拽，默认禁用
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.GeolocationControl());

    function myFun(result) {
      var cityName = result.name;
      map.setCenter(cityName);
      // alert("当前定位城市:" + cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
  },
  methods: {
    jump(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>
<style lang="less" scoped>
.search{
  height: auto;
}
</style>