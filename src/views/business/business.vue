<template>
  <div>
    <h1>BUSINESS</h1>
  </div>
</template>

<script>
  export default {
    name: "business",
    methods:{
      addressCheck(){
        this.$emit("isShowNavi",true);
      }
    },
    created(){
      this.addressCheck();
    }
  }
</script>

<style scoped>

</style>