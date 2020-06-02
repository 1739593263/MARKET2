<template>
  <div>
      <div class="created-bar">
        <div class="d-inline created-item"
             v-for="(item,index) in items"
             :class="{active:index === curIndex}" @click="clicked(index)">
            <span><b>{{item}}</b></span>
        </div>
      </div>
  </div>
</template>

<script>
  // import createdNavi from "../../commons/CreateBar/createdNavi";
  // import createNaviItem from "../../commons/CreateBar/createNaviItem";

  export default {
    name: "createNaviBar",
    props:{
      items:{
        type:Array,
        default:[],
      }
    },
    data(){
      return{
        curIndex:0,
        click:'A类用户'
      }
    },
    components:{
      // createdNavi,
      // createNaviItem,
    },
    methods:{
      clicked(index){
        this.curIndex = index;
        this.click = this.items[index];
        this.$emit("index",index)
      }
    }
  }
</script>

<style scoped>
  @keyframes moveInLeft{ 0%{  transform: translateX(0); }  100%{  transform: translateX(-400px); }}

  .created-bar{
    display: flex;
    width: 100vw;
    height: 6.5vh;
    background-color: white;
    margin-top: .1vh;
    padding-left: 25vw;
    padding-right: 25vw;
    text-align: center;
    position: fixed;
    top:4.9vh;
    z-index: 8;

    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .created-item:hover{
    color: deepskyblue;
    border-bottom: 2px solid deepskyblue ;
    cursor: pointer;
  }

  .created-item{
    flex: 1;

    text-align: center;
    margin-right: 3vw;
    padding-top: 1.5vw;
    /*vertical-align: middle;*/
    font-size: 23px;
    padding-bottom: 16px;
  }

  .active{
    color: deepskyblue;
    border-bottom: 2px solid deepskyblue ;
    background-color: rgba(105, 113, 113, 0.25);
  }
</style>