<template>
  <div class="news">
    <hr />
    <span class="new"><strong>最新</strong>资讯</span>
    <div class="newlist">
      <newsLeft/>
      <newsCenter/>
      <newsRight/>
    </div>
  </div>
</template>

<script>
import newsLeft from "./hNews/newsLeft.vue";
import newsCenter from "./hNews/newsCenter.vue";
import newsRight from "./hNews/newsRight.vue";
export default {
  components: {
    newsLeft,
    newsCenter,
    newsRight,
  },
};
</script>

<style scoped>
.news {
  margin-top: 60px;
}
.news::after {
  content: "";
  display: block;
  clear: both;
}

hr {
  background-color: red;
  border: solid red 1px;
  margin-left: 120px;
}
.new {
  position: absolute;
  transform: translateY(-25px) translateX(5px);
  font-size: 25px;
  background: linear-gradient(to right bottom, #f22, yellow);
  color: transparent;
  background-clip: text;
}
strong {
  font-weight: 400;
  font-size: 30px;
}
.newlist {
  padding: 30px 5px 0px 5px;
}
</style>