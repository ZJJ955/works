<template>
  <div class="shopp1">
    <h1 class="shopp1-title">
      <img src="../assets/images/shopp1_title.png" alt />
      秒杀商品
    </h1>
    <div class="cont">
      <ul>
        <li>
          <router-link :to="{name:'sign'}">
            <img src="../assets/images/shopp1_1.png" alt />
          </router-link>
          <h2>￥19.88</h2>
          <p>￥9.99</p>
        </li>
        <li>
          <router-link :to="{name:'sign'}">
            <img src="../assets/images/shopp1_2.png" alt />
          </router-link>
          <h2>￥19.88</h2>
          <p>￥9.99</p>
        </li>
        <li>
          <router-link :to="{name:'sign'}">
            <img src="../assets/images/shopp1_3.png" alt />
          </router-link>
          <h2>￥19.88</h2>
          <p>￥9.99</p>
        </li>
        <li>
          <router-link :to="{name:'sign'}">
            <img src="../assets/images/shopp1_4.png" alt />
          </router-link>
          <h2>￥19.88</h2>
          <p>￥9.99</p>
        </li>
        <li>
          <router-link :to="{name:'sign'}">
            <img src="../assets/images/shopp1_5.png" alt />
          </router-link>
          <h2>￥19.88</h2>
          <p>￥9.99</p>
        </li>
      </ul>
    </div>

    <router-link :to="{ name: 'my'}" class="shopp1-banner">
      <img src="../assets/images/shopp1_banner.gif" alt />
    </router-link>
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
.shopp1 {
  .shopp1-title {
    text-align: center;
    padding: 0.1rem 0;
    color: #333;
    img {
      vertical-align: middle;
      width: 0.16rem;
      height: 0.16rem;
      border-radius: 200px;
    }
  }
  .cont {
    overflow-x: scroll;
    ul {
      display: flex;
      padding: 0.1rem;
      li {
        margin-right: 10vw;
        width: 26vw;
        img {
          display: block;
          width: 0.66rem;
        }
        h2 {
          text-align: center;
          padding-top: 0.1rem;
          color: #e93b3d;
          font-size: 0.14rem;
        }
        p {
          text-align: center;
          text-decoration: line-through;
          font-size: 0.12rem;
          color: #999;
        }
      }
    }
  }

  .shopp1-banner {
    display: block;
    width: 100%;
    img {
      width: 100%;
      height: 1rem;
    }
  }
}
</style>
