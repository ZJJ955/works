import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    swipeList: [{
        id: "12713052111572268",
        swipeImgAll: require("../assets/images/swipe1_bannerAll.png"),
        swipeImg: [
          require("../assets/images/swipe1_banner1.png"),
          require("../assets/images/swipe1_banner2.png")
        ],
        title: "Midea/美的电热水器F6021-V3C家用60L小型储水式淋浴速热智能变频",
        depict: "小型储水式淋浴速热智能变频。",
        price: 1099.00,
        oldPrice: 1599.00,
        selectList1title: '颜色',
        selectList1: ["太空银", "白色"],
        selectList2title: '功率',
        selectList2: ["1800W", "2000W", "2300W"],
        detailsImg: [
          require("../assets/images/swipe1_details1.png"),
          require("../assets/images/swipe1_details2.png"),
        ]
      },
      {
        id: "12713052115572268",
        swipeImgAll: require("../assets/images/swipe2_bannerAll.png"),
        swipeImg: [
          require("../assets/images/swipe2_banner1.png"),
          require("../assets/images/swipe2_banner2.png")
        ],
        title: "宝石矿工18k玫瑰金钻石手链女au750黄金单钻手镯彩金真钻手链正品",
        depict: "黄金单钻手镯彩金真钻手链",
        price: 1050.00,
        oldPrice: 1559.00,
        selectList1title: '颜色',
        selectList1: ["18k黄金", "18k白金"],
        selectList2title: '钻石净度',
        selectList2: ["SI/小瑕"],
        detailsImg: [
          require("../assets/images/swipe2_details1.png"),
          require("../assets/images/swipe2_details2.png"),
          require("../assets/images/swipe2_details3.png"),
        ]
      },
      {
        id: "301912211572268",
        swipeImgAll: require("../assets/images/swipe3_bannerAll.png"),
        swipeImg: [
          require("../assets/images/swipe3_banner1.png"),
          require("../assets/images/swipe3_banner2.png"),
          require("../assets/images/swipe3_banner3.png"),
        ],
        title: "江南蜂王 杂花蜂蜜 百花蜂蜜 天然蜂蜜零添加",
        depict: "百花蜂蜜 天然蜂蜜零添加",
        price: 9.90,
        oldPrice: 14.90,
        selectList1title: '蜂种',
        selectList1: ["野生蜂蜜", "养殖蜂蜜"],
        selectList2title: '重量',
        selectList2: ["180g", "380g", "1000g"],
        detailsImg: [
          require("../assets/images/swipe3_details1.png"),
          require("../assets/images/swipe3_details2.png"),
        ]
      },
    ],
    shopp1List: [{
        id: "1271305225572268",
        swipeImgAll: require("../assets/images/shopp1_banner1_all.png"),
        swipeImg: [
          require("../assets/images/shopp1_banner1_1.png"),
          require("../assets/images/shopp1_banner1_2.png"),
        ],
        title: "保温壶旅行壶304不锈钢大容量保温瓶 车载真空保温水壶 户外暖水壶热水壶1.2L 星航月夜黑",
        depict: "保温壶旅行壶304不锈钢大容量保温瓶",
        price: 49.00,
        oldPrice: 99.00,
        selectList1title: '颜色',
        selectList1: ["月夜黑", "冰河蓝"],
        selectList2title: '容量',
        selectList2: ["1.2L", "1.5L", "2L"],
        detailsImg: [
          require("../assets/images/shopp1_details1_1.png"),
        ]
      },
      {
        id: "127130520012268",
        swipeImgAll: require("../assets/images/shopp1_banner2_all.png"),
        swipeImg: [
          require("../assets/images/shopp1_banner2_1.png"),
          require("../assets/images/shopp1_banner2_2.png")
        ],
        title: "儿童趣味滑翔车轨道车益智玩具1-2-3岁男孩女孩玩具宝宝生日礼物 灰色滑翔车（4只小车）",
        depict: "灰色滑翔车",
        price: 11.95,
        oldPrice: 29.99,
        selectList1title: '颜色',
        selectList1: ["粉色滑翔车", "灰色滑翔车"],
        selectList2title: '配件',
        selectList2: ["4只小车", "6只小车"],
        detailsImg: [
          require("../assets/images/shopp1_details2_1.png"),
        ]
      },
      {
        id: "1271120520012268",
        swipeImgAll: require("../assets/images/shopp1_banner3_all.png"),
        swipeImg: [
          require("../assets/images/shopp1_banner3_1.png"),
          require("../assets/images/shopp1_banner3_2.png")
        ],
        title: "炒锅30CM 麦饭石色不粘锅平底锅 少油烟健康炒菜锅 电磁炉煤气通用 送硅胶锅铲",
        depict: "电磁炉煤气通用",
        price: 210.95,
        oldPrice: 329.99,
        selectList1title: '大小',
        selectList1: ["30cm", "32cm"],
        selectList2title: '锅底',
        selectList2: ["平底进口不粘", "螺纹锅底进口不粘"],
        detailsImg: [
          require("../assets/images/shopp1_details3_1.png"),
          require("../assets/images/shopp1_details3_2.gif"),
        ]
      },
      {
        id: "127130010012268",
        swipeImgAll: require("../assets/images/shopp1_banner4_all.png"),
        swipeImg: [
          require("../assets/images/shopp1_banner4_1.png"),
          require("../assets/images/shopp1_banner4_2.png")
        ],
        title: "瑞士双肩包运动商务背包男士笔记本多功能电脑包休闲学生防盗书包旅游出差旅行包三级包 15.6英寸升级版【USB充电+密码锁】",
        depict: "双肩包运动商务背包",
        price: 91.95,
        oldPrice: 219.99,
        selectList1title: '颜色',
        selectList1: ["黑色", "灰色"],
        selectList2title: '大小',
        selectList2: ["15.6英寸", "17.3英寸"],
        detailsImg: [
          require("../assets/images/shopp1_details4_1.png"),
        ]
      },
      {
        id: "127130520012268",
        swipeImgAll: require("../assets/images/shopp1_banner5_all.png"),
        swipeImg: [
          require("../assets/images/shopp1_banner5_1.png"),
        ],
        title: "联想Z5s 6GB+128GB 钛晶蓝 骁龙710AIE 后置AI变焦三摄 6.3英寸水滴屏 渐变玻璃机身 全网通4G手机 双卡双待",
        depict: "灰色滑翔车",
        price: 1098.95,
        oldPrice: 1229.99,
        selectList1title: '颜色',
        selectList1: ["土豪金", "太空银", "喜庆红", "炫紫色", "墨绿色"],
        selectList2title: '内存',
        selectList2: ["64G", "128G", "256G"],
        detailsImg: [
          require("../assets/images/shopp1_details5_1.png"),
        ]
      },
    ],
    shoppList: [{
        id: "129120512111572268",
        swipeImgAll: require("../assets/images/details1_banner1.png"),
        swipeImg: [
          require("../assets/images/details1_banner1.png"),
          require("../assets/images/details1_banner2.png"),
          require("../assets/images/details1_banner3.png")
        ],
        title: "Apple/苹果 iPhone XS Max苹果xsmax苹果11pro xr",
        depict: "极具潜能的芯片，不仅机器学习能力翻倍，更为智能手机开启了新的可能。",
        price: 6666.00,
        oldPrice: 8850.00,
        selectList1title: '颜色',
        selectList1: ["土豪金", "太空银", "喜庆红", "炫紫色", "墨绿色"],
        selectList2title: '内存',
        selectList2: ["32G", "64G", "128G", "256G"],
        detailsImg: [
          require("../assets/images/details1_1.png"),
          require("../assets/images/details1_2.png"),
          require("../assets/images/details1_3.png"),
          require("../assets/images/details1_4.png")
        ]
      },
      {
        id: "12912051299111511268",
        swipeImgAll: require("../assets/images/details2_banner1.png"),
        swipeImg: [
          require("../assets/images/details2_banner1.png"),
          require("../assets/images/details2_banner2.png"),
          require("../assets/images/details2_banner3.png")
        ],
        title: "Xiaomi/小米 Redmi K20 Pro 新品4800万三摄骁龙855手机",
        depict: "三摄骁龙855手机",
        price: 2099,
        oldPrice: 3299,
        selectList1title: '颜色',
        selectList1: ["碳纤黑", "火焰红", "冰川蓝"],
        selectList2title: '内存',
        selectList2: ["8+128GB", "6+64GB", "6+128GB", "8+256GB"],
        detailsImg: [
          require("../assets/images/details2_1.png"),
          require("../assets/images/details2_2.png"),
          require("../assets/images/details2_3.png"),
        ]
      },
      {
        id: "129120512156211572268",
        swipeImgAll: require("../assets/images/details3_banner1.png"),
        swipeImg: [
          require("../assets/images/details3_banner1.png"),
          require("../assets/images/details3_banner2.png"),
          require("../assets/images/details3_banner3.png")
        ],
        title: "Midea/美的 MB80ECO 8公斤kg波轮小型洗衣机 全自动家用大容量",
        depict: "波轮小型洗衣机 全自动家用大容量。",
        price: 999.00,
        oldPrice: 1299.0,
        selectList1title: '颜色',
        selectList1: ["黑色", "太空银"],
        selectList2title: '大小',
        selectList2: ["8kg", "12kg", "20kg", "25kg"],
        detailsImg: [
          require("../assets/images/details3_1.png"),
          require("../assets/images/details3_2.png"),
        ]
      },
      {
        id: "129116212111572268",
        swipeImgAll: require("../assets/images/details4_banner1.png"),
        swipeImg: [
          require("../assets/images/details4_banner1.png"),
          require("../assets/images/details4_banner2.png"),
        ],
        title: "【自营】折叠凳子户外便携式钓鱼凳",
        depict: "户外便携式钓鱼凳",
        price: 45.5,
        oldPrice: 69.99,
        selectList1title: '颜色',
        selectList1: ["中号-卡其", "大号-绿色"],
        selectList2title: '承受重量',
        selectList2: ["50kg以内", "80KG内"],
        detailsImg: [
          require("../assets/images/details4_1.png"),
          require("../assets/images/details4_2.png"),
          require("../assets/images/details4_3.png"),
        ]
      },
      {
        id: "12912051216221572268",
        swipeImgAll: require("../assets/images/details5_banner1.png"),
        swipeImg: [
          require("../assets/images/details5_banner1.png"),
          require("../assets/images/details5_banner2.png"),
        ],
        title: "SIEMENS/西门子 SK23E810TI 6套(A版)*台式全自动家用洗碗机",
        depict: "全自动家用洗碗机",
        price: 4199.00,
        oldPrice: 5999.00,
        selectList1title: '颜色',
        selectList1: ["太空银", "黑色"],
        selectList2title: '类型',
        selectList2: ["中等", "大型"],
        detailsImg: [
          require("../assets/images/details5_1.png"),
          require("../assets/images/details5_2.png"),
          require("../assets/images/details5_3.png"),
          require("../assets/images/details5_4.png")
        ]
      },
    ],
    detailsArr: [],
    allPrice: 0,
    carList: [],
  },
  mutations: {
    detailsArr_jump(state, data) {
      state.detailsArr = data;
    },
    selected(state, data) {
      if (data.select == 1) {
        state.carList[data.index].isSelect = [''];
        state.allPrice += Number(state.carList[data.index].allPrice);

      } else {
        state.carList[data.index].isSelect = [];
        if (state.allPrice > 0) {
          state.allPrice -= Number(state.carList[data.index].allPrice);
        }
      }
    },
    noSelected(state) {
      if (state.carList.length != 0) {
        for (let index = 0; index < state.carList.length; index++) {
          state.carList[index].isSelect = [];
        }
      }

      state.allPrice = 0;
    },
    AllSelected(state) {
      state.allPrice = 0;
      for (let index = 0; index < state.carList.length; index++) {
        state.carList[index].isSelect = [''];
        state.allPrice += state.carList[index].allPrice;
      }
    },
    pushCarList(state, data) {
      state.carList = data;
    },
    del(state, data) {
      let index = '';
      for (let i = 0; i < state.carList.length; i++) {
        if (state.carList[i].id == data.id) {
          index = i;
        }
      }
      if (data.isSelect.length != 0) {
        for (let j = 0; j < state.carList.length; j++) {
          if (j == data.inex) {
            state.allPrice -= Number(state.carList[j].allPrice);
          }
        }
      }
      state.carList.splice(index, 1);
    },
    settlement(state) {
      let num = []
      for (let index = 0; index < state.carList.length; index++) {
        if (state.carList[index].isSelect.length == 1) {
          num.push(index);
        }
      }
      for (let j = num.length - 1; j >= 0; j--) {
        state.carList.splice(j, 1);
      }
      if (state.carList.length != 0) {
        for (let i = 0; i < state.carList.length; i++) {
          state.carList[i].isSelect = [];
        }
      }
      state.allPrice = 0;
    }
  },
  actions: {
    fnDemo(store) {
      // console.log(arguments)
    }

  }
})

export default store;
