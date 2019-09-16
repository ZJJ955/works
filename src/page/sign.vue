<template>
  <div>
    <mt-swipe class="swipe" :auto="4000">
      <mt-swipe-item>
        <img src="../assets/images/banner1.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/banner2.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/banner3.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/banner4.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/banner5.png" alt />
      </mt-swipe-item>
    </mt-swipe>

    <div class="btn">
      <mt-button type="danger" @click="jump('register')">注册</mt-button>
      <mt-button type="primary" @click="jump('login')">登陆</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created() {

  },
  methods: {
      jump(path){
          this.$router.push({
              path
          })
      }
  }
};
</script>

<style lang="less" scoped>
.swipe {
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.btn {
  position: fixed;
  bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 1rem;
    height: 0.44rem;
    margin: 0 0.1rem;
  }
}
</style>