<template>
  <div id="ele-list">
    <span>
      <button  @mouseover="hover = true"
               @mouseleave="hover = false"
               type="button" class="btn btn-outline-primary"
               @click="createEle('A')">
        <img v-if="!hover" src="@/static/survey_created_listButton/room.svg" class="d-inline-block align-top" alt="">
        <img v-if="hover" src="@/static/survey_created_listButton/room-white.svg" class="d-inline-block align-top" alt="">
<!--        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"/>-->
        添加地址
      </button>

      <button type="button" class="btn btn-outline-secondary" @click="createEle('B')">B_Button</button>
      <button type="button" class="btn btn-outline-success" @click="createEle('C')">C_Button</button>
      <button type="button" class="btn btn-outline-warning" @click="createEle('D')">D_Button</button>
      <button type="button" class="btn btn-outline-info" @click="createEle('E')">E_Button</button>
    </span>
  </div>
</template>

<script>
  export default {
    name: "eleList",

    data(){
      return{
        // isShow: false,
        hover: false,
        isShow: {
          A:0,
          B:0,
          C:0,
          D:0,
          E:0,
        },
      }
    },
    methods:{

      createEle(Alphabet){
        // this.isShow=true;
        // this.$emit("show",this.isShow)
        // this.isShow = this.blankRemove;

        // console.log("blankRemove",this.blankRemove);
        this.isShow[Alphabet]++;
        this.$emit("show", this.isShow)
      },

      removeEle(Alphabet){
        this.isShow[Alphabet]--;
        this.$emit("show", this.isShow)
      },
    },

    mounted(){

    }
  }
</script>

<style scoped>
  #ele-list{
    width: 20vw;
    height: 100vh;
    padding: 15px;
    
    box-shadow: -3px 3px 10px rgba(100,100,100,.3);

    left: 0px;
  }

  #ele-list button{
    margin: 3px;
  }
  #ele-list button img {
    width: 25px;
    height: 25px;
  }

</style>