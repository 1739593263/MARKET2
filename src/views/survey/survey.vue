<script src="../../main.js"></script>
<template>
  <div>
    <total-item-bar/>
    <blank-component/>
  </div>
</template>

<script>
  import {serverBus} from "../../main.js"

  import totalItemBar from "../../components/totalitemBar/totalItemBar";
  import blankComponent from "../../components/blankComponent/blankComponent";

  export default {
    name: "survey",
    props:{
      note:{

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