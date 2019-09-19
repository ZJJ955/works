<template>
  <div class="banner1">
    <ul class="banner_list">
      <li>
        <router-link :to="{ name: ''}" class="banner1-banner">
          <img src="../assets/images/banner_1.png" alt />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: ''}" class="banner1-banner">
          <img src="../assets/images/banner_2.png" alt />
        </router-link>
        <router-link :to="{ name: ''}" class="banner1-banner">
          <img src="../assets/images/banner_3.png" alt />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // props: ["url"],
  methods: {}
};
</script>

<style lang="less" scoped>
.banner1 {
  padding: 0.1rem 0;
  .banner_list {
    padding: 0.05rem;
    display: flex;
    li {
      width: 50%;
      padding: 0 0.05rem;
    }
    li:nth-child(1) {
      a {
        display: inline-block;
        width: 100%;
        height: 2.5rem;
        img {
          width: 100%;
          height: 2.5rem;
        }
      }
    }
    li:nth-child(2) {
      a {
        display: inline-block;
        width: 100%;
        height: 1.2rem;
        img {
          width: 100%;
          height: 1.2rem;
        }
      }
      a:nth-child(1) {
        margin-bottom: 0.05rem;
      }
      a:nth-child(2) {
        margin-top: 0.05rem;
      }
    }
  }
}
</style>
