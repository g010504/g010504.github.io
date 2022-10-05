<template>
  <div>
    <div class="navigation-top" :style="{ top: top }">
      <div class="box">
        <div class="left">
          <span
            v-for="(item, index) in arrLi"
            :key="index"
            @click="changeURl(index)"
            ><a href="javascript:void(0);">{{ item.name }}</a></span
          >
        </div>
        <div class="input">
          <input type="text" placeholder="请输入作品名称" />
          <span class="iconfont icon-sousuo"></span>
        </div>
      </div>
    </div>
    <div class="feedback-left">
      <ul>
        <a
          href="javascript:window.scrollTo({top:450,behavior:'smooth'})"
          :style="{ background: color1 }"
          ><li>精彩推荐</li></a
        >
        <a
          href="javascript:window.scrollTo({top:950,behavior:'smooth'})"
          :style="{ background: color2 }"
          ><li>动漫系列</li></a
        >
        <a
          href="javascript:window.scrollTo({top:1620,behavior:'smooth'})"
          :style="{ background: color3 }"
          ><li>漫画系列</li></a
        >
        <a
          href="javascript:window.scrollTo({top:2290,behavior:'smooth'})"
          :style="{ background: color4 }"
          ><li>最新资讯</li></a
        >
        <a href="javascript:window.scrollTo({top:0,behavior:'smooth'})"
          ><li>回到顶部</li></a
        >
      </ul>
    </div>
    <div class="feedback-right">
      <p><a href="#">帮助与反馈</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {

    return {
      token:"",
      color1: "",
      color2: "",
      color3: "",
      color4: "",
      top: "-50px",
      arrLi: [
        { name: "个人中心" },
        { name: "商城" },
        { name: "图库" },
        { name: "购物车" },
        { name: "收藏" },
      ],
    };
  },
  methods: {
    //梯子导航
    mouseScroll() {
      var height = document.documentElement.scrollTop;
      if (height >= 400) {
        this.top = "0";
      }
      if (height < 400) {
        this.top = "-50px";
      }
      if (height < 200) {
        this.color1 = "";
        this.color2 = "";
        this.color3 = "";
        this.color4 = "";
      }
      if (height > 200 && height < 800) {
        this.color1 = "#c3dbff";
        this.color2 = "";
        this.color3 = "";
        this.color4 = "";
      }
      if (height >= 800 && height < 1450) {
        this.color2 = "#c3dbff";
        this.color1 = "";
        this.color3 = "";
        this.color4 = "";
      }
      if (height >= 1450 && height < 2100) {
        this.color3 = "#c3dbff";
        this.color2 = "";
        this.color1 = "";
        this.color4 = "";
      }
      if (height >= 2100 && height < 2950) {
        this.color4 = "#c3dbff";
        this.color2 = "";
        this.color3 = "";
        this.color1 = "";
      }
    },
    //路由导航
    changeURl(index) {
      //跳转个人中心
      if (index == 0) {
        if (!this.token) {
          this.$router.push("/login")
        } else {
          this.$router.push("/personAge")
        }
      }
      //跳转商城
      if (index == 1) {
          this.$router.push("/store")
      }
      //跳转图库
      if (index == 2) {
          this.$router.push("/picture")
      }
      //跳转购物车
      if (index == 3) {
        if (!this.token) {
          this.$router.push("/login")
        } else {
          this.$router.push( "/cart")
        }
      }
      //跳转收藏
      if (index == 4) {
        if (!this.token) {
          this.$router.push("/login")
        } else {
          this.$router.push("/collect")
        }
      }
    },
  },
  created(){
    this.token = this.$cookies.get("TOKEN")
  },
  mounted() {
    //监听滚轮
    window.addEventListener("scroll", this.mouseScroll);
  },
};
</script>

<style lang="less" scoped>
.navigation-top {
  position: fixed;
  width: 100%;
  background-color: white;
  height: 50px;
  z-index: 500;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.4);
  transition: 0.3s;
}
.box {
  width: 1200px;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box .left a {
  margin: 0 20px;
}
.box .left a:hover {
  color: red;
}
.box .input {
  width: 400px;
  height: 30px;
  position: relative;
  border: solid antiquewhite 2px;
  border-radius: 20px;
}
.box .input input {
  height: 20px;
  width: 330px;
  margin-top: 3px;
  margin-left: 15px;
  border: none;
  outline: none;
  font-size: 16px;
}
/* 修改input placeholder样式 */
.box .input input::-webkit-input-placeholder {
  color: #999;
  font-size: 14px;
}
.box .input span {
  display: block;
  background-color: antiquewhite;
  position: absolute;
  width: 68px;
  height: 28px;
  line-height: 30px;
  text-align: center;
  border-radius: 0 18px 18px 0;
  top: -1px;
  right: -1px;
}
.feedback-left {
  position: fixed;
  top: 445px;
  left: 80px;
  z-index: 1000;
}
.feedback-left ul {
  width: 50px;
  height: 250px;
  list-style: none;
  font-size: 12px;
  text-align: center;
  font-weight: 200;
}
.feedback-left ul li {
  width: 30px;
  height: 50px;
  margin: auto;
  padding-top: 10px;
}

.feedback-left ul a {
  border: #999 solid 0.1px;
  background-color: white;
  display: block;
  width: 50px;
  height: 50px;
}
.feedback-left ul a:hover {
  cursor: default;
  background-color: #c3dbff;
}
.feedback-left ul a:not(:last-child) {
  border-bottom: none;
}
.feedback-left ul a:not(:first-child) {
  border-top: none;
}
.feedback-left ul a:not(:first-child) li {
  border-top: #999 solid 0.1px;
}

.feedback-right {
  position: fixed;
  right: 5px;
  top: 450px;
  width: 50px;
  height: 140px;
  padding-top: 5px;
  z-index: 1000;
  border: rgb(204, 204, 204) solid 0.1px;
  background-color: white;
}
.feedback-right:hover {
  cursor: pointer;
}
p {
  width: 20px;
  margin: 0 auto;
}

.feedback-right a::after {
  content: "?";
  display: block;
  border: solid #999 1.5px;
  text-align: center;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 10px;
  line-height: 15px;
  margin: 5px auto;
  font-weight: 100px;
}

.feedback-right a:hover {
  color: red;
}

.feedback-right a:hover::after {
  border: solid red 1.5px;
}
</style>
