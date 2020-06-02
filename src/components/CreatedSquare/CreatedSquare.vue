<template>
  <div id="created-square" @click="enterCreate">
<!--    <slot></slot>-->
    <b>{{squareItem}}</b>
  </div>
</template>

<script>
  export default {
    name: "CreatedSquare",
    props:{
      squareItem:{
        type:String,
        default:"",
      }
    },
    methods:{
      enterCreate(){
        this.$router.push({name:'createdPage'});
      }
    }
  }
</script>

<style scoped>
  #created-square{
    width: 15vw;
    height: 30vh;
    border-radius: 5px;
    background-color: white;
    margin-left: 25px;
    margin-bottom: 20px;
    position: relative;
    text-align: center;

    box-shadow: -3px 3px 10px rgba(100,100,100,.3);
  }

  #created-square:hover{
    opacity: 0.5;
    cursor: pointer;
    box-shadow: -3px 3px 10px rgba(100,100,100,.3);
  }
</style>