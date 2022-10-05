<template>
  <div class="shopDetail">
    <div class="left">
      <div class="img">
        <img :src="shopDetail.large_img" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="detail">
        <div class="shop-name">
          <span>{{ shopDetail.desc }}</span>
        </div>
        <div class="select-shop">
          <span>选择产品</span>
          <ul>
            <li>上衣</li>
            <li>长袖</li>
            <li>路飞</li>
            <li>路飞</li>
            <li>路飞</li>
            <li>路飞</li>
            <li>路飞</li>
            <li>路飞</li>
          </ul>
        </div>
        <div class="shop-num">
          <span class="num">数量</span>
          <div class="box">
            <button class="reduce" :disabled="count == 1" @click="count--">
              -
            </button>
            <span class="show-num">{{ count }}</span>
            <button class="add" @click="count++">+</button>
          </div>
        </div>
        <div class="safeguard">
          <span>增值保障</span>
          <ul>
            <li>半年使用换新￥10.50</li>
            <li>一年全保换新￥15.00</li>
          </ul>
        </div>
        <button class="joincart" @click="joinCart">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: "1",
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      token: "",
      pid: "",
      shopDetail: {},
      join: true,
    };
  },
  methods: {
    //获取商品详情页数据
    getshopDetail() {
      this.axios({
        method: "get",
        url: "/productDetail",
        params: {
          appkey: this.appkey,
          pid: this.pid,
        },
      }).then((res) => {
        this.shopDetail = res.data.result[0];
      });
    },
    //加入购物车
    joinCart() {
      if (!this.token) {
        let loginURL = this.$router.resolve({
          path: "/login",
        });
        window.open(loginURL.href, "_blank");
        return;
      }
      if (this.join) {
        this.join = false
        let str = `pid=${this.pid}&count=${this.count}&rule="无糖/奶油"&appkey=${this.appkey}&tokenString=${this.token}`;
        this.axios({
          method: "POST",
          url: "/addShopcart",
          data: str,
        }).then((res) => {
          this.$message({
            showClose: true,
            message: "加入购物车成功",
            type: "success",
          });
          this.join = true
          this.$router.go(-1)
        });
      }
    },
  },
  created() {
    this.token = this.$cookies.get("TOKEN");
    this.pid = this.$route.query.pid;
    console.log(this.pid);
    this.getshopDetail();
  },
};
</script>

<style lang="less" scoped>
.shopDetail {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    margin-right: 50px;
    .img {
      width: 400px;
      height: 500px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .right {
    .shop-name {
      font-size: 20px;
      span {
        color: black;
      }
    }
    .select-shop {
      display: flex;
    }
    .shop-num {
      display: flex;
      align-items: center;
      .box {
        display: flex;
        align-items: center;
        button {
          width: 30px;
          height: 30px;
          line-height: 32px;
          border: none;
          font-size: 20px;
          color: white;
          background-color: rgb(240, 238, 238);
        }
        .show-num {
          border: rgb(240, 238, 238) solid 1px;
          background-color: white;
          width: 50px;
          display: block;
          text-align: center;
          line-height: 30px;
          height: 30px;
          font-size: 20px;
        }
        .reduce {
          font-size: 30px;
          line-height: 22px;
        }
        .reduce:hover,
        .add:hover {
          cursor: default;
          background-color: #ff9900;
        }
      }
    }
    .safeguard {
      display: flex;
    }
    .joincart {
      width: 150px;
      height: 40px;
      border: none;
      background-color: red;
      color: white;
      border-radius: 5px;
      margin-top: 10px;
    }
  }
}
li {
  list-style: none;
  padding: 0px 10px;
  line-height: 30px;
  text-align: center;
  margin: 10px;
  background-color: rgb(240, 238, 238);
  float: left;
  color: #999;
}
li:first-child {
  margin-left: 0px;
}
.select-shop span,
.num,
.safeguard span {
  display: block;
  color: #999;
  width: 80px;
  height: 30px;
  line-height: 30px;
  margin: 10px 10px 10px 0px;
}
</style>