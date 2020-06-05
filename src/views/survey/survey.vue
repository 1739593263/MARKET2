<script src="../../main.js"></script>
<template>
  <div>
    <total-item-bar :surItems="this.surItems"/>
    <blank-component/>

  </div>
</template>

<script>
  import {serverBus} from "../../main.js"

  import totalItemBar from "../../components/totalitemBar/totalItemBar";
  import blankComponent from "../../components/blankComponent/blankComponent";

  export default {
    name: "survey",
    data(){
      return{
        surItems:['全部商品','标记商品','商品文件','删除商品'],
      }
    },
    components:{
      totalItemBar,
      blankComponent
    },
    props:{
      up:{
        type: Array,
        default(){
          return [];
        },
      },
    },
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