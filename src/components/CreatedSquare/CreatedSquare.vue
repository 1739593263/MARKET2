<template>
  <div id="created-square" @click="enterCreate">
<!--    <slot></slot>-->
      <img :src="require('@/static/survey_created_classify/'+squareItem.url)"/>
      <p class="font-weight-bold"><strong>{{squareItem.name}}</strong></p>
  </div>
</template>

<script>
  export default {
    name: "CreatedSquare",
    props:{
      squareItem:{
          type: Object,
          default(){
              return [];
          },
      },
      item:"",
    },
    methods:{
      enterCreate(){
        let goCreate = this.$router.resolve({name:'createdPage',query:{produceItem: this.item, produceName: this.squareItem.name}});
        window.open(goCreate.href,"_blank")
      }
    }
  }
</script>

<style scoped>
  #created-square{
    width: 10vw;
    height: 17vh;
    border-radius: 5px;
    background-color: white;
    margin-left: 25px;
    margin-bottom: 20px;
    position: relative;
    text-align: center;

    box-shadow: -3px 3px 10px rgba(100,100,100,.3);
  }

  /*#created-square font{*/
  /*    font-family: Georgia;*/
  /*    font-weight: bolder;*/
  /*}*/

  #created-square:hover{
    opacity: 0.5;
    cursor: pointer;
    box-shadow: -3px 3px 10px rgba(100,100,100,.3);
  }

  #created-square img{
      padding: 1vw;
      width: 10vw;
      height: 14vh;
  }
</style>