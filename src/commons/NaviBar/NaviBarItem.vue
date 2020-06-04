<template>
  <div id="navi-bar-item">
    <div class="left"><slot name="leftTitle"></slot></div>
    <div><slot name="contest"></slot></div>
    <div class="right"><slot name="personal"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NaviBarItem"
  }
</script>

<style scoped>
  #navi-bar-item{
    /*flex:1;*/
    text-align: center;
    height: 5vh;
    margin-top: 0.8vh;
  }

  .left{
    position: fixed;
    left:15px;
  }

  .right{
    position: fixed;
    right:15px;
  }
</style>