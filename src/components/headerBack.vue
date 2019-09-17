<template>
  <div>
    <mt-header :title="title">
      <router-link to slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title"],
  methods: {}
};
</script>

<style lang="less" scoped>
.mint-header {
  background: none;
  color: #8c9fac;
  border-bottom: 1px solid #f2f2f2;
}
</style>
