<template>
  <div id="hSwiper">
    <div class="advertise">
      <div class="swiper-demo">
        <div
          v-if="this.imageArr != ''"
          class="swiper-container"
          id="swiper-container-one"
          @mouseenter="change"
          @mouseleave="change"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in imageArr"
              :key="index"
            >
              <img @click="chang(index)" :src="item.bannerImg" alt="" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div v-show="show" class="swiper-button-prev"></div>
          <div v-show="show" class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import banner from "../../utils/banner";
export default {
  name: "hSwiper",
  data() {
    return {
      show: false,
      imageArr: [],
    };
  },
  methods: {
    change() {
      this.show = !this.show;
    },
    //进入商品详情页
    chang(index) {
      // console.log(this.imageArr[index].pid);
    },
    // 获取首页轮播图
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
    //轮播设置
    var bannerInterval = setInterval(() => {
      if (this.imageArr != "") {
        banner.swiper();
        clearInterval(bannerInterval)
      }
    }, 100);
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/hSwiper.css";
</style>
