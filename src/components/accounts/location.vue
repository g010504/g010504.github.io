<template>
  <div class="location">
    <div class="loc-box">
      <h4>收货信息</h4>
      <div
        class="message"
        v-for="(item, index) in location"
        :key="index"
        :class="{ border: index == n }"
        @click="select(index)"
      >
        <p>
          姓名：<span>{{ item.name }}</span
          ><span
            class="default"
            v-show="item.isDefault == 1"
            :class="{ bg: index == n }"
            >默认</span
          >
        </p>
        <p>
          手机号码：<span>{{ item.tel }}</span>
        </p>
        <p>
          收货地址：<span>{{ item.address }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      n: "0",
      location: [],
    };
  },
  methods: {
    //传递收货地址信息
    select(index) {
      this.n = index;
      var str = this.location[index];
      this.$emit("location", str.address, str.name, str.tel);
    },
    //获取收货地址信息
    getlocation() {
      this.axios({
        method: "get",
        url: "/findAddress",
        params: {
          appkey: this.appkey,
          tokenString: this.token,
        },
      }).then((res) => {
        res.data.result.forEach((item) => {
          item.address =
            item.province + item.city + item.county + item.addressDetail;
        });
        this.location = res.data.result;
        var ty = res.data.result[this.n];
        this.$emit("location", ty.address, ty.name, ty.tel);
      });
    },
  },
  created() {
    if (this.$cookies.get("TOKEN")) {
      this.token = this.$cookies.get("TOKEN");
      this.getlocation();
    }
  },
};
</script>

<style lang="less" scoped>
h4:hover {
  cursor: pointer;
}
.location {
  width: 100%;
  border-bottom: solid 1px rgb(244, 244, 244);
  padding: 20px 0px;
  .message {
    margin-top: 10px;
    padding-left: 10px;
    border: solid rgb(238, 238, 238) 1px;
    p {
      line-height: 25px;
    }
    .default {
      display: block;
      float: right;
      color: white;
      width: 50px;
      margin-top: -1px;
      text-align: center;
      background-color: rgb(238, 238, 238);
    }
    .bg {
      background-color: red;
    }
  }
  .border {
    border: solid red 1px;
  }
}
</style>