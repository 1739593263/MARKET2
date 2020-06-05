<template>
  <div id="created-page">

    <ele-list ref="pButton" @show="trans"></ele-list>
    <created-blank ref="blank"
                   :toBlank="this.toBlank"
                   :param="this.params"
                   @remove="remove"></created-blank>
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
        params:{
          produceItem:"",
          name:"",
        }
      }
    },
    methods:{
      addressCheck(){
        this.$emit("isShowNavi",false);
      },

      trans(show){
        // this.toBlank = !this.toBlank;
        // this.$refs.blank.$createElement("<h1>BLANK</h1>")
        this.toBlank = show
      },

      remove(Alphabet){
        const removeFun = this.$refs.pButton.removeEle;
        removeFun(Alphabet);
        // console.log(remove);
      },

      getParams(){
        this.params.produceItem = this.$route.query.produceItem
        this.params.name = this.$route.query.produceName;
      }
    },
    created() {
      this.addressCheck();
      this.getParams();
    }
  }
</script>

<style scoped>
  #created-page{
    padding-left: 20vw;
    padding-right: 20vw;

    background-color:  rgba(100,100,100,.1);
    /*margin-top: 10vh;*/

    display: flex;
    width: 100vw;
    position: absolute;
    top: 0px;
  }
</style>