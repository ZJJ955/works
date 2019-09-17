<template>
  <div class="my">
    <div class="box">
      <div class="touxiang">
        <img class="left" src="../assets/images/banner5.png" alt />
        <p>{{username}}</p>
        <router-link class="right" :to="{name: 'setting'}">
          <img src="../assets/images/setting.png" alt />
        </router-link>
      </div>
    </div>
    <div class="order">
      <router-link class="my-indent" :to="{ name: 'home'}">
        <span class="my-indent-left">我的订单</span>
        <div class="my-indent-right">
          <span>全部订单</span>
          <img src="../assets/images/icon_right.png" alt />
        </div>
      </router-link>
    </div>
    <div class="order_list">
      <router-link :to="{ name: 'car'}">
        <img src="../assets/images/my_order1.png" alt />
        <p>待付款</p>
      </router-link>
      <router-link :to="{ name: ''}">
        <img src="../assets/images/my_order2.png" alt />
        <p>待收货</p>
      </router-link>
      <router-link :to="{ name: ''}">
        <img src="../assets/images/my_order3.png" alt />
        <p>退还/售后</p>
      </router-link>
    </div>

    <myList></myList>

    <!-- <div class="title2">Interests</div>
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
          <img src="../assets/images/banner1.png" alt />
          <img src="../assets/images/banner4.png" alt />
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
    </div> -->

    <tabBar :url="'my'"></tabBar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: ''
    };
  },
  mounted(){
    this.username = localStorage.getItem('username');
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
  border-bottom: 1px solid #ddd;
  .touxiang {
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 200px;
      box-shadow: 0 0 0.1rem #999;
    }
    p {
      color: #414141;
    }
    .right {
      img {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }
}
.order {
  .my-indent {
    width: 100%;
    box-sizing: border-box;
    color: #333;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    border-bottom: 1px solid #b9b9b924;
    .my-indent-right {
      span {
        display: inline-block;
        color: #c2c2c2;
        position: relative;
      }
      img {
        width: 0.24rem;
        height: 0.24rem;
        vertical-align: middle;
      }
    }
  }
}
.order_list {
  border-bottom: 10px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.4rem;
  a {
    text-align: center;
    img {
      width: 0.24rem;
      height: 0.24rem;
      margin-bottom: 0.1rem;
    }
    p {
      font-size: 0.14rem;
    }
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
  .left {
    width: 1rem;
  }
  .cont {
    width: 1rem;
    padding-top: 0.1rem;
  }
  .right {
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