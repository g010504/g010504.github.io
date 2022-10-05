<template>
  <div class="search-box">
    <div class="advertising" @mouseenter="clear" @mouseleave="go()">
      <img
        v-for="(item, index) in imageArr"
        :key="index"
        :src="item.bannerImg"
        v-show="index == n"
      />
    </div>
    <div class="search">
      <div class="input">
        <input type="text" autofocus />
        <span>搜索</span>
      </div>
      <div class="hot-search">
        <span>热门搜索系列：</span>
        <ul>
          <li><a href="#">海贼王</a></li>
          <li><a href="#">火影忍者</a></li>
          <li><a href="#">七龙珠</a></li>
          <li><a href="#">海贼王</a></li>
          <li><a href="#">火影忍者</a></li>
          <li><a href="#">七龙珠</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageArr: [],
      n: 0,
      Interval: "",
    };
  },
  methods: {
    go() {
      this.Interval = setInterval(() => {
        if (this.n < this.imageArr.length - 1) {
          this.n++;
        } else {
          this.n = 0;
        }
      }, 2000);
    },
    clear() {
      clearInterval(this.Interval);
    },
    getbanner() {
      this.axios({
        method: "get",
        url: "http://www.kangliuyong.com:10002/banner",
        params: {
          appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
        },
      }).then((res) => {
        this.imageArr = res.data.result;
      });
    },
  },
  created() {
    this.getbanner();
  },
  mounted() {
    this.go();
  },
};
</script>

<style scoped>
.search-box {
  width: 1200px;
  height: 130px;
  margin: 10px auto;
  display: flex;
}
.advertising {
  width: 400px;
  height: 130px;
}
.advertising img {
  width: 100%;
  height: 100%;
}
.search {
  width: 700px;
  height: 130px;
  overflow: hidden;
}
.search .input {
  width: 550px;
  height: 40px;
  border: solid 1px antiquewhite;
  margin: 30px auto 0px;
  padding-left: 20px;
}
.search .input input {
  height: 38px;
  width: 430px;
  outline: none;
  border: none;
  float: left;
}
.search .input span {
  float: left;
  display: block;
  width: 98px;
  height: 38px;
  background-color: antiquewhite;
  line-height: 38px;
  text-align: center;
}
.search .hot-search {
  margin-left: 75px;
  margin-top: 10px;
  font-size: 14px;
}
.search .hot-search span {
  float: left;
  color: red;
}
.search .hot-search li {
  float: left;
  list-style: none;
  margin-right: 10px;
}
.search .hot-search li a {
  color: #999;
}
.search .hot-search li a:hover {
  color: red;
}
</style>