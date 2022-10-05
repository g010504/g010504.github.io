<template>
  <div class="page">
    <a href="#">&lt;上一页</a>
    <a href="#">首页</a>
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#">...</a>
    <a href="#">下一页&gt;</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.page{
    margin: 20px auto;
    width: 1200px;
    height: 80px;
    text-align: center;
    padding-top: 25px;
}
.page a{
    display: inline-block;
    height: 30px;
    /* width: 30px; */
    line-height: 30px;
    padding: 0 10px;
    border: #999 solid 1px;
    margin: 0 5px;
}
.page a:nth-child(3){
    background-color: red;
    color: white;
}
</style>