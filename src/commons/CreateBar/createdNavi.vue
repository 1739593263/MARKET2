<template>
  <div id="create-navi">
    <span>
      <slot></slot>
    </span>

  </div>
</template>

<script>
  export default {
    name: "createdNavi"
  }
</script>

<style scoped>
  #create-navi{

  }

  #create-navi span{
    display: flex;
    position: absolute;
    right: 35vw;
  }

</style>