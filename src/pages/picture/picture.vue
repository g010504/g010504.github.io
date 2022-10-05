<template>
  <div class="picture">
    <div :class="{ header: true, fixed: fix }">
      <div class="header-box">
        <div class="hdr">
          <ul>
            <li>
              <img src="../../assets/img/sharpicons_Rabbit.png" alt="" />
              <span>
                <em> HareCartoon </em>
              </span>
            </li>
            <li @click="homepage">首页</li>
            <li>充值中心</li>
            <li>个人中心</li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="热门搜索" />
          <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="login">
          <span v-if="this.token != null"
            ><img :src="personMsg.userImg" alt=""
          /></span>
          <span v-else @click="login">登录/注册</span>
        </div>
      </div>
    </div>
    <div class="navigation">
      <div class="content">
        <h5>分类：</h5>
        <ul>
          <li
            :class="{ color: index == n }"
            v-for="(item, index) in fenlei"
            :key="index"
            @click="find(index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="content">
        <h5>格式：</h5>
        <ul>
          <li
            :class="{ color: index == m }"
            v-for="(item, index) in rule"
            :key="index"
            @click="finds(index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="fallsImg">
      <div class="fallsImg-title">
        <p>图库>全部</p>
      </div>
      <div class="fallsImg-img" v-for="(item, index) in ImgArr" :key="index">
        <div class="img-card" v-for="(each, i) in item" :key="i">
          <div class="box">
            <img :src="each.largeImg" alt="" />
            <i class="iconfont icon-xiazai-wenjianxiazai-05"></i>
          </div>
          <p>{{ each.desc }}</p>
        </div>
      </div>
    </div>
    <div class="floatRight">
      <a href="javascript:window.scrollTo({top:0,behavior:'smooth'})">
        <i class="iconfont icon-huidaodingbu"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: this.$cookies.get("TOKEN"),
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      personMsg: [],
      fenlei: [
        { title: "全部" },
        { title: "热门下载" },
        { title: "新上线" },
        { title: "国漫" },
        { title: "日漫" },
        { title: "免费" },
        { title: "VIP专享" },
      ],
      n: "0",
      rule: [
        { title: "全部" },
        { title: "JPG" },
        { title: "JPEG" },
        { title: "GIF" },
        { title: "PNG" },
        { title: "SVG" },
        { title: "AI" },
        { title: "CDR" },
        { title: "PSD" },
      ],
      m: "0",
      ImgArr: [],
      ImgArrs: [],
      changeInnerWidth: false,
      innerWidth: "",
      Timeout: "",
      loading: false,
      ImgNum: "0",
      fix: false,
    };
  },
  methods: {
    homepage(){
      this.$router.push("/homePage/gridDetail")
    },
    find(index) {
      this.n = index;
    },
    finds(index) {
      this.m = index;
    },
    //获取头像
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
        }
      });
    },
    login() {
      this.$router.push("/login");
    },
    //获取图库数据
    getImg() {
      this.loading = true;
      this.axios({
        method: "get",
        url: "/typeProducts",
        params: {
          appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          key: "createdAt",
          value: "2021-01-24T10:53:54.000Z",
        },
      }).then((res) => {
        this.ImgArr = [...this.ImgArr, ...res.data.result];
        this.ImgArrs = [...this.ImgArrs, ...res.data.result];
        // this.ImgArr = res.data.result;
        // this.ImgArrs = res.data.result;
        this.layout();
        this.loading = false;
      });
    },
    //布局
    layout() {
      const width = document.body.clientWidth;
      this.innerWidth = document.body.clientWidth;
      var number = Math.floor(Math.random * 1000);
      const column = Math.floor(width / 235);
      var Arr = this.ImgArrs;
      // const num = Math.ceil(Arr.length / column);
      let arr = Arr.map((item, index) => {
        return Arr.slice(index * column, (index + 1) * column);
      });
      this.ImgArr = arr.filter((item) => {
        return item.length > 0;
      });
    },
    changeLayout() {
      this.Timeout = setTimeout(() => {
        this.layout();
      }, 500);
    },
    //滚轮加载
    mouseScroll() {
      this.docScrollTop =
        document.documentElement && document.documentElement.scrollTop;
      // console.log(this.docScrollTop, '高度')
      this.docClientHeight =
        document.body.clientHeight && document.documentElement.clientHeight;
      // console.log(this.docClientHeight, '页面高度')
      this.docScrollHeight = document.body.scrollHeight;
      // console.log(this.docScrollHeight, '文档实际高度')
      const aaa =
        this.docScrollHeight - this.docScrollTop - this.docClientHeight;
      if (aaa <= 200) {
        if (this.ImgArrs.length >= "70") {
          return;
        }
        if (!this.loading) {
          this.getImg();
        }
      }
      if (document.documentElement.scrollTop > 100) {
        this.fix = true;
      }
      if (document.documentElement.scrollTop < 100) {
        this.fix = false;
      }
    },
  },
  created() {
    this.getpersonData();
    this.getImg();
  },
  watch: {
    innerWidth(val) {
      this.changeLayout();
    },
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.innerWidth = document.body.clientWidth;
      })();
    };
    window.addEventListener("scroll", this.mouseScroll);
  },
};
</script>

