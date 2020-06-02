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