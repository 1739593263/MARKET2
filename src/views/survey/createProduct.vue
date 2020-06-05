<template>
  <div>
    <create-navi-bar :items="items" @index="getIndex"></create-navi-bar>
<!--    <h1>CREATED</h1>-->
    <square-field :item="items[point]" :produces="this.produces[point]"/>
  </div>
</template>

<script>
  import {getProduces} from "../../network/proTrans";

  import createNaviBar from "../../components/createNaviBar/createNaviBar";
  import SquareField from "../../components/CreatedSquare/SquareField";

  export default {
    name: "createProduct",
    data(){
      return{
        produces:[],
        point: 0,
        items:['A类用户','B类用户','C类用户']
      }
    },
    components:{
      createNaviBar,

      SquareField,
    },
    methods:{
      getIndex(index){
        console.log(index);
        this.point = index
      },

      getProducesOperation(){
        getProduces().then((res)=>{
          console.log(res.created.produceDatas.class[this.point]);
          this.produces = res.created.produceDatas.class;
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    created() {
      this.getProducesOperation();
    }
  }
</script>

<style scoped>

</style>