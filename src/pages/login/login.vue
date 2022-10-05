<template>
  <div id="background">
    <!-- 背景云层 -->
    <div id="header">
      <div id="clouds">
        <div class="cloud-1" data-speed="35000"></div>
        <div class="cloud-2" data-speed="45000" data-delay="15000"></div>
        <div class="cloud-3" data-speed="40000"></div>
        <div class="cloud-4" data-speed="38000" data-delay="20000"></div>
      </div>
    </div>
    <!-- / #header -->
    <div id="content">
      <div class="container">
        <!-- 登录模块 -->
        <!-- <form id="login" method="post" action="login.jsp" onsubmit="return checkForm(this);"> -->
        <!-- <div id="login_header"><i class="icon-home"></i>智能小区服务管理系统</div> -->
        <form id="login">
          <div id="login_header">
            <i class="iconfont icon-sharpicons_Rabbit"></i
            ><em>HareCartoon</em>&nbsp;次元之家
          </div>
          <div id="login_content">
            <span>
              <input
                :class="{ tip: true, shake: usernameShake }"
                name="username"
                ref="username"
                type="text"
                maxlength="18"
                @click="onClick((id = 1))"
                v-model.trim="username"
                @blur="onBlur((id = 0))"
                @keyup.enter="checkUser"
              />
              <label for="username">用户名</label>
              <i class="iconfont icon-jurassic_user"></i>
              <div class="tooltip" :class="{ tipActive: n == 1 }">
                填写您的账号
              </div>
            </span>
            <span>
              <input
                :class="{ tip: true, shake: passwordShake }"
                name="password"
                ref="password"
                type="password"
                @click="onClick((id = 2))"
                v-model.trim="password"
                @blur="onBlur((id = 0))"
                v-if="showPwt"
                @keyup.enter="checkPass"
              />
              <input
                :class="{ tip: true, shake: passwordShake }"
                name="password"
                ref="password"
                type="text"
                @click="onClick((id = 2))"
                v-model.trim="password"
                @blur="onBlur((id = 0))"
                v-else
                @keyup.enter="checkPass"
              />
              <label for="password">密码</label>
              <i
                @mousedown="changeShow"
                class="iconfont"
                :class="showPwt ? 'icon-yincang' : 'icon-yanjing-kejian'"
              ></i>
              <div class="tooltip" :class="{ tipActive: n == 2 }">
                填写您的密码
              </div>
            </span>
            <span>
              <div>
                <i class="iconfont icon-weixin"></i>
                <div class="appname">微信</div>
              </div>
              <div>
                <i class="iconfont icon-external_qq"></i>
                <div class="appname">QQ</div>
              </div>
              <div>
                <i class="iconfont icon-zhifubao"></i>
                <div class="appname">支付宝</div>
              </div>
              <div>
                <i class="iconfont icon-bangdingshoujihao"></i>
                <div class="appname">手机号</div>
              </div>
            </span>
          </div>
          <div id="login_footer">
            <span id="login_btn" type="submit" @click="login">登录</span>
            <!-- <button id="login_btn" type="submit" @click="login">登录</button> -->
          </div>
          <div>
            <a
              id="register_link"
              href="javascript:void(0);"
              @click="register_link"
              >新用户注册</a
            >
          </div>
        </form>
        <!-- / #login -->
        <!-- 注册模块 -->
        <!-- <form id="register" method="post" action="register.jsp" onsubmit="return checkForm(this);"> -->
        <!-- <div id="register_header"><i class="icon-home"></i>新用户注册</div> -->
        <form id="register">
          <div id="register_header">新用户注册</div>
          <div id="register_content">
            <span>
              <input
                :class="{ tip: true, shake: realnameShake }"
                ref="realname"
                name="realname"
                type="text"
                @click="onClick((id = 3))"
                v-model.trim="realname"
                @blur="onBlur((id = 0))"
                @keyup.enter="checkrealname"
              />
              <label for="realname">昵称</label>
              <i class="iconfont icon-jurassic_user"></i>
              <div class="tooltip" :class="{ tipActive: n == 3 }">
                填写您的昵称
              </div>
            </span>
            <span>
              <input
                :class="{ tip: true, shake: phoneShake }"
                ref="phone"
                name="phone"
                type="text"
                @click="onClick((id = 4))"
                v-model.trim="phone"
                @blur="onBlur((id = 0))"
                @keyup.enter="checkphone"
              />
              <label for="phone">手机号码</label>
              <i class="iconfont icon-shenfenzheng"></i>
              <div class="tooltip" :class="{ tipActive: n == 4 }">
                填写您的手机号码
              </div>
            </span>
            <span>
              <input
                :class="{ tip: true, shake: RpasswordShake }"
                ref="Rpassword"
                name="Rpassword"
                type="password"
                @click="onClick((id = 5))"
                v-model.trim="Rpassword"
                @blur="onBlur((id = 0))"
                v-if="showPwt"
                @keyup.enter="checkRpassword"
              />
              <input
                :class="{ tip: true, shake: RpasswordShake }"
                ref="Rpassword"
                name="Rpassword"
                type="text"
                @click="onClick((id = 5))"
                v-model.trim="Rpassword"
                @blur="onBlur((id = 0))"
                v-else
                @keyup.enter="checkRpassword"
              />
              <label for="password">密码</label>
              <i
                @mousedown="changeShow"
                class="iconfont"
                :class="showPwt ? 'icon-yincang' : 'icon-yanjing-kejian'"
              ></i>
              <div class="tooltip" :class="{ tipActive: n == 5 }">
                8~64位，由特殊符号，字母，数字组成
              </div>
            </span>
          </div>
          <div id="register_footer">
            <!-- <button id="register_btn" type="submit" @click="register">
              注册
            </button> -->
            <span id="register_btn" type="submit" @click="register">
              注册
            </span>
          </div>
          <div>
            <a id="login_link" href="javascript:void(0);" @click="login_link"
              >返回登录</a
            >
          </div>
        </form>
      </div>
    </div>
    <div id="footer">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPwt: true,
      n: "n",
      //抖动
      usernameShake: false,
      passwordShake: false,
      realnameShake: false,
      phoneShake: false,
      RpasswordShake: false,
      //登录信息
      username: "",
      password: "",
      //注册信息
      realname: "",
      phone: "",
      Rpassword: "",
      //钥匙
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
    };
  },
  methods: {
    //焦点聚焦
    onClick(id) {
      this.n = id;
    },
    //失去焦点
    onBlur(id) {
      this.n = id;
    },
    //密码显示与隐藏
    changeShow(event) {
      event.preventDefault();
      this.showPwt = !this.showPwt;
    },
    //登录用户名回车
    checkUser() {
      if (this.username) {
        this.$refs.password.focus();
      } else {
        this.$message({
          type: "warning",
          message: "请输入账号!",
        });
        this.usernameShake = true;
        setTimeout(() => {
          this.usernameShake = false;
        }, 1000);
      }
    },
    //登录密码回车
    checkPass() {
      if (this.password) {
        this.login();
      } else {
        this.$message({
          type: "warning",
          message: "请输入密码!",
        });
        this.passwordShake = true;
        setTimeout(() => {
          this.passwordShake = false;
        }, 1000);
      }
    },
    //切换注册
    register_link() {
      var login = document.querySelector("#login");
      var register = document.querySelector("#register");
      login.style.left = "-100%";
      register.style.left = "50%";
    },
    //切换登录
    login_link() {
      var login = document.querySelector("#login");
      var register = document.querySelector("#register");
      login.style.left = "50%";
      register.style.left = "120%";
    },
    //登录
    login() {
      if (this.username == "" || this.password == "") {
        this.$message({
          type: "warning",
          message: "请输入账号密码!",
        });
        if (!this.username) {
          this.$refs.username.focus();
          this.usernameShake = true;
          setTimeout(() => {
            this.usernameShake = false;
          }, 1000);
          return;
        }
        if (!this.password) {
          this.$refs.password.focus();
          this.passwordShake = true;
          setTimeout(() => {
            this.passwordShake = false;
          }, 1000);
        }
        return;
      }
      let loginStr = `appkey=${this.appkey}&phone=${this.username}&password=${this.password}`;
      this.axios({
        method: "post",
        url: "/login",
        data: loginStr,
      }).then((res) => {
        if (res.data.code == 200) {
          this.$cookies.set("TOKEN", res.data.token, "id");
          this.$message({
            type: "success",
            message: "登录成功！",
          });
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
        if (res.data.code == 201) {
          this.$message({
            type: "warning",
            message: "手机号未注册！",
          });
          this.$refs.username.focus();
          this.usernameShake = true;
          setTimeout(() => {
            this.usernameShake = false;
          }, 1000);
        }
        if (res.data.code == 202) {
          this.$message({
            type: "warning",
            message: "密码错误！",
          });
          this.$refs.password.focus();
          this.passwordShake = true;
          setTimeout(() => {
            this.passwordShake = false;
          }, 1000);
        }
        console.log(res);
      });
    },
    //注册昵称回车
    checkrealname() {
      if (this.realname) {
        this.$refs.phone.focus();
      } else {
        this.$message({
          type: "warning",
          message: "昵称不能为空!",
        });
        this.realnameShake = true;
        setTimeout(() => {
          this.realnameShake = false;
        }, 1000);
      }
    },
    //注册手机号回车
    checkphone() {
      if (this.phone) {
        var phoneReg = /^1[3-9]\d{9}$/;
        if (!phoneReg.test(this.phone)) {
          this.$message({
            type: "warning",
            message: "请输入正确手机号!",
          });
          this.phoneShake = true;
          setTimeout(() => {
            this.phoneShake = false;
          }, 1000);
        } else {
          this.$refs.Rpassword.focus();
        }
      } else {
        this.$message({
          type: "warning",
          message: "手机号不能为空!",
        });
        this.phoneShake = true;
        setTimeout(() => {
          this.phoneShake = false;
        }, 1000);
      }
    },
    //注册密码回车
    checkRpassword() {
      if (this.Rpassword) {
        var RpasswordReg =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/;
        if (!RpasswordReg.test(this.Rpassword)) {
          this.$message({
            type: "warning",
            message: "密码格式不对!",
          });
          this.RpasswordShake = true;
          setTimeout(() => {
            this.RpasswordShake = false;
          }, 1000);
        } else {
          this.register();
        }
      } else {
        this.$message({
          type: "warning",
          message: "密码不能为空!",
        });
        this.RpasswordShake = true;
        setTimeout(() => {
          this.RpasswordShake = false;
        }, 1000);
      }
    },
    //注册
    register() {
      if (!this.realname || !this.phone || !this.Rpassword) {
        this.$message({
          type: "warning",
          message: "请完善信息！",
        });
      } else {
        var phoneReg = /^1[3-9]\d{9}$/;
        var RpasswordReg =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/;
        if (!phoneReg.test(this.phone)) {
          this.$message({
            type: "warning",
            message: "请输入正确手机号!",
          });
          this.$refs.phone.focus();

          this.phoneShake = true;
          setTimeout(() => {
            this.phoneShake = false;
          }, 1000);
          return;
        }
        if (!RpasswordReg.test(this.Rpassword)) {
          this.$message({
            type: "warning",
            message: "密码格式不对!",
          });
          this.$refs.Rpassword.focus();
          this.RpasswordShake = true;
          setTimeout(() => {
            this.RpasswordShake = false;
          }, 1000);
          return;
        }
        var str = `appkey=${this.appkey}&nickName=${this.realname}&password=${this.Rpassword}&phone=${this.phone}`;
        this.axios({
          method: "POST",
          url: "/register",
          data: str,
        }).then((res) => {
          if (res.data.code == "102") {
            this.$message({
              message: "手机号已被注册",
              type: "success",
            });
          }
          if (res.data.code == "100") {
            this.$message({
              message: "注册成功！",
              type: "success",
            });
            this.username = this.phone;
            this.password = this.Rpassword;
            this.login_link();
          }
        });
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

#background {
  width: 100vw;
  height: 100vh;
  background: url(../../assets/img/loginBackground.jpeg) no-repeat;
  background-size: 100%;
  overflow: hidden;
  position: relative;
}

/*云层*/

#clouds {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

[class^="cloud-"] {
  position: absolute;
  right: 100%;
  width: 200px;
  height: 60px;
  background: white;
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
}

[class^="cloud-"]:before,
[class^="cloud-"]:after {
  content: "";
  position: absolute;
  top: -15px;
  left: 10px;
  width: 100px;
  height: 80px;
  background: #fff;
  -webkit-border-radius: 100px;
  border-radius: 100px;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  transform: rotate(30deg);
}

[class^="cloud-"]:after {
  top: -55px;
  left: auto;
  right: 15px;
  width: 120px;
  height: 120px;
}

.cloud-1 {
  top: 50px;
  -webkit-animation: moveclouds 30s linear infinite;
  -moz-animation: moveclouds 30s linear infinite;
  -o-animation: moveclouds 30s linear infinite;
  animation: moveclouds 30s linear infinite;
}

.cloud-2 {
  top: 100px;
  opacity: 0.8;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-animation: moveclouds 45s linear infinite;
  -moz-animation: moveclouds 45s linear infinite;
  -o-animation: moveclouds 45s linear infinite;
  animation: moveclouds 45s linear infinite;
  -webkit-animation-delay: 5s;
  -moz-animation-delay: 5s;
  animation-delay: 5s;
}

.cloud-3 {
  top: 150px;
  opacity: 0.6;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  -webkit-animation: moveclouds 40s linear infinite;
  -moz-animation: moveclouds 40s linear infinite;
  -o-animation: moveclouds 40s linear infinite;
  animation: moveclouds 40s linear infinite;
}

.cloud-4 {
  top: 200px;
  opacity: 0.75;
  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  transform: scale(0.75);
  -webkit-animation: moveclouds 26s linear infinite;
  -moz-animation: moveclouds 26s linear infinite;
  -o-animation: moveclouds 26s linear infinite;
  animation: moveclouds 26s linear infinite;
  -webkit-animation-delay: 8s;
  -moz-animation-delay: 8s;
  animation-delay: 8s;
}

/*云层移动*/
@-webkit-keyframes moveclouds {
  0% {
    right: -20%;
  }

  100% {
    right: 120%;
  }
}

@-moz-keyframes moveclouds {
  0% {
    right: -20%;
  }

  100% {
    right: 120%;
  }
}

@-o-keyframes moveclouds {
  0% {
    right: -20%;
  }

  100% {
    right: 120%;
  }
}

/* #Content Styles
================================================== */
/*内容*/
#content {
  width: 100%;
}

.container {
  width: 960px;
  margin: 0 auto;
  text-align: center;
}

/*登录/注册*/
#login,
#register {
  width: 400px;
  height: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  transition: 0.4s;
}

#register {
  left: 120%;
}

