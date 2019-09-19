<template>
  <div>
    <div class="back" @click="$router.back(-1)">
      <img src="../assets/images/back.png" alt />
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in detailsArr.swipeImg" :key="index">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>

    <div class="title">
      <p class="price">
        ￥{{detailsArr.price}}
        <span>￥{{detailsArr.oldPrice}}</span>
      </p>
      <h2>
        {{detailsArr.title}}
        <span>(已选 {{selected1}} - {{selected2}})</span>
      </h2>
      <div class="jieshao">{{detailsArr.depict}}</div>
    </div>
    <div class="select_wrap">
      <div class="left">{{detailsArr.selectList1title}}</div>
      <div class="select">
        <span
          v-for="(item, index) in detailsArr.selectList1"
          :key="index"
          @click="selectOn1(item)"
          :class="{'active': selected1 == item }"
        >{{item}}</span>
      </div>
    </div>

    <div class="select_wrap">
      <div class="left">{{detailsArr.selectList2title}}</div>
      <div class="select">
        <span
          v-for="(item, index) in detailsArr.selectList2"
          :key="index"
          @click="selectOn2(item)"
          :class="{'active': selected2 == item }"
        >{{item}}</span>
      </div>
    </div>

    <div class="num_wrap">
      <div class="left">数量</div>
      <div class="right">
        <span class="minus" @click="minus">
          <i class="row"></i>
        </span>
        <div class="input_wrap">
          <input type="number" v-model="num" />
        </div>
        <span class="plus" @click="plus">
          <i class="row"></i>
          <i class="col"></i>
        </span>
      </div>
    </div>

    <div class="details_list">
      <div class="list_title">
        ———
        <img src="../assets/images/icon_details.png" alt /> 详情 ———
      </div>
      <img v-for="(item, index) in detailsArr.detailsImg" :key="index" v-lazy="item" alt />
    </div>

    <footer>
      <div class="left">
        <router-link to="/">
          <img src="../assets/tabbar/home.png" alt />
        </router-link>
        <router-link to="car" class="car">
          <img src="../assets/tabbar/car.png" alt />

          <span v-if="$store.state.carList.length != 0">{{$store.state.carList.length}}</span>
        </router-link>
      </div>
      <div class="right" @click="add()">加入购物车</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailsArr: [],
      selected1: "",
      selected2: "",
      num: 1,
      allPrice: 0,
      carList: []
    };
  },
  mounted() {
    this.detailsArr = this.$store.state.detailsArr.val;
    this.carList = this.$store.state.carList;
    this.selected1 = this.detailsArr.selectList1[0];
    this.selected2 = this.detailsArr.selectList2[0];
  },
  methods: {
    //选择颜色
    selectOn1(val) {
      this.selected1 = val;
    },
    //选择内存
    selectOn2(val) {
      this.selected2 = val;
    },
    //减
    minus() {
      if (this.num > 1) {
        this.num = parseInt(this.num);
        this.num--;
        this.allPrice = this.num * this.detailsArr.price;
      }
    },
    //加
    plus() {
      this.num = parseInt(this.num);
      this.num++;
      this.allPrice = this.num * this.detailsArr.price;
    },
    //加入购物车
    add() {
      if (this.allPrice == 0) {
        this.allPrice = this.detailsArr.price;
      }
      this.$messagebox
        .confirm(
          `商品名称:${this.detailsArr.title}</br>` +
            `价格:￥${this.allPrice}</br>` +
            `${this.detailsArr.selectList1title}:${this.selected1}</br>` +
            `${this.detailsArr.selectList2title}:${this.selected2}</br>` +
            `商品ID:${this.detailsArr.id}</br>`
        )
        .then(
          action => {
            this.carList.push({
              allPrice: this.allPrice,
              num: Number(this.num),
              selected1: this.selected1,
              selected2: this.selected2,
              ...this.detailsArr
            });
            this.$store.commit("pushCarList", this.carList);
            this.$toast({
              message: "添加成功",
              duration: 1500
            });
          },
          function(err) {}
        );
    }
  }
};
</script>

<style lang="less" scoped>
.back {
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  text-align: center;
  z-index: 1;
  img {
    width: 0.24rem;
    height: 0.24rem;
  }
}
.mint-swipe {
  width: 100%;
  height: 3.75rem;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.title {
  padding: 0.1rem;
  h2 {
    font-size: 0.18rem;
    color: #333;
    font-weight: bold;
    span {
      color: #ee7150;
      font-weight: initial;
    }
  }
  .price {
    margin-bottom: 0.1rem;
    color: #e4393c;
    font-size: 0.2rem;
    font-weight: bold;
    span {
      font-size: 0.12rem;
      text-decoration: line-through;
      color: #999;
    }
  }
  .jieshao {
    margin-top: 0.1rem;
    color: #666;
    font-size: 0.14rem;
  }
}
.select_wrap {
  padding: 0.1rem 0.1rem 0;
  .left {
    color: #666;
    font-size: 0.14rem;
    margin-bottom: 0.1rem;
  }
  .select {
    margin-bottom: 0.15rem;
    span {
      margin-right: 0.15rem;
      padding: 6px 10px;
      border: 1px solid #6f6f6f;
      color: #6f6f6f;
      font-size: 0.14rem;
      display: inline-block;
      margin-bottom: 0.1rem;
    }
    span:last-child {
      margin: 0;
    }
    .active {
      border: 1px solid #ee7150;
      color: #ee7150;
    }
  }
}
.num_wrap {
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
  .left {
    font-size: 0.14rem;
    color: #666;
  }
  .right {
    width: 1.1rem;
    display: flex;
    span {
      max-width: 0.3rem;
      min-width: 0.3rem;
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.3rem;
      display: block;
      text-align: center;
      background: #f7f7f7;
      position: relative;
      .row {
        border-radius: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -0.07rem;
        width: 0.14rem;
        height: 2px;
        background: #ccc;
      }
      .col {
        border-radius: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -0.06rem;
        margin-left: -0.01rem;
        height: 0.14rem;
        width: 2px;
        background: #ccc;
      }
    }
    .input_wrap {
      width: 0.45rem;
      margin: 0 0.5px;
      input {
        height: 0.3rem;
        width: 100%;
        color: #333;
        background: #f7f7f7;
        font-size: 0.14rem;
        text-align: center;
        border: none;
      }
    }
  }
}
.details_list {
  margin-bottom: 0.5rem;
  .list_title {
    background-color: #f2f2f2;
    color: #999;
    font-size: 0.12rem;
    text-align: center;
    padding: 0.1rem 0;
    img {
      width: 0.12rem;
      height: 0.12rem;
      vertical-align: middle;
    }
  }
  img {
    width: 100%;
  }
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 50%;
    text-align: center;
    display: inline-block;
    a {
      padding: 0 0.2rem;
      img {
        width: 0.32rem;
        height: 0.32rem;
      }
    }
    .car {
      position: relative;
      span {
        position: absolute;
        right: 0.23rem;
        top: -0.15rem;
        height: 0.2rem;
        width: 0.2rem;
        line-height: 0.2rem;
        background-color: #ffaa00;
        border-radius: 50%;
        color: #fff;
        font-size: 12px;
      }
    }
  }
  .right {
    width: 50%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background: #ff9402;
    color: #fff;
    font-size: 0.16rem;
  }
}
</style>