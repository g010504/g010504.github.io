<template>
  <div class="nav">
    <div class="box">
      <div class="leftsidebar">
        <span @click="homepage">首页</span>
        <span v-if="noLogin"
          >你好，请<a href="javascript:void(0);" @click="login"
            >登录/注册</a
          ></span
        >
        <span @click="changePer" v-else>个人中心</span>
      </div>
      <div class="rightsidebar">
        <router-link to="/store"
          ><span class="iconfont icon-shangcheng">商城</span></router-link
        >
        <router-link to="/indent"
          ><span class="iconfont icon-dingdan">我的订单</span></router-link
        >
        <router-link to="/cart"
          ><span class="iconfont icon-gouwuche">我的购物车</span></router-link
        >
        <span class="name">{{personMsg.nickName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      noLogin: true,
      personMsg: [],
    };
  },
  methods: {
    changePer(){
      this.$router.push("/personAge/message");
    },
    homepage() {
      this.$router.push("/homePage/gridDetail");
    },
    login() {
      this.$router.push("/login");
    },
    //获取个人信息
    getpersonData() {
      this.axios({
        method: "get",
        url: "/findAccountInfo",
        params: {
          appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          tokenString: this.token,
        },
      }).then((res) => {
        if (res.data.code == "B001") {
          this.personMsg = res.data.result[0];
          this.personMsg;
        }
      });
    },
  },
  created() {
    if (this.$cookies.get("TOKEN")) {
      this.token = this.$cookies.get("TOKEN");
      this.getpersonData();
      this.noLogin = false;
    }
  },
};
</script>

<style lang="less" scoped>

.nav {
  height: 30px;
  background-color: rgb(247, 247, 247);
}
.box {
  width: 1200px;
  height: inherit;
  margin: auto;
  line-height: 30px;
  font-size: 13px;
  font-weight: 1;
  letter-spacing: 1px;
}
span {
  margin: 0 10px;
  font-size: 13px;
}
.leftsidebar {
  float: left;
}
.rightsidebar {
  float: right;
  .name{
    color: red;
  }
}
span:hover {
  cursor: default;
}
span a {
  color: red;
}
</style>