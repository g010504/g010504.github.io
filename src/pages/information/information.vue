<template>
  <div class="information">
    <div class="navigation">
      <div class="nav">
        <div class="logo">
          <img src="../../assets/img/logo.png" alt="" />
          <span>
            <em> HareCartoon </em>
          </span>
        </div>
        <div class="nav-list">
          <ul>
            <li>
              <span>游戏中心</span>
            </li>
            <li>
              <span>手机app</span>
              <img src="../../assets/img/二维码.jpg" alt="" />
              <p>扫码下载APP</p>
            </li>
            <li><span>快应用</span></li>
            <li>
              <span>关注微信</span>
              <img src="../../assets/img/Wechat.jpg" alt="" />
              <p>扫码关注公众号</p>
            </li>
            <li><span>更多社区</span></li>
          </ul>
        </div>
        <div class="login">
          <span v-if="this.token != null"
            ><img :src="personMsg.userImg" alt=""
          /></span>
          <span v-else @click="login">登录/注册</span>
        </div>
      </div>
    </div>
    <div class="search">
      <div class="search-nav">
        <ul>
          <li><span @click="homepage">首页</span></li>
          <li>
            <span>动漫情报</span>
            <div class="nav-box">
              <p>国产漫画/动漫</p>
              <p>动画/情报</p>
              <p>真人/舞台剧</p>
              <p>广播剧/轻小说/杂志</p>
              <p>音乐/OP/ED/OST</p>
            </div>
          </li>
          <li>
            <span>游戏宅</span>
            <div class="nav-box">
              <p>手机游戏</p>
              <p>其他游戏</p>
            </div>
          </li>
          <li>
            <span>展会活动</span>
            <div class="nav-box">
              <p>国内漫展/见面会</p>
              <p>国外漫展/周年祭/原画</p>
            </div>
          </li>
          <li>
            <span>萌周边</span>
            <div class="nav-box">
              <p>黏土人偶</p>
              <p>立体手办</p>
              <p>周边其他</p>
            </div>
          </li>
          <li>
            <span>万事屋</span>
          </li>
          <li>
            <span>八卦谈</span>
          </li>
        </ul>
      </div>
      <div class="search-box">
        <input type="text" placeholder="搜索" />
      </div>
    </div>
    <div class="banner">
      <div class="swiper-nav">
        <ul>
          <li
            v-for="(item, index) in ImgArr"
            :key="index"
            :class="{ border: index == n }"
            @mouseenter="changeN(index)"
            @mouseleave="goSwiper"
          >
            <img :src="item.bannerImg" alt="" />
          </li>
        </ul>
      </div>
      <div class="swiper">
        <div
          :class="{ bannerImg: true, show: index == n }"
          v-for="(item, index) in ImgArr"
          :key="index"
          @mouseenter="clearSwiper"
          @mouseleave="goSwiper"
        >
          <img :src="item.bannerImg" alt="" />
        </div>
      </div>
      <div class="menu">
        <p><span>热门信息</span></p>
        <ul>
          <li>
            <a href="#"
              >《新大头儿子》推出新的动画电影，它已经成为10后的童年经典</a
            >
          </li>
          <li>
            <a href="#"
              >【盗墓笔记】动漫海报瓶邪黑花商稿 ：八一七稻米节 万家灯火故事长</a
            >
          </li>
          <li>
            <a href="#"
              >《精灵宝可梦》八大师实力设定公开，小智数据垫底，却能逆天改命</a
            >
          </li>
          <li>
            <a href="#"
              >日本动画电影票房周榜・22/08/14付　海贼王RED两周64.7亿日元</a
            >
          </li>
          <li>
            <a href="#">《魔女之夜的回天》最终版剧本的五个败笔 含严重剧透</a>
          </li>
          <li>
            <a href="#"
              >海贼王1057话情报：大和放弃上船，草帽第10人之争成了笑话</a
            >
          </li>
          <li>
            <a href="#"
              >云韵三年之约手办公布，尺度太大遭质疑，价格将会超越第一版</a
            >
          </li>
          <li>
            <a href="#"
              >斗罗：菊斗罗要抢首功？灵鸢斗罗：忘了我是怎么领盒饭的吗？</a
            >
          </li>
          <li>
            <a href="#"
              >海贼王1057话情报：大和没有上船！三船长分道扬镳，和之国篇结束</a
            >
          </li>
          <li>
            <a href="#"
              >龙珠1：不算魔族，曾有5人打败过悟空，他们是谁，结局如何？</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="message">
      <div class="message-left">
        <h4>相关入口</h4>
        <ul>
          <li>
            <h5>近期热门<i class="iconfont icon-xiangyoujiantou"></i></h5>
            <p>秦时明月</p>
            <p>武庚纪</p>
            <p>西行纪</p>
            <p>海贼王</p>
            <p>刺客伍六七</p>
            <p>斗破苍穹</p>
            <p>更多</p>
          </li>
          <li>
            <h5>日漫系列<i class="iconfont icon-xiangyoujiantou"></i></h5>
            <p>海贼王</p>
            <p>火影忍者</p>
            <p>七龙珠</p>
            <p>城市猎人</p>
            <p>你的名字</p>
            <p>昨日青空</p>
            <p>更多</p>
          </li>
          <li>
            <h5>国漫系列<i class="iconfont icon-xiangyoujiantou"></i></h5>
            <p>中国惊奇先生</p>
            <p>尸兄</p>
            <p>洛洛历险记</p>
            <p>斗罗大陆</p>
            <p>刺客伍六七</p>
            <p>斗破苍穹</p>
            <p>更多</p>
          </li>
        </ul>
      </div>
      <div class="message-right">
        <div class="row" v-for="(item, index) in message" :key="index">
          <div class="img">
            <img :src="item.largeImg" alt="" />
          </div>
          <p class="text">{{ item.desc }}/p></p>
          <p class="from"><span>动漫新际</span><span>1小时前</span></p>
        </div>
      </div>
    </div>
    <div class="top" v-show="showTop">
      <a href="javascript:window.scrollTo({top:0,behavior:'smooth'})">
        <i class="iconfont icon-zuojiantou"></i>
        <p>顶部</p>
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
      ImgArr: [],
      n: "0",
      Interval: "",
      message: [],
      showTop: false,
    };
  },
  methods: {
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
    //获取资讯数据
    getmessage() {
      this.axios({
        method: "get",
        url: "/typeProducts",
        params: {
          appkey: this.appkey,
          key: "createdAt",
          value: "2021-01-24T10:53:54.000Z",
        },
      }).then((res) => {
        this.message = res.data.result;
      });
    },
    //获取轮播数据
    getbanner() {
      this.axios({
        method: "get",
        url: "http://www.kangliuyong.com:10002/banner",
        params: {
          appkey: this.appkey,
        },
      }).then((res) => {
        this.ImgArr = res.data.result;
        this.swiper();
      });
    },
    //轮播导航
    changeN(index) {
      this.n = index;
      clearInterval(this.Interval);
    },
    //自动轮播
    swiper() {
      this.Interval = setInterval(() => {
        if (this.n == 3) {
          this.n = 0;
        } else if (this.n <= 2) {
          this.n++;
        }
      }, 1500);
    },
    //鼠标经过
    clearSwiper() {
      clearInterval(this.Interval);
    },
    goSwiper() {
      this.swiper();
    },
    //回到顶部按钮是否显示
    mouseScroll() {
      var height = document.documentElement.scrollTop;
      if (height < 370) {
        this.showTop = false;
      }
      if (height > 370) {
        this.showTop = true;
      }
    },
    login() {
      this.$router.push("/login");
    },
    homepage() {
      this.$router.push("/homePage/gridDetail");
    },
  },
  created() {
    this.getbanner();
    this.getmessage();
    this.getpersonData();
  },
  mounted() {
    //监听滚轮
    window.addEventListener("scroll", this.mouseScroll);
  },
};
</script>

