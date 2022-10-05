<template>
  <div class="search">
    <div class="search-box">
      <input type="text" />
      <span @mousedown="search">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    search(event) {
      //防止点击密码显示与隐藏时，input失去焦点，使用 @mousedown=search
      event.preventDefault();
    },
    change() {
      this.show = !this.show;
    },
    login() {
      if (sessionStorage.getItem("token")) {
        this.$router.push("/personAge");
      } else {
        this.$router.push("/login");
      }
    },
    exit() {
      sessionStorage.removeItem("token");
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  width: 450px;
  height: 80px;
  position: absolute;
  left: 50%;
  margin-left: -225px;
  top: 350px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  transition: opacity 0.2s;
  border-radius: 50px;
  .search-box {
    border: solid #c3dbff 2px;
    height: 40px;
    border-radius: 50px;
    background-color: white;
    overflow: hidden;
    input {
      width: 320px;
      height: 38px;
      font-size: 20px;
      border: none;
      outline: none;
      float: left;
      margin-left: 20px;
    }
    span {
      display: block;
      width: 70px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      margin-top: -3px;
      margin-right: -5px;
      float: right;
      background-color: #c3dbff;
      color: white;
    }
    span:hover {
      cursor: pointer;
    }
  }
}

.search:focus-within {
  opacity: 1;
  box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 1);
  backdrop-filter: blur(20px);
}
</style>
