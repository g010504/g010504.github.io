<template>
  <div id="hNavigation">
    <div class="box">
      <div class="logo">
        <img src="../../assets/img/logo.png" alt="" />
        <span>
          <em> HareCartoon </em>
        </span>
      </div>
      <div class="navigation-list">
        <ul>
          <li
            v-for="(item, index) in arrLi"
            :key="index"
            @click="changeURl(index)"
          >
            <a href="javascript:void(0);">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="navigation-funtion">
        <div class="login" @mouseenter="change" @mouseleave="change">
          <span @click="login" v-if="noLogin">登录/注册</span>
          <span class="header" v-else
            ><img :src="personMsg.userImg" alt=""
          /></span>
        </div>
        <div
          class="boxes"
          v-show="show"
          @mouseenter="change"
          @mouseleave="change"
        >
          <div class="guild">
            <p class="name" v-if="noLogin">名字</p>
            <p class="name" v-else>{{ personMsg.nickName }}</p>
            <a href="javascript:void(0)" @click="changePsa"><p>个人中心</p></a>
            <a href="#"><p>账户设置</p></a>
            <p @click="exit">
              退出&nbsp;<span class="iconfont icon-tuichu"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hNavigation",
  data() {
    return {
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      token: "",
      noLogin: true,
      show: false,
      personMsg: [],
      arrLi: [
        { name: "首页" },
        { name: "商城" },
        { name: "图库" },
        { name: "资讯" },
        { name: "购物车" },
        { name: "收藏" },
        { name: "订单" },
      ],
    };
  },
  methods: {
    change() {
      this.show = !this.show;
    },
    //获取个人信息
    getpersonData() {
      this.axios({
        method: "get",
        url: "/findAccountInfo",
        params: {
          appkey: this.appkey,
          tokenString: this.token,
        },
      }).then((res) => {
        if (res.data.code == "B001") {
          this.personMsg = res.data.result[0];
          console.log(res)
        }
      });
    },
    //路由跳转
    changeURl(index) {
      //跳转首页
      if (index == 0) {
        this.$router.go(0);
      }
      //跳转商城
      if (index == 1) {
        this.$router.push("/store");
      }
      //跳转图库
      if (index == 2) {
        this.$router.push("/picture");
      }
      //跳转资讯
      if (index == 3) {
        this.$router.push("/information");
      }
      //跳转购物车
      if (index == 4) {
        if (!this.token) {
          this.$router.push("/login");
          return;
        } else {
          this.$router.push("/cart");
        }
      }
      //跳转收藏
      if (index == 5) {
        if (!this.token) {
          this.$router.push("/login");
          return;
        } else {
          this.$router.push("/collect");
        }
      }
      //跳转订单
      if (index == 6) {
        if (!this.token) {
          this.$router.push("/login");
          return;
        } else {
          this.$router.push("/indent/allindent");
        }
      }
    },
    login() {
      this.$router.push("/login");
    },
    changePsa() {
      this.$router.push("/personAge");
    },
    //退出登录
    exit() {
      var str = `appkey=${this.appkey}&tokenString=${this.token}`;
      this.axios({
        method: "POST",
        url: "/logout",
        data: str,
      }).then((res) => {
        if (res.data.code == "F001") {
          this.$cookies.set("TOKEN", "", "1s", "/");
          if (!this.$cookies.get("TOKEN")) {
            this.$message({
              type: "success",
              message: "退出登录成功！",
            });
            setTimeout(() => {
              this.$router.go(0);
            }, 500);
          }
        }
      });
    },
  },
  created() {
    this.token = this.$cookies.get("TOKEN");
    if (this.$cookies.get("TOKEN")) {
      this.getpersonData();
      this.noLogin = false;
    }
  },
};
</script>

<style lang="less" scoped>
#hNavigation {
  width: 100%;
  height: 90px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(255, 255, 255, 0.02)
  );
  position: absolute;
  top: 0;
  z-index: 10;
  color: white;
  // border-collapse: collapse;
}
ul {
  height: 90px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.box {
  width: 1519px;
  height: 50px;
  margin: 0 auto;
  padding: 0px 180px;
  display: flex;
}

.logo {
  width: 300px;
  height: 90px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  font-size: 24px;
  img {
    width: 32px;
  }
}

.navigation-list {
  width: 800px;
  height: 90px;
  li {
    padding: 0px 20px;
    position: relative;
  }
  li::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 8px;
    width: 87%;
    height: 80%;
    border-top: solid #8aaad9 1px;
    border-bottom: solid #8aaad9 1px;
    transform: scaleY(2);
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }
  li::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 1px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #8aaad9;
    border-radius: 10px;
    transform: scale(0);
    transition: 0.3s;
  }
  li:hover::before {
    transition: 0.3s;
    transform: scaleY(1);
    opacity: 1;
  }
  li:hover::after {
    transition: 0.3s;
    transform: scale(1.1);
  }
  a {
    color: white;
  }
}
.navigation-funtion {
  width: 300px;
  height: 90px;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  .header {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .login:hover {
    cursor: default;
  }
  .boxes {
    width: 100px;
    height: 130px;
    position: absolute;
    top: 55px;
    right: 70px;
    padding-top: 10px;
    .guild {
      height: 120px;
      width: 100px;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    }
    .guild p {
      padding: 5px 5px;
      font-size: 14px;
      color: white;
      letter-spacing: 2px;
    }
    .guild .name {
      border-bottom: solid #999 0.1px;
    }
    .guild p:hover {
      color: #8aaad9;
      cursor: pointer;
    }
  }
}
</style>

