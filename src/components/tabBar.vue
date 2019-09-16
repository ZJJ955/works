<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="/">
        <img slot="icon" src="../assets/images/banner1.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="car">
        <img slot="icon" src="../assets/images/banner2.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../assets/images/banner3.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: this.url
    };
  },
  props: ["url"],
  watch: {
    selected(val, oldVal) {
       this.$router.push({
        path: val
      });
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.mint-tabbar{
  position: fixed;
  height: .55rem;
}
</style>
