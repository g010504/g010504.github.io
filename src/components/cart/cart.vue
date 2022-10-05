<template>
  <div class="cart">
    <div class="cart-title">我的购物车</div>
    <table class="cart-table">
      <tr>
        <th width="60">
          <div class="cart-all-box">
            <span class="cart-all">全选</span>
            <span
              ><input type="checkbox" class="cart-check" v-model="selectCheck"
            /></span>
          </div>
        </th>
        <th>图片</th>
        <th width="200">名称</th>
        <th width="200">单价</th>
        <th width="200">数量</th>
        <th width="200">小计</th>
        <th width="80">操作</th>
      </tr>
      <tr class="cart-item" v-for="(item, index) in goodsList" :key="index">
        <td>
          <input type="checkbox" class="cart-check" v-model="item.flag" />
        </td>
        <td>
          <span class="cart-img"><img :src="item.small_img" alt="" /></span>
        </td>
        <td class="cart-txt-left">
          <span class="cart-name">{{ item.name }}</span>
        </td>
        <td>
          <span class="cart-price">{{ item.price }}</span>
        </td>
        <td>
          <div class="number">
            <button
              class="cart-reduce"
              :disabled="item.count == 1"
              @click="cartReduce(index)"
            >
              -
            </button>
            <span class="cart-num">{{ item.count }}</span>
            <button class="cart-add" @click="cartAdd(index)">+</button>
          </div>
        </td>

        <td>
          <span class="cart-subtotal">{{ item.price * item.count }}</span>
        </td>
        <td><span class="cart-del" @click="del(index)">删除</span></td>
      </tr>
      <el-empty v-show="show" description="空空如也，去逛逛"></el-empty>

      <tr class="cart-bottom">
        <td colspan="7">
          <span class="cart-bottom-span"
            >已选择<span class="cart-total-num">{{ allNum }}</span
            >件商品</span
          >
          <span class="cart-bottom-span"
            >总计：<span class="cart-total-price">￥{{ total }}</span></span
          >
          <span class="cart-bottom-btn" @click="goPay">去结算</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      computed: false,
      show: false,
      goodsList: [],
      filerGoods: [],
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      token: "",
      sid: [],
      p: "",
    };
  },
  methods: {
    //删除商品信息
    del(index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          var sids = [];
          sids.push(this.goodsList[index].sid);
          console.log(sids);
          var de = JSON.stringify(sids);
          console.log(de);
          let str = `sids=${de}&appkey=${this.appkey}&tokenString=${this.token}`;
          this.axios({
            method: "POST",
            url: "/deleteShopcart",
            data: str,
          }).then((res) => {
            console.log(res);
            if (res.data.code == 7001) {
              this.$message({
                type: "info",
                message: "删除失败!",
              });
              return;
            }
            if (res.data.code == 700) {
              this.goodsList.splice(index, 1);
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //增加商品数量
    cartAdd(index) {
      var sid = this.goodsList[index].sid;
      var count = this.goodsList[index].count;
      var num = ++count;
      var str = `count=${num}&sid=${sid}&appkey=${this.appkey}&tokenString=${this.token}`;
      this.axios({
        method: "POST",
        url: "/modifyShopcartCount",
        data: str,
      }).then((res) => {
        if (res.data.code == "6000") {
          this.goodsList[index].count++;
        }
      });
    },
    //减少商品数量
    cartReduce(index) {
      var sid = this.goodsList[index].sid;
      var count = this.goodsList[index].count;
      var num = --count;
      var str = `count=${num}&sid=${sid}&appkey=${this.appkey}&tokenString=${this.token}`;
      this.axios({
        method: "POST",
        url: "/modifyShopcartCount",
        data: str,
      }).then((res) => {
        if (res.data.code == "6000") {
          this.goodsList[index].count--;
        }
      });
    },
    //获取购物车数据
    getcartData() {
      this.axios({
        method: "get",
        url: "/findAllShopcart",
        params: {
          appkey: this.appkey,
          tokenString: this.token,
        },
      }).then((res) => {
        res.data.result.forEach((item) => {
          item.flag = false;
        });
        this.goodsList = res.data.result;
        if (res.data.result.length == 0) {
          this.show = true;
        }
        if (res.data.result.length > 0) {
          this.computed = true;
          this.show = false;
        }
      });
    },
    //结算
    goPay() {
      var sid = [];
      this.filerGoods.forEach((item) => {
        sid.push(item.sid);
      });
      if (sid == "") {
        this.$message({
          type: "warning",
          message: "请选择商品",
        });
        return;
      }
      if (sid !== "") {
        this.$router.push({
          path: "/accounts",
          query: { sids: sid, p: this.total, c: this.allNum },
        });
        // let pictureUrl = this.$router.resolve({
        //   path: "/picture",
        //   query: { id: 96 },
        // });
        // window.open(pictureUrl.href, "_blank");
      }
    },
  },
  created() {
    //获取token
    if (!this.$cookies.get("TOKEN")) {
      let loginURL = this.$router.resolve({
        path: "/login",
      });
      window.open(loginURL.href, "_blank");
      return;
    }
    this.token = this.$cookies.get("TOKEN");
    this.getcartData();
  },
  computed: {
    //计算商品数量、价格
    allNum() {
      const filGoods = this.goodsList.filter((item) => {
        return item.flag; //将标志为true的商品过滤出来
      });
      this.filerGoods = filGoods;
      let allNum = 0;
      filGoods.forEach((item) => {
        allNum = allNum + item.count;
      });
      return allNum;
    },
    total() {
      let totalPrice = 0;
      this.filerGoods.forEach((item) => {
        totalPrice = totalPrice + item.count * item.price;
      });
      return totalPrice;
    },
    //全选功能
    selectCheck: {
      get() {
        if (this.computed) {
          const filGoods = this.goodsList.filter((item) => {
            return item.flag; //将标志为true的商品过滤出来
          });
          this.filerGoods = filGoods;
          return this.goodsList.length == this.filerGoods.length;
        }
      },
      set(value) {
        this.goodsList.forEach((goods) => {
          //goods:表示每一个商品
          goods.flag = value;
        });
      },
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  min-height: 400px;
  max-height: 700px;
  padding: 0 10px 10px;
  border: 1px solid #d5e5f5;
  margin: auto;
  position: relative;
}

.cart-title {
  margin-bottom: 10px;
  font-size: 14px;
  border-bottom: 1px solid #aed2ff;
  line-height: 30px;
  height: 30 px;
  font-weight: 700;
  text-indent: 15px;
  color: #333;
  font-family: "Microsoft YaHei";
}
/* border-bottom底部边框 ,text-indent：首行缩进*/

.cart-table {
  width: 100%;
  margin: 0 auto;
  border-color: collapse;
  font-size: 12px;
  font-family: Verdana, "Microsoft YaHei";
  color: #333333;
}

.cart-table th {
  border-bottom: 2px solid #b2d1ff;
  font-weight: normal;
  height: 35px;
  line-height: 35px;
}

.cart-all-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  span {
    margin: 0px 1px;
  }
  .cart-all {
    margin-top: 2px;
  }
}

.cart-item {
  background-color: #fafcff;
  border-bottom: 1px dotted #84b3fd;
}

.cart-item td {
  height: 100px;
  text-align: center;
}

.cart-item .cart-txt-left {
  text-align: center;
}

.cart-name {
  color: #3366d4;
  font-weight: bold;
  text-align: center;
}

.cart-subtotal {
  color: #ff3334;
  font-weight: bold;
}

.number {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-img {
  display: block;
  width: 90px;
  height: 90px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.cart-reduce,
.cart-add {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 21px;
  color: #fff;
  background-color: #bdbdbd;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  font-family: "Arial";
  font-size: 0.833331rem;
}

.cart-add {
  line-height: 24px;
}

.cart-reduce:hover,
.cart-add:hover {
  background-color: #ff9900;
}

.cart-num {
  margin: 5px;
  width: 35px;
  text-align: center;
  height: 20px;
  line-height: 18px;
  padding: 0 3px;
  display: inline-block;
  background: #fff;
  border: 1px solid #bbb;
}

.cart-del,
.cart-all {
  color: #3366d4;
}

.cart-del:hover,
.cart-all:hover {
  text-decoration: underline;
  cursor: pointer;
}

.cart-bottom {
  height: 55px;
  // text-align: right;
  position: absolute;
  bottom: -20px;
  right: 0px;
}

.cart-total-num {
  color: red;
  font-size: 16px;
  margin: 0px 5px;
}
.cart-total-price {
  color: #ff3334;
  font-weight: bold;
  font-size: 16px;
}

.cart-bottom-btn {
  color: #fff;
  font-size: 14px;
  font-weight: 600px;
  cursor: pointer;
  margin: 0 20px;
  background: #fe8502;
  border: 1px solid #ff6633;
  border-radius: 5px 5px 5px 5px;
  padding: 6px 12px;
}

.cart-bottom-btn:hover {
  background: #ff6600;
}

.cart-table th:first-child span {
  line-height: 10px;
  height: 20px;
}
.el-empty {
  position: absolute;
  left: 45%;
  // margin-left: 500px;
  // margin: auto;
}
</style>