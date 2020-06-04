<template>
  <div>
      <div class="created-bar">

        <div class="d-inline created-item"
             v-for="(item,index) in items"
             :class="{active:index === curIndex}"
             ref="cItem"
             @click.passive="clicked(index)">
            <span class="row"
                  @mouseover="hover[index]=true"
                  @mouseleave="isFalse(index)" >
                <img v-if="hover[index]" :src="require('@/static/survey_created_barClassify/'+item+'-black.svg')" alt="">
                <img v-if="!hover[index]" :src="require('@/static/survey_created_barClassify/'+item+'-white.svg')" alt="">
                <b>{{item}}</b>
            </span>
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
        click:'A类用户',
        hover: {
            0:true,
            1:false,
            2:false
        },
        hover_length:0
      }
    },
    computed:{
    },
    components:{
      // createdNavi,
      // createNaviItem,
    },
    created(){
        this.hover_length = this.hover.length;
    },
    methods:{
      removeHover(){
          // console.log(this.hover.length);
          // // this.hover1 = this.hover
          // this.hover1.map((item)=>{
          //     // item = false;
          //     console.log(item);
          // });
          console.log("length",this.hover_length);
          for(let i=0; i<3; i++){
              this.hover[i]=false;
          };
      },

      clicked(index){
          this.removeHover();
          this.$nextTick(()=>{
              this.curIndex = index;
              this.click = this.items[index];
              // console.log(this.$refs.cItem[index].$listeners);
              this.hover[this.curIndex]=true;
              console.log(this.hover[this.curIndex]);
              this.$emit("index",index)
          })
      },

      isFalse(index){
          if(index === this.curIndex){}
          else{this.hover[index]=false}
      }
    }
  }
</script>

<style scoped>
  @keyframes moveInLeft{ 0%{  transform: translateX(0); }  100%{  transform: translateX(-400px); }}

  .created-bar{
    display: flex;
    font-family: Georgia;
    width: 100vw;
    height: 6.5vh;
    background-color: white;
    margin-top: .1vh;
    padding-left: 25vw;
    padding-right: 25vw;
    text-align: center;
    position: fixed;
    top:6vh;
    z-index: 1;

    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .created-item:hover{
    color: deepskyblue;
    border-bottom: 2px solid deepskyblue ;
    cursor: pointer;
  }

  .created-item::before{
      /*content: "→";*/
      /*background-image: url("");*/
  }

  .created-item span{
    text-align: center;
  }

  .created-item{
    flex: 1;

    text-align: center;
    margin-right: 7vw;
    padding-top: 1vw;
    /*vertical-align: middle;*/
    font-size: 23px;
    padding-bottom: 16px;
  }

  .created-bar img {
      width: 3vw;
      height: 4vh;
      margin-left: 1vw;
      vertical-align: middle;
  }

  .active{
    color: deepskyblue;
    border-bottom: 2px solid deepskyblue ;
    background-color: rgba(105, 113, 113, 0.25);
  }
</style>