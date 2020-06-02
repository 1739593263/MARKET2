<template>
  <div class="item-bar">
    <div><slot name="top"></slot></div>
    <br><br>
    <div><slot name="middle"></slot></div>
    <br><br>
    <div class="bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "itemBar"
  }
</script>

<style scoped>
  /*.item-bar {*/
  /*  display: flex;*/
  /*  line-height: 44px;*/
  /*  text-align: center;*/
  /*  width: 100px;*/

  /*  position: absolute;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*}*/
  .item-bar{
    margin-left: 1vw;
    margin-top: 1vw;
  }
</style>