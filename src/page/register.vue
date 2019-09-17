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
      <mt-field class="input" placeholder="请输入用户名或手机号" type="text" v-model="username"></mt-field>
      <mt-field class="input" placeholder="请输入密码" type="password" v-model="psd"></mt-field>
      <mt-field class="input" placeholder="请重输密码" type="password" v-model="psd_confirm"></mt-field>
    </div>
    <div class="tips">提示：用户名或手机号随机填，但务必记住，且登陆使用</div>

    <div class="login">
      <mt-button type="primary" @click="register" :disabled="!username || !psd || !psd_confirm">注册</mt-button>
      <p>
        已有登陆账号？
        <span @click="jump('login')">去登陆</span>
      </p>
    </div>
  </div>
</template>
<script>
import components from "../components/components";
export default {
  data() {
    return {
      username: "",
      psd: "",
      psd_confirm: ""
    };
  },
  methods: {
    jump(path) {
      this.$router.push({
        path
      });
    },
    register() {
      if (this.psd != this.psd_confirm) {
        this.$toast("密码不一致！");
        return false;
      }
      components.SetStorage(this.username, this.psd).then(res => {
        if (res) {
          this.$toast("注册成功!");
          setTimeout(() => {
            this.$router.push({
              path: "login"
            });
          }, 2000);
        } else {
          this.$toast("用户名或手机号已存在!");
          return false;
        }
      });
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
  .forget {
    color: #26a2ff;
    margin-top: 0.3rem;
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
.tips {
  color: red;
  font-size: 0.12rem;
  text-align: center;
  margin-top: .1rem;
}
</style>