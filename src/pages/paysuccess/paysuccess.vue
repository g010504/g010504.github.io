<template>
  <div class="cart">
    <nav>
      <nav-con />
    </nav>
    <div class="success">
      <div class="box1">
        <span
          ><i class="iconfont icon-chenggong"></i>支付成功！订单生成中...</span
        >
        <span class="return">{{ number }}秒后返回首页</span>
      </div>
      <div class="box2">
        <span @click="rtn"><i class="iconfont icon-zuojiantou">返回首页</i></span>
      </div>
    </div>
    <pageFooter />
  </div>
</template>

<script>
import navCon from "../../components/store/navCon.vue";
import pageFooter from "../../components/pageFooter.vue";
export default {
  components: {
    navCon,
    pageFooter,
  },
  data() {
    return {
      number: "6",
      Interval: "",
    };
  },
  methods: {
    setTimeOut() {
      if (this.number >= 1) {
        this.Interval = setInterval(() => {
          this.number--;
          console.log(this.number);
          if (this.number == 0) {
            clearInterval(this.Interval);
            this.$router.push("/homePage/gridDetail")
          }
        }, 1000);
      }
    },
    rtn(){
        this.$router.push("/homePage/gridDetail")
        clearInterval(this.Interval);
    }
  },
  created() {
    this.setTimeOut();
  },
};
</script>

<style lang="less" scoped>
.success {
  padding-top: 145px;
  .box1,
  .box2 {
    width: 500px;
    height: 100px;
    text-align: center;
    margin: auto;
  }
  .box1 {
    font-size: 30px;
    font-weight: 100;
    color: rgb(5, 174, 5);
    span {
      margin: 10px;
      display: block;
    }
    .icon-chenggong {
      font-size: 30px;
    }
    .return {
      color: #000;
      font-size: 20px;
    }
  }
  .box2 {
    span {
      display: block;
      width: 150px;
      height: 40px;
      border: #999 1px solid;
      text-align: center;
      line-height: 35px;
      margin: auto;
      color: rgb(70, 70, 70);

    }
    span:hover {
      cursor: pointer;
      border: red solid 1px;
      color: red;
    }
  }
}
</style>