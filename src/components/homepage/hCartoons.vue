<template>
  <div class="cartoon">
    <span class="nav"><strong>漫画</strong>系列</span>
    <hr />
    <div class="cartoons">
      <cartoon-left/>
      <cartoon-right/>
      <div class="clear"></div>
      <cartoon-list/>
    </div>
  </div>
</template>

<script>
import cartoonLeft from './hCartoons/cartoonLeft.vue'
import cartoonRight from './hCartoons/cartoonRight.vue'
import cartoonList from './hCartoons/cartoonList.vue'
export default {
  components:{
    cartoonLeft,
    cartoonRight,
    cartoonList
  },
};
</script>

<style lang="less" scoped>

.cartoon {
  margin-top: 60px;
}

.cartoons {
  padding: 30px 0;
}
.nav {
  position: absolute;
  transform: translateY(-25px) translateX(5px);
  font-size: 25px;
  color: red;
}
strong {
  font-size: 30px;
  font-weight: 400;
}
hr {
  background-color: red;
  border: solid red 1px;
  margin-left: 120px;
}

</style>