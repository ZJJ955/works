<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="/">
        <img slot="icon" v-if="url != '/'" src="../assets/tabbar/home.png" />
        <img slot="icon" v-if="url == '/'" src="../assets/tabbar/home_active.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="car">
        <img slot="icon" v-if="url != 'car'" src="../assets/tabbar/car.png" />
        <img slot="icon" v-if="url == 'car'" src="../assets/tabbar/car_active.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" v-if="url != 'my'" src="../assets/tabbar/my.png" />
        <img slot="icon" v-if="url == 'my'" src="../assets/tabbar/my_active.png" />
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
