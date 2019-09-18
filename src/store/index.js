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
        price: "1099.00",
        oldPrice: "1599.00",
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
        price: "1050.00",
        oldPrice: "1559.00",
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
        price: "9.90",
        oldPrice: "14.90",
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
    shoppList: [{
        id: "129120512111572268",
        swipeImg: [
          require("../assets/images/details1_banner1.png"),
          require("../assets/images/details1_banner2.png"),
          require("../assets/images/details1_banner3.png")
        ],
        title: "Apple/苹果 iPhone XS Max苹果xsmax苹果11pro xr",
        depict: "极具潜能的芯片，不仅机器学习能力翻倍，更为智能手机开启了新的可能。",
        price: "6666.00",
        oldPrice: "8850.00",
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
        swipeImg: [
          require("../assets/images/details2_banner1.png"),
          require("../assets/images/details2_banner2.png"),
          require("../assets/images/details2_banner3.png")
        ],
        title: "Xiaomi/小米 Redmi K20 Pro 新品4800万三摄骁龙855手机",
        depict: "极具潜能的芯片，不仅机器学习能力翻倍，更为智能手机开启了新的可能。",
        price: "2099",
        oldPrice: "3299",
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
        swipeImg: [
          require("../assets/images/details3_banner1.png"),
          require("../assets/images/details3_banner2.png"),
          require("../assets/images/details3_banner3.png")
        ],
        title: "Midea/美的 MB80ECO 8公斤kg波轮小型洗衣机 全自动家用大容量",
        depict: "波轮小型洗衣机 全自动家用大容量。",
        price: "999.00",
        oldPrice: "1299.00",
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
        swipeImg: [
          require("../assets/images/details4_banner1.png"),
          require("../assets/images/details4_banner2.png"),
        ],
        title: "【自营】折叠凳子户外便携式钓鱼凳",
        depict: "户外便携式钓鱼凳",
        price: "45.5",
        oldPrice: "69.99",
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
        swipeImg: [
          require("../assets/images/details5_banner1.png"),
          require("../assets/images/details5_banner2.png"),
        ],
        title: "SIEMENS/西门子 SK23E810TI 6套(A版)*台式全自动家用洗碗机",
        depict: "全自动家用洗碗机",
        price: "4199.00",
        oldPrice: "5999.00",
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
    detailsArr: []
  },
  mutations: {
    detailsArr_jump(state, data) {
      state.detailsArr = data;
    },
  },
  actions: {
    fnDemo(store) {
      // console.log(arguments)
    }

  }
})

export default store;
