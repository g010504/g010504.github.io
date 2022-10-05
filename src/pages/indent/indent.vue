<template>
  <div class="store">
    <nav>
      <nav-con />
    </nav>
    <search-con />
    <div class="indent-box">
      <div>
        <span class="title">我的订单</span>
        <div class="indet-box2">
          <div class="indent-title">
            <div
              class="id"
              @click="indent(index)"
              :class="{ backgroundColor: n == index }"
              v-for="(item, index) in arr"
              :key="index"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="indent-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="indent-like">
        <span><i class="iconfont icon-aixin"></i>猜你喜欢</span>
        <indentLike />
      </div>
    </div>
    <pageFooter />
  </div>
</template>

<script>
import navCon from "../../components/store/navCon.vue";
import searchCon from "../../components/store/searchCon.vue";
import cart from "../../components/cart/cart.vue";
import indentLike from "../../components/indent/indentLike.vue";
import pageFooter from "../../components/pageFooter.vue";
export default {
  components: {
    navCon,
    searchCon,
    cart,
    indentLike,
    pageFooter,
  },
  data() {
    return {
      n: "",
      arr: [{ name: "全部" }, { name: "进行中" }, { name: "已完成" }],
    };
  },

  methods: {
    //选中路由修改样式
    indent(index) {
      if (this.n == index) {
        return;
      }
      this.n = index;
      if (index == 0) {
        this.$router.push("/indent/allindent");
      }
      if (index == 1) {
        this.$router.push("/indent/indenting");
      }
      if (index == 2) {
        this.$router.push("/indent/indented");
      }
    },
  },
  created() {
    if (!this.$cookies.get("TOKEN")) {
      let loginURL = this.$router.resolve({
        path: "/login",
      });
      window.open(loginURL.href, "_blank");
      return;
    }
  },
  watch: {
    //监听刷新前路由地址
    $router: {
      handler(val) {
        if(val.history.current.path == '/indent/allindent'){
          this.n=0
        }
        if(val.history.current.path == '/indent/indenting'){
          this.n=1
        }
        if(val.history.current.path == '/indent/indented'){
          this.n=2
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.indent-box {
  width: 1201px;
  margin: auto;
  .title {
    font-size: 20px;
  }
  .indet-box2 {
    width: 100%;
    border: solid rgb(231, 231, 231) 1px;
  }
}

.indent-title {
  height: 55px;
  position: relative;
  display: flex;
  justify-content: space-around;
  line-height: 55px;
  .id {
    width: 400px;
    text-align: center;
    transition: 0.5s;
    border-radius: 50px;
  }
  span:hover {
    color: red;
    cursor: pointer;
  }
  .backgroundColor {
    background-color: #84b3fd;
    color: white;
  }
  .backgroundColor span:hover {
    color: white;
  }
}
.indent-content {
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  //   background-color: aquamarine;
}
.indent-content::-webkit-scrollbar{
  display: none;
}
.indent-like {
  width: 100%;
  span {
    display: block;
    padding-top: 20px;
    padding-bottom: 10px;
    color: #e5404f;
    font-size: 20px;
    i {
      font-size: 20px;
    }
  }
}
</style>