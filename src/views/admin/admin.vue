<template>
  <div>
    <h1>ADMIN</h1>
  </div>
</template>

<script>
  export default {
    name: "admin",
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