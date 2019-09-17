<template>
  <div>
    <div class="list_wrap">
      <router-link class="list" :to="{ name: 'home'}">
        <div class="left">
          <img src="../assets/images/mylist_1.png" alt />
          <span>我的资产</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>

      <router-link class="list" :to="{ name: 'home'}">
        <div class="left">
          <img src="../assets/images/mylist_2.png" alt />
          <span>我的优惠</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>
    </div>

    <div class="list_wrap">
      <router-link class="list" :to="{ name: 'home'}">
        <div class="left">
          <img src="../assets/images/mylist_3.png" alt />
          <span>服务中心</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>

      <router-link class="list" :to="{ name: 'home'}">
        <div class="left">
          <img src="../assets/images/mylist_4.png" alt />
          <span>客服热线</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>
    </div>

    <div class="list_wrap border_no">
      <router-link class="list" :to="{ name: 'candy'}">
        <div class="left">
          <img src="../assets/images/mylist_5.png" alt />
          <span>糖果工厂</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.list_wrap {
  border-bottom: 10px solid #f2f2f2;
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.15rem 0.2rem;
    border-bottom: 1px solid #b9b9b924;
    .left {
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 0.2rem;
        vertical-align: middle;
      }
      span {
        font-size: 0.15rem;
      }
    }
    .right {
      img {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }
  .list:last-child {
    border: none;
  }
}
.border_no{
  border: none;
  .list{
    border-bottom: 1px solid #b9b9b924 !important;
  }
}
</style>
