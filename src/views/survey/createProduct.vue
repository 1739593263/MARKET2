<template>
  <div>
    <create-navi-bar></create-navi-bar>
    <h1>CREATED</h1>
    <created-square>
      <span slot="img"></span>
      <span slot="content"></span>
    </created-square>
  </div>
</template>

<script>
  import createNaviBar from "../../../components/createNaviBar/createNaviBar";
  import CreatedSquare from "../../../components/CreatedSquare/CreatedSquare";

  export default {
    name: "createProduct",
    components:{
      createNaviBar,
      CreatedSquare,
    }
  }
</script>

<style scoped>

</style>