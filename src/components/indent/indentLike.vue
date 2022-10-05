<template>
  <div class="shop">
    <div class="row" v-for="(item, index) in shopArr" :key="index">
      <div class="row-box">
        <div class="img">
          <img :src="item.smallImg" alt="" />
        </div>
        <div class="text">
          <p>
            {{ item.desc}}
          </p>
          <p>
            <span>￥{{ item.price }}</span
            ><del>￥{{ item.price }}</del>
          </p>
          <p>火影忍者旗舰店</p>
        </div>
        <span class="num">月销: 2342</span>
        <span class="iconfont icon-jiarugouwuche"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopArr: [],
    };
  },
  methods: {
    //获取信息
    getLike() {
      this.axios({
        method: "get",
        url: "/typeProducts",
        params: {
          appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          key: "createdAt",
          value: "2021-01-24T10:53:54.000Z",
        },
      }).then((res) => {
        let arr = [];
        for (var i = 0; i < 5; i++) {
          var shop = res.data.result[Math.floor(Math.random() * 10)];
          const num = arr.filter((item) => {
            return item.pid == shop.pid;
          });
          if (num != "") {
            i--;
          }
          if (num == "") {
            arr.push(shop);
          }
        }
        this.shopArr = arr;
      });
    },
  },
  created(){
    this.getLike()
  }
};
</script>

<style scoped>
.shop {
  width: 1200px;
  height: 350px;
  margin: auto;
  border-top: rgb(231, 231, 231) solid 1px;
  border-left: rgb(231, 231, 231) solid 1px;
}
.row {
  width: 20%;
  height: 350px;
  border: rgb(231, 231, 231) 1px solid;
  border-top: none;
  border-left: none;
  padding: 25px 21px 0 21px;
  float: left;
}
.row:hover {
  background-color: rgb(248, 248, 248);
}
.row-box {
  width: 196px;
  /* transition: .2s; */
}
.row .img {
  width: 194px;
  height: 194px;
}
.row .img img {
  width: 100%;
  height: 100%;
}
.row .text {
  border-bottom: #999 dotted 1px;
}
.row .text p:nth-child(1) {
  display: -webkit-box;
  height: 45px;
  /* text-overflow: ellipsis; */
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.row .text p:nth-child(1):hover {
  color: red;
  cursor: default;
}
.row .text p:nth-child(2) {
  color: red;
  font-size: 20px;
}
.row .text p:nth-child(2) del {
  color: #999;
  font-size: 16px;
  margin-left: 5px;
  font-weight: 300;
}
.row .text p:nth-child(3) {
  color: #999;
  font-size: 13px;
  margin: 5px 0;
}
.row-box .num {
  font-size: 13px;
  float: left;
  margin-top: 5px;
}
.row-box .icon-jiarugouwuche {
  font-size: 18px;
  background-color: rgb(207, 207, 207);
  border-radius: 5px;
  color: white;
  float: right;
  margin-top: 5px;
}
.icon-jiarugouwuche:hover {
  background-color: red;
}
</style>