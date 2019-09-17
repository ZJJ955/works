<template>
  <div>
    <headerBack :title="'设置'"></headerBack>
    <div class="list_wrap">
      <router-link class="list" :to="{ name: 'setting'}">
        <div class="left">
          <span>修改手机号</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>

      <router-link class="list" :to="{ name: 'setting'}">
        <div class="left">
          <span>修改登陆密码</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>

      <router-link class="list" :to="{ name: 'setting'}">
        <div class="left">
          <span>设置支付密码</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>
    </div>
    <mt-button class="btn" type="default" @click="signout">退出</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    signout() {
      localStorage.removeItem('token');
      this.$router.push({
        path: 'login'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.list_wrap {
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
}
.btn {
  display: block;
  margin: 2.5rem auto 0;
  width: 2rem;
  height: 0.44rem;
}
.mint-button::after {
  background: #f6f8fa;
}
</style>