<template>
  <div class="my">
    <div class="box">
      <div class="title">Project</div>
      <div class="touxiang">
        <img src="../assets/images/banner1.png" alt />
      </div>
      <div class="name">Mayme Campbell</div>
    </div>
    <div class="title2">Interests</div>
    <div class="Interests">
      <span>mountains</span>
      <span>fashion</span>
      <span>Paris</span>
      <span>summer</span>
      <span>New York</span>
    </div>
    <div class="title2">Pictures</div>
    <div>
      <div class="Pictures">
        <div class="left">
          <img src='../assets/images/banner1.png' alt  />
          <img src='../assets/images/banner4.png' alt  />
        </div>
        <div class="cont">
          <img src="../assets/images/banner2.png" alt />
          <img src="../assets/images/banner5.png" alt />
        </div>
        <div class="right">
          <img src="../assets/images/banner3.png" alt />
          <img src="../assets/images/banner1.png" alt />
        </div>
      </div>
    </div>

    <tabBar :url="'my'"></tabBar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>
<style lang="less" scoped>
.my {
  margin-bottom: 0.55rem;
}
.box {
  background: #faf6f6;
  border-bottom: 1px solid #ddd;
  .title {
    padding: 0.2rem;
    font-size: 0.3rem;
    color: #ff9b00;
  }
  .touxiang {
    text-align: center;
    img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 200px;
      box-shadow: 0 0 0.1rem #999;
    }
  }
  .name {
    text-align: center;
    padding: 0.2rem 0;
    color: #212121;
    font-size: 0.2rem;
  }
}
.title2 {
  padding: 0.2rem;
  font-size: 0.2rem;
  color: #212121;
}
.Interests {
  padding: 0 0.2rem 0.2rem;
  span {
    display: inline-block;
    padding: 0.1rem 0.15rem;
    border-radius: 200px;
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
    color: #fff;
  }
  span:nth-child(1) {
    background: #c595e2;
  }
  span:nth-child(2) {
    background: #f2ca97;
  }
  span:nth-child(3) {
    background: #6746e2;
  }
  span:nth-child(4) {
    background: #46d2e2;
  }
  span:nth-child(5) {
    background: #e24653;
    margin-right: 0;
  }
}
.Pictures {
  padding: 0 0.2rem;
  width: 3.35rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .left{
    width: 1rem;
  }
  .cont{
    width: 1rem;
    padding-top: .1rem;
  }
  .right{
    width: 1rem;
  }
  img {
    width: 1rem;
    height: 1.5rem;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 0.1rem;
  }
}
</style>