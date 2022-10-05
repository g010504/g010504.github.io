<template>
  <div class="person">
    <div class="body">
      <div class="left">
        <P
          ><router-link to="/homePage/gridDetail">
            <span class="iconfont icon-zuojiantou">返回</span></router-link
          ></P
        >
        <ul>
          <li v-for="(item,index) in arr" :key="index" :class="{background:index == n}" @click="change(index)">{{item.text}}<span class="iconfont icon-xiangyoujiantou"></span></li>
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
    return {
      arr: [
        {
          text: "信息修改",
        },
        {
          text: "信息增加",
        },
      ],
      n: '',
    };
  },
  methods: {
    change(index){
      if (this.n == index) {
        return;
      }
      this.n = index
      if(index == 0){
        this.$router.push("/personAge/message");
      }
      if(index == 1){
        this.$router.push("/personAge/set");
      }
    }
  },
  watch: {
    //监听刷新前路由地址
    $router: {
      handler(val) {
        if(val.history.current.path == '/personAge/message'){
          this.n=0
        }
        if(val.history.current.path == '/personAge/set'){
          this.n=1
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.person {
  height: 752px;
  width: 1536px;
  margin: auto;
  background-color: white;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.header span:hover {
  color: red;
}

.left {
  width: 200px;
  height: 752px;
  background-color: #c3dbff;
  float: left;
  position: relative;
}

.left ul {
  width: 200px;
}
.left p {
  height: 50px;
  line-height: 50px;
}
.left ul li {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.left ul li:hover {
  cursor: default;
}

.background{
  background-color: white;
}

.right {
  width: 1336px;
  height: 712px;
  float: left;
}
</style>