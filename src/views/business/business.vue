<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1>业务员界面</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <business-items :titles="businessTitles"></business-items>
  </div>
</template>

<script>
  import businessItems from "../../components/business_blank/businessItems";

  export default {
    name: "business",
    data(){
      return{
        businessTitles:['商品审核','商务系统'],
      }
    },
    methods:{
      addressCheck(){
        this.$emit("isShowNavi",true);
      }
    },
    components:{
      businessItems,
    },
    created(){
      this.addressCheck();
    }
  }
</script>

<style scoped>

</style>