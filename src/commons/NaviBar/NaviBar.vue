<template>
  <div id="nav-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NaviBar"
  }
</script>

<style scoped>
  #nav-bar {
    display: flex;
    background-color: white;
    height: 5vh;
    width: 100vw;
    position: fixed;
    /*top: 0px;*/
    /*left: 0px;*/
    /*right: 0px;*/
    z-index: 9;

    box-shadow: 0 2px 2px rgba(100,100,100,.1);
  }

</style>