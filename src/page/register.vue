<template>
  <div class="bg">
    <mt-header title="注册">
      <router-link to="/sign" slot="left">
        <mt-button>取消</mt-button>
      </router-link>
    </mt-header>
    <div class="top">
      <img src="../assets/images/banner5.png" alt />
    </div>
    <div class="box">
      <mt-field class="input" placeholder="请输入用户名" type="text" v-model="username"></mt-field>
      <mt-field class="input" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="login">
      <mt-button type="primary" @click="login">注册</mt-button>
      <div class="forget">忘记密码</div>
      <p>
        已有登陆账号？
        <span @click="jump('login')">去登陆</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    jump(path) {
      this.$router.push({
        path
      });
    },
    login() {
      if (!this.username) {
        this.$toast("请输入用户名");
        return false;
      } else if (!this.password) {
        this.$toast("请输入密码");
        return false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.mint-header {
  background: none;
  color: #8c9fac;
  width: 3rem;
  margin: 0 auto;
  padding: 0;
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
  margin: 0 auto;
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
  .forget{
      color: #26a2ff;
      margin-top: .3rem;
  }
  p{
    margin-top: 1rem;
    color: #8C9FAC;
    span{
      color: #26a2ff;
      font-weight: bold;
    }
  }
}
</style>