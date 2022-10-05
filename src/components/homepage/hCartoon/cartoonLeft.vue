<template>
  <div class="left">
    <div class="img">
      <img :src="largeImg" alt="" />
    </div>
    <div class="text">
      <div class="title">{{ name }}</div>
      <div class="produce">
        <span>作者：{{ enname }}</span>
        <span>人气：3.6亿</span>
        <span>关注数：490328</span>
      </div>
      <em class="detail">
        <p>
          {{ desc }}
        </p>
      </em>
    </div>
    <div class="button">
      <button>立即观看<span class="iconfont icon-bofang_o"></span></button>
      <button><span class="iconfont icon-aixin1"></span>关注</button>
      <button>
        <span class="iconfont icon-jingdiananli_kongwujiaoxing_shoucang"></span
        >收藏
      </button>
      <hr class="hr" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      desc: "",
      largeImg: "",
      enname: "",
    };
  },
  methods: {
    // 获取数据
    getdata() {
      this.axios({
        method: "get",
        url: "/typeProducts",
        params: {
          appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          key: "id",
          value: "1",
        },
      }).then((res) => {
        const arr = res.data.result[0];
        this.name = arr.name;
        this.desc = arr.desc;
        this.largeImg = arr.largeImg;
        this.enname = arr.enname;
      });
    },
  },
  created() {
    this.getdata()
    //接收cartoonList传递过来的值
    this.$bus.$on("data", (name, enname, largeImg, desc) => {
      this.name = name;
      this.desc = desc;
      this.largeImg = largeImg;
      this.enname = enname;
    });
  },
};
</script>

<style lang="less" scoped>
.left {
  width: 880px;
  height: 350px;
  float: left;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
  padding-top: 20px;
  background-color: white;
}
.left .img {
  width: 250px;
  height: 300px;
  margin: 5px 30px 30px 20px;
  float: left;
  /* border: red solid 1px; */
}
.left .img img {
  width: 100%;
  height: 100%;
}
.left .text {
  float: left;
  height: 240px;
  width: 565px;
  border-bottom: #999 dotted 1px;
}
.left .title {
  font-size: 30px;
}
.left .produce {
  padding: 15px 0;
  color: rgb(130, 129, 129);
}
.left .produce span {
  margin-right: 40px;
}
.left .detail {
  font-size: 13px;
  min-height: 100px;
  color: #999;
}
.left .button {
  position: relative;
  width: 560px;
  float: left;
}
.icon-bofang_o {
  font-size: 20px;
}
.icon-aixin1 {
  color: red;
}
.icon-jingdiananli_kongwujiaoxing_shoucang {
  font-size: 19px;
}
.left button:nth-child(1) {
  width: 120px;
  background-color: blue;
  border-radius: 5px;
  border: none;
  height: 45px;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 17px;
  color: white;
}
.left button:nth-child(2),
.left button:nth-child(3) {
  width: 80px;
  background-color: white;
  border: none;
  height: 40px;
  font-size: 16px;
}
.left button:nth-child(2) {
  border-radius: 5px 0 0 5px;
}

.left button:nth-child(3) {
  border-radius: 0 5px 5px 0;
}
.hr {
  background-color: rgb(135, 135, 135);
  border: rgb(135, 135, 135) solid 0.1px;
  width: 20px;
  position: absolute;
  transform: rotateZ(90deg);
  top: 42px;
  left: 210px;
}
.left button:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>