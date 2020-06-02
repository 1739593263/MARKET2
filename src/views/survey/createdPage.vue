<template>
  <div id="created-page">
    <ele-list ref="pButton" @show="trans"></ele-list>
    <created-blank ref="blank" :toBlank="this.toBlank" @remove="remove"></created-blank>
  </div>
</template>

<script>
  import eleList from "../../commons/CreatedPage/eleList";
  import createdBlank from "../../commons/CreatedPage/createdBlank";

  export default {
    name: "createdPage",
    components:{
      eleList,
      createdBlank,
    },
    data(){
      return{
        // toBlank:false,

        toBlank: 0,
      }
    },
    methods:{
      trans(show){
        // this.toBlank = !this.toBlank;
        // this.$refs.blank.$createElement("<h1>BLANK</h1>")
        this.toBlank = show
      },

      remove(Alphabet){
        const removeFun = this.$refs.pButton.removeEle;
        removeFun(Alphabet);
        // console.log(remove);
      }
    }
  }
</script>

<style scoped>
  #created-page{
    margin-left: 20vw;
    margin-right: 20vw;
    /*margin-top: 10vh;*/

    display: flex;
    width: 100vw;
    position: absolute;
    top: 8vh;
  }
</style>