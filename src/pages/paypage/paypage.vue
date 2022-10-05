<template>
  <div class="accounts">
    <nav>
      <nav-con />
    </nav>
    <div class="indent-detail">
      <div class="location">
        <div class="loc-box">
          <h4>收货信息</h4>
          <div class="message" v-for="(item, index) in location" :key="index">
            <p>
              姓名：<span>{{ item.name }}</span
              ><span
                class="default"
                v-show="item.isDefault == 1"
                :class="{ bg: index == 1 }"
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
      <div class="bigbox">
        <h4>商品信息</h4>
        <div class="box-indent" v-for="(item, index) in indent" :key="index">
          <div class="indent">
            <div class="indent-details">
              <div class="detail-img">
                <img :src="item.small_img" alt="" />
              </div>
              <div class="detail-content">
                <div class="detail-name">
                  <span>{{ item.nickName }}</span>
                </div>
                <div class="detail-detail">
                  <span>{{ item.rule }}</span>
                  <span>{{ item.desc }}</span>
                </div>
                <div class="detail-box">
                  <div class="box-price">
                    <span>￥{{ item.price * item.count }}</span>
                    <span
                      ><span class="text">实际付款:</span>￥{{
                        item.price * item.count
                      }}</span
                    >
                  </div>
                  <span>x{{ item.count }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="remark">
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              placeholder="卖家留言："
            ></textarea>
          </div>
        </div>
      </div>
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
      location: [],
      indent: [],
    };
  },
  methods: {
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
    this.getlocation();
  },
};
</script>

<style lang="less" scoped>
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
.bigbox {
  border-bottom: solid 1px rgb(244, 244, 244);
  padding: 10px 0px;
}
.box-indent {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}

.indent-details {
  display: flex;
  align-items: center;
  width: 800px;
  background-color: rgb(252, 252, 252);
  .detail-img {
    width: 130px;
    height: 130px;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail-content {
    width: 600px;
    height: 130px;
    margin-right: 20px;
    text-align: left;
    line-height: 30px;
    position: relative;
    .detail-name {
      display: flex;
      justify-content: space-between;
      padding-right: 10px;
      span {
        font-size: 23px;
      }
    }
    .detail-detail {
      font-size: 16px;
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: column;
      text-overflow: ellipsis;
      overflow: hidden;
      flex-wrap: nowrap;
    }
    .detail-box {
      width: 100%;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      padding-right: 10px;
      .box-price span {
        margin-right: 20px;
        color: red;
        .text {
          margin: 0;
          color: black;
        }
      }
    }
  }
  .detail-shoped {
    width: 150px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    span {
      width: 100px;
      height: 30px;
      border: solid rgb(225, 225, 225) 1px;
      border-radius: 50px;
      line-height: 30px;
    }
    span:hover {
      background-color: #84b3fd;
      color: white;
      cursor: pointer;
    }
  }
}
.remark {
  width: 300px;
  height: 150px;
  // border: solid 1px red;
  overflow: hidden;
  textarea {
    border: solid rgb(218, 218, 218) 1px;
    outline: none;
    width: 300px;
    height: 150x;
  }
}

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