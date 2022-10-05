<template>
  <div>
    <div class="triangle"></div>
    <div id="footer">
      <div class="erweima">
        <img src="../assets/img/Wechat.jpg" alt="">
        <p>扫一扫了解更多</p>
      </div>
      <div class="back">
        <footer>
          <ul>
            <li><a href="*">关于我们</a></li>
            <li><a href="*">人工客服</a></li>
            <li><a href="*">商家服务</a></li>
            <li><a href="*">隐私保护</a></li>
            <li><a href="*">资讯热点</a></li>
            <li><a href="*">免责条款</a></li>
            <li><a href="*">营销中心</a></li>
            <li><a href="*">招商合作</a></li>
          </ul>
        </footer>
        <div class="footer-content">
          <p>常年法律顾问：南华律师事务所。技术支持：南华轮滑社</p>
          <p>&copy;2021南华轮滑网版权所有，并保留所有权利</p>
          <p>ICP备案证书号，粤ICP888888号</p>
          <p>联系方式：ac_copyright@qq.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  font-family: "宋体";
  letter-spacing: 10px;
  background-color: #ababae;
  background-size: 1519px 425px;
  color: white;
  font-weight: bolder;
  box-sizing: border-box;
  position: relative;
}
.triangle {
  height: 15px;
  background: url(../assets/img/底部三角背景.png) repeat-x;
  margin-top: 50px;
}
.back {
  padding-top: 10px;
  width: 1519px;
  height: 300px;
  margin: auto;
  background: url(../assets/img/底部背景.png) no-repeat;
  background-size: 1519px 300px;

}
#footer .erweima{
  position: absolute;
  width: 90px;
  height: 120px;
  text-align: center;
  top: 10px;
  left: 360px;
}
#footer .erweima img{
  width: 100%;
  margin: 0;
}
#footer .erweima p{
  font-size: 15px;
  letter-spacing: 1px;
  padding: 0;
  margin: 0;
}
footer {
  text-align: center;
}



footer ul {
  font-size: 12px;
  margin-left: 500px;
  width: 800px;
  display: flex;
  justify-content: space-around;
}

footer ul li {
  border-right: #fff solid 1px;
  list-style: none;
}

footer ul li:last-child {
  border: none;
}

footer ul a {
  color: white;

  /* color: #a5a5a5; */
  text-decoration: none;
}

footer ul a:hover {
  color: red;
}

.footer-content {
  font-size: 12px;
  text-align: center;
  margin-left: 300px;
  /* color: #a5a5a5; */
  line-height: 20px;
}
p {
  margin: 10px 0;
}
p:nth-child(4) {
  letter-spacing: 2px;
}
p:hover {
  cursor: default;
}
</style>