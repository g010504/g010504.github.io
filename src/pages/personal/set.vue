<template>
  <div class="location">
    <div style="margin: 20px"></div>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
    >
      <el-form-item label="收货人:">
        <el-input
          v-model="formLabelAlign.name"
          placeholder="真实姓名"
          ref="name"
          @keyup.enter="name"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号码:">
        <el-input
          v-model="formLabelAlign.region"
          placeholder="11位手机号码"
          ref="region"
          @keyup.enter="region"
        ></el-input>
      </el-form-item>
      <el-form-item label="收货地址:">
        <el-input
          class="location-input"
          v-model="formLabelAlign.province"
          placeholder="省"
          ref="province"
          @keyup.enter="province"
        ></el-input>
        <el-input
          class="location-input"
          v-model="formLabelAlign.city"
          placeholder="市"
          ref="city"
          @keyup.enter="city"
        ></el-input>
        <el-input
          class="location-input"
          v-model="formLabelAlign.county"
          placeholder="县"
          ref="county"
          @keyup.enter="county"
        ></el-input>
        <el-input
          v-model="formLabelAlign.addressDetail"
          placeholder="详细地址"
          ref="addressDetail"
          @keyup.enter="addressDetail"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮政编码:">
        <el-input
          v-model="formLabelAlign.card"
          placeholder="邮政编码"
          ref="card"
        ></el-input>
      </el-form-item>
      <el-form-item label="设置默认地址:">
        <el-switch
          v-model="value1"
          active-text="默认地址"
          inactive-text="非默认地址"
        >
        </el-switch>
      </el-form-item>
    </el-form>
    <button @click="save">保存</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      de: "",
      token: "",
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        province: "",
        city: "",
        county: "",
        addressDetail: "",
        card: "",
      },
      regionShow: false,
    };
  },
  methods: {
    //用户名回车
    name() {
      if (this.formLabelAlign.name) {
        this.$refs.region.focus();
      } else {
        this.$message({
          type: "warning",
          message: "收货名不能为空！",
        });
      }
    },
    //手机号码回车
    region() {
      if (this.formLabelAlign.region) {
        this.$refs.province.focus();
      } else {
        this.$message({
          type: "warning",
          message: "手机号码不能为空！",
        });
      }
    },
    //省回车
    province() {
      if (this.formLabelAlign.province) {
        this.$refs.city.focus();
      } else {
        this.$message({
          type: "warning",
          message: "省不能为空!",
        });
      }
    },
    //市回车
    city() {
      if (this.formLabelAlign.city) {
        this.$refs.county.focus();
      } else {
        this.$message({
          type: "warning",
          message: "市不能为空！",
        });
      }
    },
    //区回车
    county() {
      if (this.formLabelAlign.county) {
        this.$refs.addressDetail.focus();
      } else {
        this.$message({
          type: "warning",
          message: "县不能为空！",
        });
      }
    },
    //详细地址回车
    addressDetail() {
      if (this.formLabelAlign.addressDetail) {
        this.$refs.card.focus();
      } else {
        this.$message({
          type: "warning",
          message: "详细地址不能为空！",
        });
      }
    },
    //保存地址信息
    save() {
      //监听名字是否有值
      if (!this.formLabelAlign.name) {
        this.$message({
          type: "warning",
          message: "名字不能为空",
        });
        this.$refs.name.focus();
        return;
      }
      //监听手机号码是否符合规范
      var regionReg = /^1[3-9]\d{9}$/;
      if (!regionReg.test(this.formLabelAlign.region)) {
        this.$message({
          type: "warning",
          message: "请输入正确的手机号码",
        });
        this.$refs.region.focus();
        return;
      }
      //监听地址是写全
      var chcek =
        this.formLabelAlign.province &&
        this.formLabelAlign.city &&
        this.formLabelAlign.county &&
        this.formLabelAlign.addressDetail;
      if (!chcek) {
        this.$message({
          type: "warning",
          message: "请写全地址",
        });
        if (!this.formLabelAlign.province) {
          this.$refs.province.focus;
        }
        if (!this.formLabelAlign.city) {
          this.$refs.city.focus;
        }
        if (!this.formLabelAlign.county) {
          this.$refs.county.focus;
        }
        if (!this.formLabelAlign.addressDetail) {
          this.$refs.addressDetail.focus;
        }
        return;
      }
      //监听是否为默认地址
      if (!this.value1) {
        this.de = 0;
      }
      if (this.value1) {
        this.de = 1;
      }
      //发起保存请求
      var token = this.$cookies.get("TOKEN");
      var str = `appkey=${this.appkey}&tokenString=${token}&name=${this.formLabelAlign.name}&tel=${this.formLabelAlign.region}
          &province=${this.formLabelAlign.province}&city=${this.formLabelAlign.city}&county=${this.formLabelAlign.county}
          &addressDetail=${this.formLabelAlign.addressDetail}&areaCode=${this.formLabelAlign.card}&postalCode=${this.formLabelAlign.card}&isDefault=${this.de}`;
      this.axios({
        method: "POST",
        url: "/addAddress",
        data: str,
      }).then((res) => {
        console.log(res);
        this.$message({
          type: "success",
          message: "添加成功！",
        });
        this.formLabelAlign.name = "";
        this.formLabelAlign.region = "";
        this.formLabelAlign.province = "";
        this.formLabelAlign.city = "";
        this.formLabelAlign.county = "";
        this.formLabelAlign.addressDetail = "";
        this.formLabelAlign.card = "";
      });
    },
  },
};
</script>

<style lang="less" scoped>
.location {
  width: 1255px;
  height: 670px;
  border-radius: 20px;
  padding: 80px 100px;
  margin: 40px auto;
  background-color: #c3dbff;
}
button {
  width: 150px;
  height: 40px;
  border: none;
  background-color: blue;
  color: white;
  float: right;
}
.location-input {
  width: 100px;
  margin-right: 10px;
}

// /deep/ .el-input__inner{
//   border: solid red 1px;
// }
</style>