<style lang="less" scoped>
.picture {
  background-color: #f4f4f4;
  width: 100%;
  // overflow: hidden;
  min-height: 100vh;
}

.header {
  width: 100%;
  height: 50px;
  font-size: 16px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: sticky;
  z-index: 100;
  top: 0px;
  .header-box {
    width: 1350px;
    margin: auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .hdr {
      ul {
        display: flex;
        align-items: center;
        list-style: none;
        li:first-child {
          width: 150px;
          display: flex;
          padding-left: 40px;
          color: #8aaad9;
          img {
            width: 20px;
            height: 20px;
          }
        }
        li {
          width: 100px;
          height: 20px;
          text-align: center;
        }
        li:hover {
          color: #8aaad9;
          cursor: pointer;
        }
      }
    }
  }
  .search {
    width: 400px;
    height: 30px;
    padding-left: 15px;
    border-radius: 50px;
    overflow: hidden;
    position: relative;
    border: #8aaad9 solid 1px;
    background-color: white;
    input {
      border: none;
      outline: none;
      height: 30px;
      width: 380px;
    }
    .icon-sousuo {
      position: absolute;
      display: block;
      box-sizing: border-box;
      width: 50px;
      height: 30px;
      top: 0;
      right: 0;
      background-color: #8aaad9;
      color: white;
      line-height: 30px;
      font-size: 18px;
      padding-left: 15px;
    }
  }
  .login {
    width: 200px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    img {
      margin-top: 2px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    span:hover {
      cursor: pointer;
    }
  }
}
.navigation {
  width: 1400px;
  height: 100px;
  margin: 50px auto 10px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  .content {
    width: 100%;
    font-size: 17px;
    font-weight: 200;
  }
  h5 {
    float: left;
    font-size: 17px;
    font-weight: 400;
    padding: 1px 0;
  }
  ul {
    list-style: none;
    float: left;
    li {
      float: left;
      padding: 1px 10px;
      margin: 0 10px;
      border-radius: 50px;
      transition: 0.2s;
    }
    li:hover {
      cursor: pointer;
    }
    .color {
      color: white;
      background-color: #8aaad9;
    }
  }
}
.fallsImg {
  width: 95%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  .fallsImg-title {
    margin: 10px 10px;
    letter-spacing: 4px;
  }
  .fallsImg-img {
    display: flex;
    .img-card {
      margin: 10px 5px;
      overflow: hidden;
      .box {
        border-radius: 20px;
        overflow: hidden;
        height: 200px;
        width: 100%;
        position: relative;
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 20px;
          transition: 0.2s;
          opacity: 1;
        }
        .image {
          transform: scale(1.03);
          opacity: 0.9;
        }

        .icon-xiazai-wenjianxiazai-05 {
          display: none;
          position: absolute;
          z-index: 100px;
          top: 50%;
          left: 50%;
          margin-top: -20px;
          margin-left: -20px;
          color: white;
          font-size: 40px;
        }
      }
      .box:hover {
        cursor: pointer;
      }
      .box:hover .icon-xiazai-wenjianxiazai-05 {
        display: block;
      }
      .box:hover img {
        transform: scale(1.03);
        opacity: 0.8;
      }
      .icon-xiazai-wenjianxiazai-05:hover {
        color: #2f60a9;
      }
      p {
        width: inherit;
        padding: 0 10px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:hover {
        cursor: pointer;
        color: #8aaad9;
      }
    }
  }
}
.floatRight {
  width: 40px;
  height: 40px;
  position: fixed;
  text-align: center;
  line-height: 40px;
  z-index: 0;
  right: 0;
  top: 600px;
  background-color: white;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
  .icon-huidaodingbu {
    font-size: 30px;
    color: #999;
  }
}
</style>