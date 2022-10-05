<template>
  <div class="shopDetail">
    <nav>
        <nav-con/>
    </nav>
    <search-con/>
    <div class="detail">
      <shopDetail/>
    </div>
    <pageFooter/>
  </div>
</template>

<script>
import navCon from '../../components/store/navCon.vue';
import searchCon from '../../components/store/searchCon.vue';
import shopDetail from '../../components/shopDetail/shopDeatail.vue'
import pageFooter from "../../components/pageFooter.vue"

export default {
    components:{
        navCon,
        searchCon,
        shopDetail,
        pageFooter
    }
}
</script>

<style lang="less" scoped>
.detail{
  width: 1200px;
  margin: auto;
  border: solid 1px rgb(203, 203, 203);
  padding: 20px 0px;
}
</style>