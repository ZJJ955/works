<template>
  <div>
    购物车
    {{$store.state.num}}
    <p>
      这是number{{ number }}
    </p>
    <!-- <button @click="addNum">点我更改数据</button> -->
    <tabBar :url="'car'"></tabBar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // number : this.$store.state.num
    }
  },
  computed: {
    number(){
      return this.$store.state.num
    }
  },
  created() {},
  mounted() {

  },
  methods: {
    jump(path) {
      this.$router.push({
        path
      });
    },
    addNum(){
      // this.$store.commit("add",{ a: 10, b: 234 })
      this.$store.dispatch("fnDemo")
    }
  }
};
</script>
<style lang="less" scoped>
</style>