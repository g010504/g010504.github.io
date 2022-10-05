<template>
  <div class="newsright" @mouseenter="stop" @mouseleave="running">
    <div class="box" :class="{ active: isActive }">
      <div class="img" style="--i: 0">
        <img :src="imageArr[0].bannerImg" alt="" />
      </div>
      <div class="img" style="--i: 1">
        <img :src="imageArr[1].bannerImg" alt="" />
      </div>
      <div class="img" style="--i: 2">
        <img :src="imageArr[2].bannerImg" alt="" />
      </div>
      <div class="img" style="--i: 3">
        <img :src="imageArr[3].bannerImg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      imageArr: [{}, {}, {}, {}],
    };
  },

  methods: {
    stop() {
      this.isActive = !this.isActive;
    },
    running() {
      this.isActive = !this.isActive;
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
};
</script>

<style scoped>
.newsright {
  width: 240px;
  height: 427px;
  float: right;
  overflow: hidden;
}
.box {
  width: 240px;
  height: 427px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 8s linear infinite;
}
.active {
  animation-play-state: paused;
}
.img {
  width: 240px;
  height: 427px;
  position: absolute;
  transform: rotateY(calc(var(--i) * 90deg)) translateZ(120px);
}
img {
  width: 100%;
  height: 100%;
}
@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>