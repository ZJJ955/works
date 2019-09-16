<template>
  <div class="wrap">
    <p>糖果工厂</p>
    <div class="now">
        当前的糖果数量：{{candyNum}}
    </div>
    <audio style="display: none;" controls="controls" autoplay loop src="../static/images/dong.mp3"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
        candyNum: 100.00
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(../assets/images/candy_bg.gif);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>