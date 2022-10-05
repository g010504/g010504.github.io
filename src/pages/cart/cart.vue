<template>
  <div class="cart">
    <nav>
      <nav-con />
    </nav>
    <search-con />
    <div class="cart-box">
      <cart />
    </div>
    <div class="indent-like">
      <span><i class="iconfont icon-aixin"></i>猜你喜欢</span>
      <indentLike />
    </div>
    <pageFooter />
  </div>
</template>

<script>
import navCon from "../../components/store/navCon.vue";
import searchCon from "../../components/store/searchCon.vue";
import cart from "../../components/cart/cart.vue";
import pageFooter from "../../components/pageFooter.vue";
import indentLike from "../../components/indent/indentLike.vue";
export default {
  components: {
    navCon,
    searchCon,
    cart,
    indentLike,
    pageFooter,
  },
};
</script>

<style lang="less" scoped>
.indent-like {
  width: 1200px;
  margin: auto;
  span {
    display: block;
    padding-top: 20px;
    padding-bottom: 10px;
    color: #e5404f;
    font-size: 20px;
    i {
      font-size: 20px;
    }
  }
}
</style>