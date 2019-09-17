<template>
  <div class="shopp2">
    <h1 class="shopp2-title">
      <img src="../assets/images/shopp2_title.png" alt="">
    </h1>
    <ul class="section2-list">
      <li v-for="k in 3" :key="k.id">
        <router-link :to="{name:'my'}">
          <img src="../assets/images/shopp2_1.png" alt />
        </router-link>
        <h3>华为 HUAWEI P30Pro手机【分期免息/享碎屏险/当天发】 天空之境 全网通(8GB 128GB)送华为无线充电器</h3>
        <div class="price">
          ￥2000起
          <span>￥1899</span>
        </div>
      </li>
    </ul>
    <div class="more">
      <router-link :to="{name:'my'}">更多优惠产品 ></router-link>
    </div>
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
.shopp2 {
  .shopp2-title {
    padding: 0.1rem 0;
    color: #333;
    img {
      vertical-align: middle;
      width: 100%;
      height: 0.35rem;
    }
  }
  .section2-list {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 0 0.05rem;
    li {
      width: 50%;
      box-sizing: border-box;
      padding: 0 0.05rem;
      a {
        display: block;
        width: 100%;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
      }
      h3 {
        width: 100%;
        height: 0.31rem;
        font-size: 0.13rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        padding: 0.1rem 0 0.05rem;
      }
      .price {
        text-align: center;
        padding-bottom: 0.2rem;
        color: #b4282d;
        span {
          font-size: 0.14rem;
          color: #0000008a;
          text-decoration: line-through;
        }
      }
    }
  }
  .more {
    border-top: 1px solid #ccc;
    text-align: center;
    padding: 0.1rem 0;
    a {
      color: #333;
    }
  }
}
</style>