#login_header,
#register_header {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  color: #87cefa;
  background: #fff;
  border-radius: 10px 10px 0 0;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.icon-sharpicons_Rabbit {
  font-size: 23px;
  position: relative;
  top: 1px;
}

#login_content,
#register_content {
  height: 200px;
  padding: 30px 20px;
  box-sizing: content-box;
}

input {
  outline: 0;
  border: 0;
  border-radius: 3px;
  width: 300px;
  padding: 14px 15px;
  box-sizing: content-box;
  background: #f0f0f0;
  font: normal 16px/1.5 Helvetica, "Microsoft Yahei", Arial, sans-serif;
  color: #444;
}

input:focus {
  box-shadow: 0px 0px 20px 5px rgba(135, 206, 250, 0.5);
}

span {
  position: relative;
  display: inline-block;
  height: 50px;
  margin-bottom: 30px;
}

#login_content span:last-child {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}

.icon-weixin,
.icon-external_qq,
.icon-zhifubao,
.icon-bangdingshoujihao {
  font-size: 35px;
  bottom: 10px;
}
.appname {
  margin-top: 4px;
  color: rgb(126, 126, 126);
}

/* #login span{
    margin-top: 20px
} */

.tip {
  text-indent: 80px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.tip:focus,
.tip:active {
  text-indent: 0;
}

.tip + label {
  position: absolute;
  top: 16px;
  left: 15px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: rgb(135, 206, 250);
}

.tip:focus + label,
.tip:active + label {
  -webkit-transform: translateY(-40px);
  -moz-transform: translateY(-40px);
  transform: translateY(-40px);
}

.icon-shenfenzheng,
.icon-jurassic_user,
.icon-yanjing-kejian,
.icon-yincang {
  position: absolute;
  top: 12px;
  right: 14px;
  color: #87cefa;
  font-size: 28px;
}

.tooltip {
  width: 200px;
  box-sizing: content-box;
  padding: 14px;
  position: absolute;
  left: 20%;
  top: 0;
  right: 0;
  color: #999;
  background: white;
  text-align: left;
  z-index: -1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.tooltip:after {
  width: 0;
  height: 0;
  content: "";
  position: absolute;
  right: 100%;
  top: 18px;
  color: transparent;
  border: 8px solid;
  border-right-color: white;
}

.tipActive {
  left: 120%;
  z-index: 1;
}

#login_btn,
#register_btn {
  width: 100%;
  height: 60px;
  line-height: 60px;
  outline: 0;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
  background: #87cefa;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

#register_link,
#login_link {
  width: 80px;
  display: block;
  margin: 20px auto;
  color: #87cefa;
  border-bottom: 1px dashed;
}

.shake {
  animation: shake 0.1s infinite ease-in-out;
}

@keyframes shake {
  0% {
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }
  33.3% {
    -webkit-transform: translateX(-2px);
    -moz-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  66.6% {
    -webkit-transform: translateX(2px);
    -moz-transform: translateX(2px);
    transform: translateX(2px);
  }
  100% {
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }
}
</style>