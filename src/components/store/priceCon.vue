<template>
  <div class="price">
    <div class="left">
      <span>价格区间：</span>
      <div class="input">
        <input type="number" placeholder="￥"/>
      </div>
      <P>-</P>
      <div class="input">
        <input type="number"  placeholder="￥"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.price {
  width: 1200px;
  height: 40px;
  border: #999 solid 1px;
  margin: 20px auto;
  /* line-height: 40px; */
}
.left{
    display: flex;
    height: 40px;
    border-right: #999 solid 1px;
    padding-top: 10px;
    width: 280px;
    font-size: 13px;
    line-height: 20px;
    padding-left: 20px;
}


p{
    margin: 0 5px;
}
.input {
  height:20px;
  width: 50px;
  position: relative;
  border: solid #999 1px;
  overflow: hidden;
}
.left input {
    position: absolute;
    padding-top: 3px;
    top: 0;
    bottom: 0;
  border: none;
  line-height: 10px;
  outline: none;
}
.input span{
    position: absolute;
}


</style>