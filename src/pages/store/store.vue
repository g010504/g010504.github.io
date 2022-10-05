<template>
  <div class="store">
    <nav>
        <nav-con/>
    </nav>
    <search-con/>
    <body>
        <price-con/>
        <shopping-con/>
        <page-con/>
    </body>
    <pageFooter/>
  </div>
</template>

<script>
import navCon from '../../components/store/navCon.vue';
import searchCon from '../../components/store/searchCon.vue';
import priceCon from '../../components/store/priceCon.vue'
import shoppingCon from '../../components/store/shoppingCon.vue'
import pageCon from '../../components/store/pageCon.vue'
import pageFooter from "../../components/pageFooter.vue"

export default {
    components:{
        navCon,
        searchCon,
        priceCon,
        shoppingCon,
        pageCon,
        pageFooter
    }
}
</script>

<style lang="less" scoped>

.store{
  height: 2000px;
}

</style>