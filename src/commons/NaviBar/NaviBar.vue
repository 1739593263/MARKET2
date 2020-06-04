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
    height: 7vh;
    width: 100vw;


    box-shadow: 0 2px 2px rgba(100,100,100,.1);
  }

</style>