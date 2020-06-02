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
        this.$emit("note",true);
      }
    },
    created(){
      this.addressCheck();
    }
  }
</script>

<style scoped>

</style>