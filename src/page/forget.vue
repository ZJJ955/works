<template>
  <div class="bg">
    <mt-header title="忘记密码">
      <router-link to slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="box">
      <mt-field class="input" placeholder="请输入用户名或手机号" type="text" v-model="username"></mt-field>
    </div>

    <div class="login">
      <mt-button type="primary" @click="save" :disabled="!username">获取密码</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    save() {
      if (localStorage.getItem(this.username)) {
        this.$messagebox.alert("1111");
      } else {
        this.$messagebox.alert("2222");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.mint-header {
  background: none;
  color: #8c9fac;
  border-bottom: 1px solid #f2f2f2;
}
.bg {
  width: 100%;
  height: 100vh;
}
.top {
  margin: 0.3rem 0;
  text-align: center;
  img {
    width: 0.8rem;
    height: 0.8rem;
  }
}
.box {
  width: 3rem;
  margin: 0.5rem auto;
  .mint-cell-wrapper {
    background: none;
    padding: 0.1rem 0;
  }
  .mint-cell {
    background: none;
    border-bottom: 1px solid #e7ebee;
  }
}
.login {
  width: 3rem;
  margin: 0.5rem auto 0;
  button {
    width: 3rem;
    height: 0.44rem;
  }
  p {
    margin-top: 1rem;
    color: #8c9fac;
    span {
      color: #26a2ff;
      font-weight: bold;
    }
  }
}
</style>