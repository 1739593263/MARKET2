<template>
  <div>
    <div class="intro"><slot name="introduce"></slot></div>
    <div><slot name="contest"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "blank"
  }
</script>

<style scoped>
  .intro{
    border-bottom: 1px solid lightgray;
  }
</style>