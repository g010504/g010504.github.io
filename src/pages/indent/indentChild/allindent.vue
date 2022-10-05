<template>
  <div class="indent">
    <table class="indent-table">
      <tr>
        <th width="60">
          <div class="indent-all-box" >
            <span class="indent-all">全选</span>
            <span
              ><input
                type="checkbox"
                class="indent-check"
                v-model="selectCheck"
            /></span>
          </div>
        </th>
        <th>详情</th>
        <th width="150">清空/删除所选</th>
      </tr>
      <tr class="indent-item" v-for="(item, index) in goodsList" :key="index">
        <td>
          <input type="checkbox" class="indent-check" v-model="item.flag" />
        </td>
        <td>
          <div class="indent-detail">
            <div class="detail-img">
              <img :src="item.smallImg" alt="" />
            </div>
            <div class="detail-content">
              <div class="detail-name">
                <span>{{ item.name }}</span>
                <span v-if="item.status == 2" style="color: black">已完成</span>
                <span v-else>进行中...</span>
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
            <div class="detail-shoped">
              <span>更多详情</span>
              <span>追加评价</span>
              <span>售后服务</span>
            </div>
          </div>
        </td>
        <td><span class="indent-del" @click="del(index)">删除</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      computed: false,
      token: "",
      goodsList: [],
      filerGoods: [],
    };
  },
  methods: {
    //删除订单
    del(index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          var oid = this.goodsList[index].oid;
          var str = `appkey=${this.appkey}&tokenString=${this.token}&oid=${oid}`;
          this.axios({
            method: "POST",
            url: "/removeOrder",
            data: str,
          }).then((res) => {
            console.log(res);
            if (res.data.code == "90000") {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              setTimeout(() => {
                this.$router.go(0)
              },500);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //获取订单详情
    getAllIndent() {
      this.axios({
        method: "get",
        url: "/findOrder",
        params: {
          appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          tokenString: this.token,
          status: 0,
        },
      }).then((res) => {
        res.data.result.forEach((item) => {
          item.flag = false;
        });
        this.goodsList = res.data.result;
        if (res.data.result.length > 0) {
          this.computed = true;
        }
      });
    },
  },
  created() {
    if (this.$cookies.get("TOKEN")) {
      this.token = this.$cookies.get("TOKEN");
      this.getAllIndent();
    }
  },
  computed: {
    //全选功能
    selectCheck: {
      get() {
        if (this.computed) {
          const filGoods = this.goodsList.filter((item) => {
            return item.flag; //将标志为true的商品过滤出来
          });
          this.filerGoods = filGoods;
          return this.goodsList.length == this.filerGoods.length;
        }
      },
      set(value) {
        this.goodsList.forEach((goods) => {
          //goods:表示每一个商品
          goods.flag = value;
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.indent {
  width: 1200px;
  padding: 0 10px 10px;
  border-top: 1px solid rgb(231, 231, 231);
  margin: auto;
}

.indent-table {
  width: 100%;
  margin: 0 auto;
  border-color: collapse;
  font-size: 12px;
  font-family: Verdana, "Microsoft YaHei";
  color: #333333;
}

.indent-table th {
  font-weight: normal;
  height: 35px;
  line-height: 35px;
}

.indent-table th:first-child span {
  line-height: 10px;
  height: 20px;
}

.indent-all-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  span {
    margin: 0px 1px;
  }
  .indent-all {
    margin-top: 2px;
  }
}

.indent-item {
  background-color: #fafcff;
  // border-bottom: 1px dotted #84b3fd;
}

.indent-item td {
  height: 150px;
  text-align: center;
}

.indent-del,
.indent-all {
  color: #3366d4;
}

.indent-del:hover,
.indent-all:hover {
  text-decoration: underline;
  cursor: pointer;
}

.indent-detail {
  display: flex;
  align-items: center;
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
      span:first-child {
        font-size: 23px;
      }
      span:last-child {
        font-size: 16px;
        color: red;
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
</style>