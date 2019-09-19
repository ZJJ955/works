<template>
  <div class="shopp1">
    <h1 class="shopp1-title">
      <img src="../assets/images/shopp1_title.png" alt />
      秒杀商品
    </h1>
    <div class="cont">
      <ul>
        <li v-for="(item, index) in shopp1List" :key="index" @click="jump(item)">
          <img :src="item.swipeImgAll" alt />
          <h2>￥{{item.price}}</h2>
          <p>￥{{item.oldPrice}}</p>
        </li>
      </ul>
    </div>

    <router-link :to="{ name: 'home'}" class="shopp1-banner">
      <img src="../assets/images/shopp1_banner.gif" alt />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopp1List: []
    };
  },
  mounted() {
    this.shopp1List = this.$store.state.shopp1List;
  },
  methods: {
    jump(val) {
      this.$store.commit("detailsArr_jump", { val });
      this.$router.push({
        path: "details"
      });
    }
  }
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
