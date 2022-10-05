<template>
  <div class="grid">
    <!-- 哆啦A梦 -->
    <div class="title">
      <span class="left-door"></span>
      <span class="right-door"></span>
      <div class="title-text">
        <span class="before"></span>
        <P>热门推荐</P>
        <span class="after"></span>
      </div>
      <div class="cat">
        <div>
          <div class="fly flys"></div>
          <div class="fly flya"></div>
          <div class="fly flyb"></div>
          <div class="fly flyc"></div>
          <div class="fly flyd"></div>
          <div class="flyz"></div>
        </div>
        <div class="top">
          <div class="face"></div>
          <div class="ease"></div>
          <div class="beards">
            <div class="beard"></div>
            <div class="beard"></div>
            <div class="beard"></div>
          </div>
          <div class="mouth mouth2"></div>
        </div>
        <div class="mouth mouth1"></div>
        <div class="mouth-white"></div>
        <div class="nose"></div>
        <div class="small">
          <div class="border"></div>
          <div class="border"></div>
          <div class="border"></div>
        </div>
        <div class="scarf">
          <div></div>
        </div>
        <div class="body">
          <div class="koudai"></div>
          <div class="koudai1"></div>
          <div class="hand">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="hands"></div>
          </div>
        </div>
        <div class="tail"></div>
        <div class="tail1"></div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="content-list">
        <ul>
          <router-link to="/homePage/gridDetail"
            ><li>玄幻<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>异能<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>恐怖<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>剧情<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>科幻<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>悬疑<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>奇幻<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>冒险<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>犯罪<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
          <router-link to="/homePage/gridDetail"
            ><li>更多<i class="iconfont icon-xiangyoujiantou"></i></li></router-link
          >
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped src="../../assets/css/a.css">
</style>
<style lang="less" scoped>

.grid{
  background-color: #8aaad9;
}

.content-list {
  width: 200px;
  height: 400px;
  background-color: #c3dbff;
  float: left;
}
ul li {
  width: 200px;
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  position: relative;
  list-style: none;
  color: white;
  // background: url(../../assets/img/向右箭头.png) no-repeat;
  background-size: 15px;
  background-position: 175px;
}
ul li:hover {
  background-color: #8aaad9;
}

.right {
  width: 1000px;
  height: 400px;
  float: right;
  background-color: white;
}
.icon-xiangyoujiantou{
  color: white;
  float: right;
  margin-right: 10px;
}
</style>