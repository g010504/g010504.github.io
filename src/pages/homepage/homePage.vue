<template>
  <div id="hompage">
    <hSearch/>
    <hNavigation />
    <hSwiper />
    <hFloat />
    <div class="content">
      <hRecommend />
      <div class="clear"></div>
      <hCartoon />
      <hCartoons />
      <hNews />
    </div>
    <pageFooter/>
  </div>
</template>
<script>
import hSearch from "../../components/homepage/hSearch.vue";
import hNavigation from "../../components/homepage/hNavigation.vue";
import hSwiper from "../../components/homepage/hSwiper.vue";
import hRecommend from "../../components/homepage/hRecommend.vue";
import hCartoon from "../../components/homepage/hCartoon.vue";
import hCartoons from "../../components/homepage/hCartoons.vue";
import hNews from "../../components/homepage/hNews.vue";
import hFloat from "../../components/homepage/hFloat.vue";
import pageFooter from "../../components/pageFooter.vue"
export default {
  name: "hompage",
  components: {
    hSearch,
    hNavigation,
    hSwiper,
    hRecommend,
    hCartoon,
    hCartoons,
    hNews,
    hFloat,
    pageFooter,
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 1200px;
  margin: 40px auto 0px;
}
</style>