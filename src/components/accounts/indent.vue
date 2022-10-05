<template>
  <div class="bigbox">
    <h4>商品信息</h4>
    <div class="box-indent" v-for="(item, index) in indent" :key="index">
      <div class="indent">
        <div class="indent-detail">
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
</template>

<script>
export default {
  data() {
    return {
      sids: "",
      token: "",
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      indent: [],
    };
  },
  methods: {
    //订单页面查询
    getIndent() {
      this.axios({
        method: "get",
        url: "/commitShopcart",
        params: {
          appkey: this.appkey,
          tokenString: this.token,
          sids: JSON.stringify(this.sids),
        },
      }).then((res) => {
        this.indent = res.data.result;
        var price = 0,
          num = 0;
        res.data.result.forEach((item) => {
          price = price + item.price * item.count;
          num = num + item.count;
        });

      });
    },
    
  },
  created() {
    if (this.$cookies.get("TOKEN")) {
      this.token = this.$cookies.get("TOKEN");
      this.sids = this.$route.query.sids;
      this.getIndent();
    }
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>

.bigbox {
  border-bottom: solid 1px rgb(244, 244, 244);
  padding: 10px 0px;
}
.box-indent {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}

.indent-detail {
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
</style>