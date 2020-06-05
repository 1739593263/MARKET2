<template>
  <div class="square-field">
    <created-square :item="item" v-for="(produce,index) in produces" :squareItem="produce" :key="index"/>
  </div>
</template>

<script>
  import CreatedSquare from "./CreatedSquare";

  export default {
    name: "SquareField",
    props:{
      produces:{
        type: Array,
        default(){
          return [];
        }
      },
      item:"",
    },
    components:{
      CreatedSquare,
    }
  }
</script>

<style scoped>
  .square-field{
    padding-top: 8px;
    padding-right: 23vw;
    padding-left: 23vw;

    text-align: center;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(100,100,100,.1);

    position:absolute;
    top:12vh;

    width: 100vw;
    height: 100vh;
  }
</style>