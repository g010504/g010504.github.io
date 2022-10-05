<template>
  <div>
    <h4>收货地址</h4>
    <el-table :data="tableData" style="width: 100%" max-height="400">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="postalCode" label="邮编" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      token: "",
      tableData: [],
    };
  },
  methods: {
    //删除收货地址信息
    deleteRow(index, rows) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          var aid = this.tableData[index].aid;
          var str = `appkey=${this.appkey}&tokenString=${this.token}&aid=${aid}`;
          this.axios({
            method: "POST",
            url: "/deleteAddress",
            data: str,
          }).then((res) => {
            if (res.data.code == "10000") {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              rows.splice(index, 1);
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
    //获取收货地址信息
    getLocation() {
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
          item.date = item.createdAt.slice(0, 10);
        });
        this.tableData = res.data.result;
      });
    },
  },
  created() {
    if (this.$cookies.get("TOKEN")) {
      this.token = this.$cookies.get("TOKEN");
      this.getLocation();
    }
  },
};
</script>

<style lang="less" scoped>
h4 {
  margin: 10px 0;
  letter-spacing: 5px;
  color: #999;
}
</style>