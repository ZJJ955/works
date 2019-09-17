<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <router-link :to="{ name: 'my'}">
          <img src="../assets/images/swipe1.png" alt />
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link :to="{ name: 'my'}">
          <img src="../assets/images/swipe2.png" alt />
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link :to="{ name: 'my'}">
          <img src="../assets/images/swipe3.png" alt />
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <shopp1></shopp1>
    <banner1></banner1>
    <shopp2></shopp2>
    <tabBar :url="'/'"></tabBar>

    <!-- <div id="container" style="width: 100%;height: 2rem;"></div> -->
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
    // var map = new BMap.Map("container"); // 创建地图实例
    // var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    // map.centerAndZoom(point, 15);
    // map.enableScrollWheelZoom(true); //启用滚轮放大缩小，默认禁用
    // map.enableContinuousZoom(true); //启用地图惯性拖拽，默认禁用
    // map.addControl(new BMap.NavigationControl());
    // map.addControl(new BMap.ScaleControl());
    // map.addControl(new BMap.GeolocationControl());
    // function myFun(result) {
    //   var cityName = result.name;
    //   map.setCenter(cityName);
    //   // alert("当前定位城市:" + cityName);
    // }
    // var myCity = new BMap.LocalCity();
    // myCity.get(myFun);
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
.home {
  margin-bottom: 0.55rem;
}
.mint-swipe {
  width: 100%;
  height: 2rem;
  a,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>