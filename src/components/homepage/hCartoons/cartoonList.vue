<template>
  <div class="swiper-demo">
    <div class="swiper-container" id="swiper-container-two">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          id="dd"
          :class="{ border: index == n }"
          v-for="(item, index) in arr"
          :key="index"
          @mouseenter="send(index)"
        >
          <a href=""
            ><img :src="item.largeImg" alt="" />
            <p>{{ item.name }}</p>
            <p>{{ item.desc }}</p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../../../utils/banner";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      n: "m",
      arr: [],
    };
  },
  methods: {
    //获取当前选中项，传值给cartoonLeft组件
    send(index) {
      this.n = index;
      var arr = this.arr[index];
      this.$bus.$emit("datas", arr.name, arr.enname, arr.largeImg, arr.desc);
    },
  },
  beforeCreate() {
    this.axios({
      method: "get",
      url: "/typeProducts",
      params: {
        appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
        key: "createdAt",
        value: "2021-01-24T10:53:54.000Z",
      },
    }).then((res) => {
      this.arr = res.data.result;
      // var indexof = res.data.result[this.n];
      // this.$bus.$emit(
      //   "datas",
      //   indexof.name,
      //   indexof.enname,
      //   indexof.largeImg,
      //   indexof.desc
      // );
    });
  },
  mounted() {
    var ctnTwoInterval = setInterval(() => {
      if (this.arr != "") {
        banner.ctntwo();
        clearInterval(ctnTwoInterval)
      }
    }, 100);
  },
};
</script>

<style lang="less" scoped>
#swiper-container-two {
  width: 1200px;
  margin-top: 30px;
  height: 170px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
}

.swiper-slide {
  width: 102px;
  height: 166px;
  margin-top: 2px;
  margin-right: 5px;
  margin-left: 5px;
  border: rgb(205, 205, 205) solid 0.1px;
}
.border {
  border: red solid 0.1px;
}
a {
  display: block;
  width: 102px;
  height: 166px;
}
img {
  width: 100px;
  height: 120px;
  /* background-color: aqua; */
  object-fit: cover;
}
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
p:nth-child(2) {
  text-align: center;
}
p:last-child {
  font-size: 13px;
  color: #999;
}
</style>