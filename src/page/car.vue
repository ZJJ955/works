<template>
  <div>
    购物车
    <tabBar :url="'car'"></tabBar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {

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
</style>