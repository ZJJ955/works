<template>
  <div>
    <mt-header title="购物车">
      <router-link to slot="left">
        <mt-button></mt-button>
      </router-link>
    </mt-header>

    <div class="car_list" v-for="(item, index) in swipeList" :key="index">
      <mt-checklist
        class="selected"
        v-model="item.isSelect"
        :options="['']"
        @change="change(item.isSelect,index)"
      ></mt-checklist>
      <img class="middle" :src="item.swipeImgAll" alt />
      <div class="right_wrap">
        <p class="title">{{item.title}}</p>
        <p class="guige">土豪金 - 64g</p>
        <p class="price">￥{{item.price}}</p>
      </div>
      <img class="del" src="../assets/images/icon_del.png" alt />
    </div>

    <footer>
      <div class="left">
        <mt-checklist
          class="select_all"
          title
          v-model="selectedAll"
          :options="['全选']"
          @change="changeAll(selectedAll.length)"
        ></mt-checklist>
        <div class="price_all">
          合计:
          <span>￥{{$store.state.allPrice}}</span>
        </div>
      </div>
      <div class="right" @click="add()">结算</div>
    </footer>
    <tabBar :url="'car'"></tabBar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedAll: [],
      selected1: [],
      selected2: [],
      swipeList: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$store.commit("noSelected");
    this.swipeList = this.$store.state.carList;
  },
  methods: {
    jump(path) {
      this.$router.push({
        path
      });
    },
    change(val, index) {
      let num = 0;
      this.$store.commit("selected", { select: val.length, index });
      for (let index = 0; index < this.swipeList.length; index++) {
        if (this.swipeList[index].isSelect.length == 1) {
          num++;
        }
      }
      if (num == this.swipeList.length) {
        this.selectedAll = ["全选"];
      } else {
        this.selectedAll = [];
      }
    },
    changeAll(val) {
      if (val == 1) {
        this.$store.commit("AllSelected");
      } else {
        this.$store.commit("noSelected");
      }
    },
    addNum() {
      // this.$store.commit("add",{ a: 10, b: 234 })
      // this.$store.dispatch("fnDemo");
    }
  }
};
</script>
<style lang="less" scoped>
.mint-header {
  background: none;
  color: #424242;
  border-bottom: 1px solid #f2f2f2;
}
.car_list {
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  padding: 0.1rem 0.15rem 0.1rem 0;
  position: relative;
  .del {
    width: 0.18rem;
    height: 0.18rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0.15rem;
  }
  .selected {
    flex: 2;
  }
  .middle {
    width: 0.9rem;
    height: 1rem;
    margin: 0 0.15rem;
    flex: 3;
  }
  .right_wrap {
    flex: 7;
    p {
      font-size: 0.14rem;
      color: #424242;
    }
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .guige {
      padding: 0.07rem 0;
      color: #a8a8a8;
    }
    .price {
      color: #ff5000;
    }
  }
}
footer {
  height: 0.5rem;
  border-top: 1px solid #f2f2f2;
  position: fixed;
  bottom: 0.55rem;
  left: 0;
  width: 100%;
  height: 0.5rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price_all {
      padding-right: 0.2rem;
      span {
        color: #ff5000;
      }
    }
  }
  .right {
    width: 35%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background: #ff9402;
    color: #fff;
    font-size: 0.16rem;
  }
}
</style>