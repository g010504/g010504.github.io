<template>
  <div class="accounts">
    <nav>
      <nav-con />
    </nav>
    <!-- <search-con /> -->
    <div class="indent-detail">
      <location @location="jieshou"></location>
      <indent />
      <div class="shopList">
        <h4>配送方式</h4>
        <div class="send">
          <ul>
            <li
              v-for="(item, index) in express"
              :key="index"
              @click="send(index)"
              :class="{ border: index == n }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <span>预计2022年9月19日前送达</span>
        <div class="clear"></div>
      </div>
      <div class="pay">
        <p>
          总商品数量：<span>{{ count }}件</span>
        </p>
        <p>
          总商品金额：<span>￥{{ total }}</span>
        </p>
        <p>返现：<span>￥00.00</span></p>
        <p>运费：<span>￥00.00</span></p>
      </div>
      <div class="select">
        <h4>支付方式</h4>
        <div class="select-con">
          <span
            v-for="(item, index) in paySelect"
            :key="index"
            @click="select(index)"
            :class="{ selects: index == m }"
            ><i class="iconfont" :class="item.icon"></i>{{ item.name }}</span
          >
        </div>
        <div class="submit">
          <p>
            应付金额：<span>￥{{ total }}</span>
          </p>
          <button @click="submit">提交订单</button>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <pageFooter />
  </div>
</template>

<script>
import navCon from "../../components/store/navCon.vue";
import location from "../../components/accounts/location.vue";
import indent from "../../components/accounts/indent.vue";
import pageFooter from "../../components/pageFooter.vue";
export default {
  components: {
    navCon,
    location,
    indent,
    pageFooter,
  },
  data() {
    return {
      total: "",
      count: "",
      n: "0",
      express: [
        { name: "顺丰快递" },
        { name: "圆通快递" },
        { name: "申通快递" },
        { name: "极兔快递" },
        { name: "韵达快递" },
        { name: "邮政快递" },
      ],
      m: "0",
      paySelect: [
        { icon: "icon-weixin", name: "微信" },
        { icon: "icon-zhifubao", name: "支付宝" },
        { icon: "icon-yinhangka1", name: "银行卡" },
      ],
      token: "",
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      address: "",
      receiver: "",
      phone: "",
      sids: "",
    };
  },
  methods: {
    send(index) {
      this.n = index;
    },
    select(index) {
      this.m = index;
    },
    //接收子组件传过来的收货地址信息
    jieshou(address, receiver, phone) {
      this.address = address;
      this.receiver = receiver;
      this.phone = phone;
    },
    //提交订单
    submit() {
      var sid = JSON.stringify(this.sids);
      var str = `appkey=${this.appkey}&tokenString=${this.token}&sids=${sid}&phone=${this.phone}&address=${this.address}&receiver=${this.receiver}`;
      this.axios({
        method: "POST",
        url: "/pay",
        data: str,
      }).then((res) => {
        this.$message({
          type: "success",
          message: "结算成功！",
        });
        setTimeout(() => {
          this.$router.go(-1);
        }, 1000);
      });
    },
  },
  created() {
    this.total = this.$route.query.p;
    this.count = this.$route.query.c;
    this.sids = this.$route.query.sids;
    this.token = this.$cookies.get("TOKEN");
  },
};
</script>

<style lang="less" scoped>
.indent-detail {
  width: 1200px;
  border: solid rgb(229, 229, 229) 1px;
  margin: 20px auto 0px;
  box-sizing: border-box;
  padding: 40px;
}
.shopList {
  border-bottom: solid 1px rgb(244, 244, 244);
  padding-bottom: 20px;
  h4 {
    margin: 10px 0;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    li {
      width: 100px;
      height: 30px;
      line-height: 30px;
      border-radius: 50px;
      text-align: center;
      border: solid 1px rgb(205, 205, 205);
    }
    li:hover {
      cursor: default;
    }
    .border {
      border: solid red 1px;
      background-color: red;
      color: white;
    }
  }
  span {
    float: right;
  }
}
.pay {
  padding: 20px 0;
  border-bottom: solid 1px rgb(244, 244, 244);
  p {
    font-weight: bolder;
    line-height: 25px;
    span {
      float: right;
      color: red;
    }
  }
}
.select {
  padding: 10px 0;
  h4 {
    margin: 10px 0px;
  }
  .select-con {
    margin-top: 20px;
    font-size: 20px;
    span {
      border: solid 1px rgb(205, 205, 205);
      padding: 5px 10px;
      margin-right: 10px;
      letter-spacing: 5px;
      border-radius: 50px;
      i {
        font-size: 23px;
      }
    }
    .selects {
      border: solid red 1px;
      background-color: red;
      color: white;
    }
    span:hover {
      cursor: default;
    }
  }
  .submit {
    float: right;
    p {
      font-weight: bolder;
      span {
        color: red;
        font-size: 23px;
      }
    }
    button {
      width: 160px;
      margin: 10px 0;
      height: 40px;
      background-color: red;
      border: none;
      color: white;
      font-size: 18px;
      border-radius: 50px;
    }
  }
}
</style>