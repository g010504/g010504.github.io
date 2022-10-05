<template>
  <div class="personMsg">
    <div style="margin: 20px"></div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="头像:">
        <span class="headerTop"><img :src="personMsg.userImg" alt="" /></span>
      </el-form-item>
      <el-form-item label="昵称:">
        <span>{{ personMsg.nickName }}</span>
      </el-form-item>
      <el-form-item label="id:">
        <span>{{ personMsg.userId }}</span>
      </el-form-item>
      <el-form-item label="个性签名:">
        <span>{{ personMsg.desc }}</span>
      </el-form-item>
    </el-form>
    <div class="cancel">
      <button :style="{ backgroundColor: color }" @click="cancel">
        账号注销
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      value1: false,
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
        card: "",
      },
      personMsg: [],
      color: "",
    };
  },
  methods: {
    //获取个人信息
    getAccountInfo() {
      this.axios({
        method: "get",
        url: "/findAccountInfo",
        params: {
          appkey: this.appkey,
          tokenString: this.token,
        },
      }).then((res) => {
        this.personMsg = res.data.result[0];
      });
    },
    //注销账号
    cancel() {
      this.color = "#3f8cff";
      setTimeout(()=>{
        this.color = ""
      },100)
      var str = `appkey=${this.appkey}&tokenString=${this.token}`
      this.axios({
        method:"POST",
        url:"/destroyAccount",
        data:str
      }).then((res)=>{
        if(res.data.code == "G001"){
          this.$cookies.set("TOKEN", "", "1s", "/");
          this.$message({
            type:"success",
            message:"注销成功"
          })
          setTimeout(() => {
            this.$router.push("/homePage/gridDetail")
          }, 500);
        }
      })
    },
  },
  created() {
    if (this.$cookies.get("TOKEN")) {
      this.token = this.$cookies.get("TOKEN");
      this.getAccountInfo();
    }
  },
};
</script>

<style lang="less" scoped>
.personMsg {
  position: relative;
}
.el-form-item {
  margin: 0;
}
.headerTop {
  display: block;
  width: 40px;
  height: 40px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cancel {
  position: absolute;
  top: 20px;
  right: 20px;
  button {
    width: 100px;
    height: 40px;
    border: none;
    background-color: #c3dbff;
    border-radius: 5px;
    color: white;
    font-size: 18px;
  }
}
</style>