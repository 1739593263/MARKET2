<template>
  <div class="total-item-bar">
    <sur-item-bar>
<!--      <div>-->
<!--        <sur-bar-item></sur-bar-item>-->
<!--      </div>-->
      <sur-bar-item slot="top">
        <button type="button" class="btn btn-info btn-lg btn-block" @click="created">
          <span>创建商品</span>
        </button>
      </sur-bar-item>

      <sur-bar-item slot="middle">
<!--        <nav class="navbar navbar-default">-->
<!--          <ul class="nav navbar-nav">-->
<!--            <li class="active"><a href="#">Home</a></li>-->
<!--            <li><a href="#">Page 1</a></li>-->
<!--            <li><a href="#">Page 2</a></li>-->
<!--            <li><a href="#">Page 3</a></li>-->
<!--          </ul>-->
<!--        </nav>-->

        <ul class="nav flex-column navigate">
          <li class="nav-item nav-link navbar-brand d-inline-flex"
              @click="isClicked(index)"
              :class="{active: curClick === index}"
              v-for="(item,index) in surItems">
              <img class="navbar-brand" :src="require('@/assets/img/itemBar/'+index+'.svg')" alt="">{{item}}
          </li>
<!--          <li class="nav-item">-->
<!--            <a class="nav-link navbar-brand" href="#">-->
<!--              <img class="navbar-brand" src="@/assets/img/itemBar/grade-24px.svg" alt="">标记商品-->
<!--            </a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link navbar-brand" href="#">-->
<!--              <img class="navbar-brand" src="@/assets/img/itemBar/folder-24px.svg" alt="">商品文件-->
<!--            </a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link disabled navbar-brand" href="#" tabindex="-1" aria-disabled="true">-->
<!--              <img class="navbar-brand" src="@/assets/img/itemBar/delete-24px.svg" alt="">删除商品-->
<!--            </a>-->
<!--          </li>-->
        </ul>
      </sur-bar-item>

      <sur-bar-item slot="bottom">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </sur-bar-item>

    </sur-item-bar>
  </div>
</template>

<script>
  import {SurToWar} from "../../network/proTrans";

  import SurBarItem from "../../commons/SuritemBar/SurBarItem";
  import SurItemBar from "../../commons/SuritemBar/SurItemBar";
  import createProduct from "../../views/survey/createProduct";

  export default {
    name: "totalItemBar",
    components:{
      SurToWar,

      SurBarItem,
      SurItemBar
    },
    props:{
      surItems: {
          type: Array,
          default(){
              return []
          }
      },
    },
    data() {
      return {
        transDatas: {
          id: '',
          name: null,
          A: null,
          B: null,
          C: null,
        },
        curClick:0,
      }
    },
    methods:{
      Upload(){
        console.log(this.transDatas);
        SurToWar(this.transDatas).then((res) => {
          // this.$router.push("/warehouse")
          console.log(res)
        }).catch((err) => {
          console.log(err);
        });
        // this.up[0]=this.id;
        // this.up[1]=this.name
        // this.$bus.$emit("load");
        // this.$emit("up",this.up);

        // serverBus.$emit('up', this.up);
        // this.$bus.$emit('up', this.up);
        // this.$emit('up', this.up);

        // this.$router.push("/warehouse");
      },
      isClicked(index){
        this.curClick = index
      },
      created(){
        this.$router.push({name: "createProduct"})
      }
    }
  }
</script>

<style scoped>
  .total-item-bar{
    width: 21vw;
    height: 100vh;
    position: absolute;
    text-align: center;
    top: 6vh;

    background-color:  rgba(90,70,100,.1);
  }

  .navigate img{
    text-align: center;
    margin-right: 1.8vw;
  }

  .nav-item{
    width: 18vw;
    border-top: 1px solid lightgray;
    border-radius:0px 15px 15px 0px;
    padding-left:3vw;
    font-weight: bolder;
    text-align: left;
  }

  .nav-item:hover{
    /*background-color: lightgray;*/
    cursor: pointer;
    color: white;
  }

  .active{
    background-color: lightgray;
    color: white;
  }
</style>