<template>
  <div class="right">
    <div class="title">
      <span @mouseenter="china">国漫</span>
      <span @mouseenter="japan">日漫</span>
      <span @mouseenter="zong">综合</span>
      <hr :style="{ left: distance }" />
    </div>
    <div class="background">
      <p>热播排行</p>
      <div v-show="showChina">
        <ol>
          <li><span>1</span><a href="#">秦时明月</a></li>
          <li><span>2</span><a href="#">刺客伍六七</a></li>
          <li><span>3</span><a href="#">狐妖小红娘</a></li>
          <li><span>4</span><a href="#">魔道祖师</a></li>
          <li><span>5</span><a href="#">罗小黑战记</a></li>
          <li><span>6</span><a href="#">雾山五行</a></li>
          <li><span>7</span><a href="#">武庚纪</a></li>
          <li><span>8</span><a href="#">凸变英雄</a></li>
          <li><span>9</span><a href="#">风灵玉秀</a></li>
          <li><span>10</span><a href="#">大理寺日志</a></li>
        </ol>
        <ol>
          <li><span>11</span><a href="#">凡人修仙传</a></li>
          <li><span>12</span><a href="#">斗破苍穹</a></li>
          <li><span>13</span><a href="#">斗罗大陆</a></li>
          <li><span>14</span><a href="#">灵笼</a></li>
          <li><span>15</span><a href="#">星辰变</a></li>
          <li><span>16</span><a href="#">魁拔</a></li>
          <li><span>17</span><a href="#">一人之下</a></li>
          <li><span>18</span><a href="#">十万个冷笑话</a></li>
          <li><span>19</span><a href="#">中国惊奇先生</a></li>
          <li><span>20</span><a href="#">尸兄</a></li>
        </ol>
      </div>
      <div v-show="showJapan">
        <ol>
          <li><span>1</span><a href="#">海贼王</a></li>
          <li><span>2</span><a href="#">七龙珠</a></li>
          <li><span>3</span><a href="#">火影忍者</a></li>
          <li><span>4</span><a href="#">城市猎人</a></li>
          <li><span>5</span><a href="#">东京食尸鬼</a></li>
          <li><span>6</span><a href="#">樱桃小丸子</a></li>
          <li><span>7</span><a href="#">蜡笔小新</a></li>
          <li><span>8</span><a href="#">我想吃掉你的胰脏</a></li>
          <li><span>9</span><a href="#">朝花夕拾</a></li>
          <li><span>10</span><a href="#">声之形</a></li>
        </ol>
        <ol>
          <li><span>11</span><a href="#">阿拉蕾</a></li>
          <li><span>12</span><a href="#">奥运高手</a></li>
          <li><span>13</span><a href="#">怪医黑杰黑</a></li>
          <li><span>14</span><a href="#">银魂</a></li>
          <li><span>15</span><a href="#">哆啦A梦</a></li>
          <li><span>16</span><a href="#">灌篮高手</a></li>
          <li><span>17</span><a href="#">名侦探柯南</a></li>
          <li><span>18</span><a href="#">圣斗士星矢</a></li>
          <li><span>19</span><a href="#">犬夜叉</a></li>
          <li><span>20</span><a href="#">神奇宝贝</a></li>
        </ol>
      </div>
      <div v-show="showZong">
        <ol>
          <li><span>1</span><a href="#">秦时明月</a></li>
          <li><span>2</span><a href="#">七龙珠</a></li>
          <li><span>3</span><a href="#">火影忍者</a></li>
          <li><span>4</span><a href="#">魔道祖师</a></li>
          <li><span>5</span><a href="#">罗小黑战记</a></li>
          <li><span>6</span><a href="#">雾山五行</a></li>
          <li><span>7</span><a href="#">武庚纪</a></li>
          <li><span>8</span><a href="#">凸变英雄</a></li>
          <li><span>9</span><a href="#">风灵玉秀</a></li>
          <li><span>10</span><a href="#">大理寺日志</a></li>
        </ol>
        <ol>
          <li><span>11</span><a href="#">凡人修仙传</a></li>
          <li><span>12</span><a href="#">斗破苍穹</a></li>
          <li><span>13</span><a href="#">斗罗大陆</a></li>
          <li><span>14</span><a href="#">灵笼</a></li>
          <li><span>15</span><a href="#">哆啦A梦</a></li>
          <li><span>16</span><a href="#">灌篮高手</a></li>
          <li><span>17</span><a href="#">名侦探柯南</a></li>
          <li><span>18</span><a href="#">十万个冷笑话</a></li>
          <li><span>19</span><a href="#">中国惊奇先生</a></li>
          <li><span>20</span><a href="#">神奇宝贝</a></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distance: "",
      showChina: true,
      showJapan: false,
      showZong: false,
    };
  },
  methods: {
    china() {
      this.distance = "16px";
      this.showChina = true;
      this.showJapan = false;
      this.showZong = false;
    },
    japan() {
      this.distance = "76px";
      this.showChina = false;
      this.showJapan = true;
      this.showZong = false;
    },
    zong() {
      this.distance = "135px";
      this.showChina = false;
      this.showJapan = false;
      this.showZong = true;
    },
  },
};
</script>

<style lang="less" scoped>
.right {
  width: 300px;
  height: 350px;
  float: right;
  position: relative;
  /* border: red solid 1px; */
  /* background-color: rgb(120, 120, 120); */
}
.title {
  width: 185px;
  height: 45px;
  background-color: rgb(35, 35, 35);
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  font-weight: bolder;
  line-height: 45px;
  display: flex;
  justify-content: space-around;
  border-radius: 0 0 0 15px;
  padding-left: 5px;
  overflow: hidden;
}
.title span {
  /* border: solid 1px red; */
  /* border-radius: 50%; */
  color: white;
  /* width: 45px; */
  /* text-align: center; */
}
.title span:hover {
  cursor: pointer;
}
.title hr {
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  border: solid orange 1px;
  background-color: orange;
  left: 16px;
  transition: 0.2s;
}
.background {
  width: 300px;
  height: 350px;
  float: right;
  background-color: rgb(120, 120, 120);
  position: absolute;
  z-index: 0;
}
.right p {
  height: 45px;
  width: 110px;
  line-height: 45px;
  padding-left: 10px;
  font-size: 20px;
  letter-spacing: 3px;
  /* border: red solid 1px; */
  background: linear-gradient(to right bottom, rgb(255, 107, 1), yellow);
  background-clip: text;
  color: transparent;
}
ol {
  margin-top: 4px;
  width: 150px;
  float: left;
  font-size: 13px;
}
ol li {
  /* border: red solid 1px; */
  height: 30px;
  line-height: 30px;
  position: relative;
  list-style: none;
  overflow: hidden;
}
ol a {
  color: white;
  margin-left: 30px;
}
ol a:hover {
  color: red;
}
ol li span {
  color: rgb(208, 208, 208);
  position: absolute;
  left: 10px;
}
ol:nth-child(2) span,
ol:nth-child(1) li:last-child span {
  left: 6px;
}

ol li::before {
  content: "";
  display: block;
  width: 20px;
  height: 18px;
  position: absolute;
  top: 6px;
  left: 4px;
  z-index: -1;
  background-color: rgb(94, 94, 94);
}

ol:nth-child(1) li:nth-child(-n + 3)::before {
  background-color: orangered;
}
</style>