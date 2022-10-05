<template>
  <div class="newlist-center">
    <div class="nvg">
      <div class="nvg-left">
        <span><a href="#">综合</a></span>
        <span><a href="#">国漫</a></span>
        <span><a href="#">日漫</a></span>
      </div>
      <div class="nvg-right" @click="getnew">
        <img src="../../../assets/img/刷新.png" />
        <span>刷新</span>
      </div>
    </div>
    <div class="infinite-list-wrapper" style="overflow: auto">
      <ul class="list">
        <li v-for="(item, index) in count" :key="index" class="list-item">
          <div class="contents">
            <a href="#">
              <div class="text">{{ item.desc }}</div>
              <div class="image">
                <div class="img">
                  <img :src="item.smallImg" alt="" />
                </div>
                <div class="img">
                  <img :src="item.smallImg" alt="" />
                </div>
                <div class="img">
                  <img :src="item.smallImg" alt="" />
                </div>
              </div>
              <div class="text2">
                <span>动漫新际</span>
                <span>1小时前</span>
                <span
                  >分享&nbsp;<span class="iconfont icon-fenxiang"></span
                ></span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: [],
      loading: false,
    };
  },
  methods: {
    //获取清单
    getnew() {
      if (!this.loading) {
        this.loading = true
        this.axios({
          method: "get",
          url: "/typeProducts",
          params: {
            appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
            key: "createdAt",
            value: "2021-01-24T10:53:54.000Z",
          },
        }).then((res) => {
          var arr = [];
          for (var i = 0; i < 10; i++) {
            var data = res.data.result[Math.floor(Math.random() * 10)];
            arr.push(data);
          }
          this.count = arr;
          this.loading = false
        });
      }
    },
  },
  created() {
    this.getnew();
  },
};
</script>

<style lang="less" scoped>
.newlist-center {
  width: 700px;
  float: left;
  margin: 0px 10px;
  background-color: white;
}

.newlist-center .srcoll {
  height: 700px;
  overflow-y: scroll;
}

.newlist-center .srcoll::-webkit-scrollbar {
  display: none;
}
.newlist-center .nvg {
  border-bottom: #999 dotted 1px;
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
}
.newlist-center .nvg-left {
  float: left;
}
.newlist-center .nvg-left span {
  margin: 0 10px;
}
.newlist-center .nvg-right {
  float: right;
  position: relative;
}
.newlist-center .nvg-right:hover {
  cursor: pointer;
}
.newlist-center .nvg-right img {
  position: absolute;
  top: 6px;
  right: 35px;
}
.newlist-center .nvg::after {
  content: "";
  display: block;
  clear: both;
}
.newlist-center .contents {
  height: 230px;
  border-top: #999 dotted 1px;
}

.newlist-center .contents:hover {
  background-color: rgb(242, 242, 242);
}
.newlist-center .contents a:hover {
  cursor: default;
}
.contents .text {
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.contents .image {
  display: flex;
  justify-content: space-around;
}
.contents .img {
  width: 230px;
  height: 160px;
  float: left;
  overflow: hidden;
}

.contents .img img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
  object-fit: cover;
}
.contents .img:hover img {
  transform: scale(1.05);
}
.contents .text2 {
  margin-top: 10px;
  color: rgb(138, 138, 138);
  font-size: 10px;
  padding-left: 5px;
}
.contents .text2 span {
  margin-right: 10px;
}
.contents .text2 span:nth-child(3) {
  float: right;
}
.icon-fenxiang {
  font-size: 10px;
}

.infinite-list-wrapper {
  /* border: solid red 1px; */
  height: 700px;
  p {
    text-align: center;
    margin: 10px 0px;
  }
}
</style>