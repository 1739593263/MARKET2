<template>
  <div class="square-field">
    <created-square v-for="(produce,index) in produces" :squareItem="produce" :key="index"/>
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
      }
    },
    components:{
      CreatedSquare,
    }
  }
</script>

<style scoped>
  .square-field{
    margin-top: 5px;
    padding-right: 23vw;
    padding-left: 23vw;

    text-align: center;
    display: flex;
    flex-wrap: wrap;

    position:absolute;
    top:12vh;
  }
</style>