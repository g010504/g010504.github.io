<template>
  <div class="newlist-left">
    <p><span>今日推荐</span></p>
    <ul>
      <li>
        <a href="#">《新大头儿子》推出新的动画电影，它已经成为10后的童年经典</a>
      </li>
      <li>
        <a href="#">【盗墓笔记】动漫海报瓶邪黑花商稿 ：八一七稻米节 万家灯火故事长</a>
      </li>
      <li>
        <a href="#">《精灵宝可梦》八大师实力设定公开，小智数据垫底，却能逆天改命</a>
      </li>
      <li>
        <a href="#">日本动画电影票房周榜・22/08/14付　海贼王RED两周64.7亿日元</a>
      </li>
      <li>
        <a href="#">《魔女之夜的回天》最终版剧本的五个败笔 含严重剧透</a>
      </li>
      <li>
        <a href="#">海贼王1057话情报：大和放弃上船，草帽第10人之争成了笑话</a>
      </li>
      <li>
        <a href="#">云韵三年之约手办公布，尺度太大遭质疑，价格将会超越第一版</a>
      </li>
      <li>
        <a href="#">斗罗：菊斗罗要抢首功？灵鸢斗罗：忘了我是怎么领盒饭的吗？</a>
      </li>
      <li>
        <a href="#">海贼王1057话情报：大和没有上船！三船长分道扬镳，和之国篇结束</a>
      </li>
      <li>
        <a href="#">龙珠1：不算魔族，曾有5人打败过悟空，他们是谁，结局如何？</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.newlist-left {
  width: 230px;
  background-color: white;
  float: left;
}

.newlist-left p {
  font-weight: bolder;
  line-height: 30px;
  margin-bottom: 5px;
  background: url(../../../assets/img/火.png) no-repeat 65px 4px;
}
.newlist-left p span {
  border-bottom: red solid 2px;
  padding-bottom: 5px;
}

.newlist-left ul li {
  list-style: none;
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
  font-weight: 100;
}
.newlist-left ul li::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-top: -2px;
  background-color: #999;
  margin-left: 8px;
  margin-right: 8px;
  vertical-align: middle;
}
.newlist-left ul li a:hover {
  color: red;
}
</style>