<style lang="less" scoped>
.information {
  width: 100%;
  aspect-ratio: 2/1;
  background: url("../../assets/img/loginBackground.jpeg") center top no-repeat;
  background-size: 1700px 800px;
}
.navigation {
  width: 100%;
  height: 40px;
  background-color: rgb(100, 100, 100);
  color: white;
  .nav {
    width: 1200px;
    margin: auto;
    display: flex;
    font-size: 10px;
    .logo {
      width: 200px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .nav-list {
      width: 800px;
      ul {
        display: flex;
        align-items: flex-start;
        li {
          list-style: none;
          text-align: center;
          width: 100px;
          height: 40px;
          overflow: hidden;
          position: relative;
          transition: 0.5s;
          span {
            display: block;
            width: 100px;
            height: 40px;
            line-height: 40px;
          }
          img {
            width: 100px;
            height: 100px;
          }
          p {
            color: black;
          }
        }
        li::before {
          content: "";
          display: block;
          width: 100px;
          height: 40px;
          top: 0;
          left: 0;
          position: absolute;
          z-index: -1;
        }
        li:hover {
          cursor: pointer;
        }
        li:nth-child(2):hover,
        li:nth-child(4):hover {
          height: 165px;
        }
        li:hover::before {
          background-color: rgb(158, 158, 158);
        }
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
}
.search {
  width: 1200px;
  height: 60px;
  background-color: white;
  margin: 120px auto 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  z-index: 100;
  .search-nav {
    ul {
      list-style: none;
      display: flex;
      color: #999;
      position: relative;
      z-index: 1100px;
      li {
        width: 100px;
        height: 60px;
        background-color: white;
        overflow: hidden;
        transition: 0.1s;
        border-radius: 10px;
        span {
          display: block;
          width: 100px;
          height: 60px;
          line-height: 60px;
          text-align: center;
        }
        span:hover {
          cursor: pointer;
          color: aqua;
        }
        .nav-box {
          p {
            font-size: 14px;
            padding: 10px 5px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          p:hover {
            color: aqua;
            cursor: pointer;
          }
        }
      }
      li:hover {
        height: auto;
      }
    }
  }
  .search-box {
    width: 300px;
    height: 40px;
    margin: 10px 40px;
    overflow: hidden;
    border-radius: 50px;
    background-color: white;
    border: rgb(206, 206, 206) solid 1px;
    input {
      height: 40px;
      font-size: 17px;
      outline: none;
      border: none;
      width: 280px;
      margin-left: 20px;
    }
    ::-webkit-input-placeholder {
      color: rgb(185, 185, 185);
      font-weight: 100;
    }
  }
}
.banner {
  width: 1200px;
  height: 435px;
  margin: auto;
  display: flex;
  .swiper-nav {
    width: 150px;
    ul {
      width: 150px;
      height: 435px;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        width: 150px;
        height: 100px;
        box-sizing: content-box;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .border {
        transform: scale(1.05);
      }
    }
  }
  .swiper {
    width: 700px;
    margin: 0 25px;
    background-color: white;
    .bannerImg {
      width: 700px;
      height: 435px;
      opacity: 0;
      transition: 0.8s;
      position: absolute;
      z-index: 1px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .show {
      opacity: 1;
    }
  }
  .menu {
    width: 300px;
    background-color: white;
    padding: 10px;
    p {
      font-size: 18px;
    }
    ul {
      li {
        list-style: none;
        font-weight: 100;
        border-bottom: 1px #999 dotted;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        padding-left: 15px;
        font-size: 15px;
      }
      li:last-child {
        border: none;
      }
      li::before {
        content: "";
        display: block;
        width: 7px;
        height: 7px;
        position: absolute;
        left: 0;
        background-color: black;
        border-radius: 50%;
        top: 15px;
      }
      li:hover a {
        color: #c3dbff;
      }
      li:hover::before {
        background-color: #c3dbff;
      }
    }
  }
}
.message {
  width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  .message-left {
    width: 200px;
    background-color: white;
    h4 {
      height: 45px;
      line-height: 45px;
      background-color: #c3dbff;
      color: white;
      box-shadow: 0px -1px 10px 1px rgba(255, 255, 255, 1);
      text-align: center;
    }
    ul {
      list-style: none;
      font-weight: 100;
      border: solid rgb(226, 226, 226) 1px;
      li {
        padding: 0px 5px;
        height: 35px;
        overflow: hidden;
        transition: 0.5s;
        h5 {
          width: 100%;
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          border-bottom: solid 1px rgb(230, 230, 230);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 100;
          .icon-xiangyoujiantou {
            transition: 0.4s;
          }
        }
        p {
          width: 100%;
          height: 30px;
          line-height: 30px;
          padding-left: 5px;
        }
        p:hover {
          cursor: pointer;
          background-color: #c3dbff;
          color: white;
        }
      }
      li:hover {
        height: 250px;
        cursor: pointer;
      }
      li:hover .icon-xiangyoujiantou {
        transform: rotateZ(90deg);
      }
    }
  }
  .message-right {
    width: 980px;
    background-color: white;
    border: solid rgb(226, 226, 226) 1px;
    .row {
      width: 23%;
      height: 220px;
      margin: 1%;
      float: left;
      .img {
        display: block;
        width: 100%;
        height: 150px;
        margin: auto;
        border-radius: 10px;
        overflow: hidden;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.2s;
      }
      img:hover{
        transform: scale(1.05);
      }
      .text {
        height: 40px;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        margin-bottom: 10px;
      }
      .from {
        font-size: 10px;
        display: flex;
        justify-content: space-between;
        font-weight: 100;
      }
      .text:hover {
        cursor: pointer;
        color: #c3dbff;
      }
    }
  }
}
.top {
  position: fixed;
  bottom: 200px;
  right: 20px;
  text-align: center;
  background-color: rgb(239, 239, 239);
  a {
    width: 50px;
    height: 50px;
    border: solid rgb(226, 226, 226) 1px;
    display: block;
    .icon-zuojiantou {
      transform: rotateZ(90deg);
      position: absolute;
      top: 5px;
      left: 15px;
    }
    p {
      line-height: 60px;
      font-weight: 100;
    }
  }
  a:hover {
    background-color: rgb(207, 207, 207);
  }
}
</style>