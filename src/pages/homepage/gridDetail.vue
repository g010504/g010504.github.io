<template>
  <div class="content-detail" v-if="this.arr != '' ">
    <div class="item">
      <img :src="arr[0].largeImg" alt="" />
      <span></span>
      <p>{{ arr[0].desc }}</p>
    </div>
    <div class="item">
      <img :src="arr[1].largeImg" alt="" />
      <span></span>
      <p>{{ arr[1].desc }}</p>
    </div>
    <div class="item">
      <img :src="arr[2].largeImg" alt="" />
      <span></span>
      <p>{{ arr[2].desc }}</p>
    </div>
    <div class="item">
      <img :src="arr[3].largeImg" alt="" />
      <span></span>
      <p>{{ arr[3].desc }}</p>
    </div>
    <div class="item">
      <div class="item-child">飙升榜</div>
      <div class="item-child">新作榜</div>
      <div class="item-child">畅销榜</div>
      <div class="item-child">男生榜</div>
      <div class="item-child">女生榜</div>
      <div class="item-child">Top100</div>
    </div>
    <div class="item">
      <img :src="arr[4].largeImg" alt="" />
      <span></span>
      <p>{{ arr[4].desc }}</p>
    </div>
    <div class="item">
      <img :src="arr[5].largeImg" alt="" />
      <span></span>
      <p>{{ arr[5].desc }}</p>
    </div>
    <div class="item">
      <img :src="arr[6].largeImg" alt="" />
      <span></span>
      <p>{{ arr[6].desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    getdata() {
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
      });
    },
  },
  created() {
    this.getdata();
  },
  beforeCreate() {},
};
</script>

<style lang="less" scoped>
.content-detail {
  display: grid;
  grid-template-rows: 132px 63px 64px 132px;
  grid-template-columns: 300px 200px 200px 144px 144px;
  grid-template-areas:
    "a  b  c  e  e"
    "a  b  c  f  f"
    "a  d  d  f  f"
    "a  d  d  g  h";
  gap: 3px 3px;
}

.item {
  position: relative;
  overflow: hidden;
}

.item:nth-child(1) {
  width: 300px;
  grid-area: a;
}
.item:nth-child(2) {
  grid-area: b;
}
.item:nth-child(3) {
  grid-area: c;
}
.item:nth-child(4) {
  grid-area: d;
}
.item:nth-child(5) {
  grid-area: e;
  display: grid;
  grid-template-rows: repeat(3, 42px);
  grid-template-columns: repeat(2, 1fr);
  gap: 3px 3px;
  line-height: 42px;
  text-align: center;
}
.item:nth-child(6) {
  grid-area: f;
}
.item:nth-child(7) {
  grid-area: g;
}
.item:nth-child(8) {
  grid-area: h;
}
.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item span {
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0px;
  transition: 0.3s;
}

.item:hover span {
  background-color: rgba(0, 0, 0, 0.5);
}

.item p {
  cursor: default;
  display: block;
  width: 100%;
  position: absolute;
  bottom: 100%;
  color: white;
  padding-left: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item:hover p {
  animation: drop 0.5s forwards;
}

@keyframes drop {
  0% {
    bottom: 100%;
  }
  30% {
    bottom: 4px;
  }
  50% {
    bottom: 30px;
  }
  75% {
    bottom: 4px;
  }
  80% {
    bottom: 20px;
  }
  90% {
    bottom: 4px;
  }
  95% {
    bottom: 10px;
  }
  100% {
    bottom: 4px;
  }
}

.item .item-child {
  background-color: rgb(195, 219, 255);
  border-radius: 3px;
  color: white;
}

.item .item-child:hover {
  color: rgb(25, 142, 251);
  cursor: pointer;
}
</style>