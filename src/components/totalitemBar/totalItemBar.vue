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

<!--        data-toggle="modal" data-target="#new"-->
<!--        <div class="modal" id="new">-->
<!--          <div class="modal-dialog">-->
<!--            <div class="modal-content">-->

<!--              &lt;!&ndash; Modal Header &ndash;&gt;-->
<!--              <div class="modal-header">-->
<!--                <h4 class="modal-title">Create your product</h4>-->
<!--                <button type="button" class="close" data-dismiss="modal">&times;</button>-->
<!--              </div>-->
<!--              <form>-->
<!--                &lt;!&ndash; Modal body &ndash;&gt;-->
<!--                <div class="modal-body">-->
<!--                  <div class="form-group">-->
<!--                    <label for="usr">Name:</label>-->
<!--                    <input type="text" class="form-control" id="usr" v-model="transDatas.name">-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <label for="id">ID:</label>-->
<!--                    <input type="text" class="form-control" id="id" v-model="transDatas.id">-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <label for="A">attributeA:</label>-->
<!--                    <input type="text" class="form-control" id="A" v-model="transDatas.A">-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <label for="B">attributeB:</label>-->
<!--                    <input type="text" class="form-control" id="B" v-model="transDatas.B">-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <label for="C">attributeC:</label>-->
<!--                    <input type="text" class="form-control" id="C" v-model="transDatas.C">-->
<!--                  </div>-->
<!--                </div>-->

<!--                &lt;!&ndash; Modal footer &ndash;&gt;-->
<!--                <div class="modal-footer">-->
<!--                  <button type="button"-->
<!--                          class="btn btn-block"-->
<!--                          data-dismiss="modal"-->
<!--                          @click="Upload">Upload</button>-->
<!--                  &lt;!&ndash;              <router-link :to="{name:'warehouse', params:{id:this.id, name:this.name}}"></router-link>&ndash;&gt;-->
<!--                </div>-->
<!--              </form>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

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
          <li class="nav-item active">
            <a class="nav-link navbar-brand" href="#">
              <img class="navbar-brand" src="@/assets/img/itemBar/inbox.svg" alt="">全部商品
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link navbar-brand" href="#">
              <img class="navbar-brand" src="@/assets/img/itemBar/grade-24px.svg" alt="">标记商品
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link navbar-brand" href="#">
              <img class="navbar-brand" src="@/assets/img/itemBar/folder-24px.svg" alt="">商品文件
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled navbar-brand" href="#" tabindex="-1" aria-disabled="true">
              <img class="navbar-brand" src="@/assets/img/itemBar/delete-24px.svg" alt="">删除商品
            </a>
          </li>
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
    data() {
      return {
        transDatas: {
          id: '',
          name: null,
          A: null,
          B: null,
          C: null,
        }
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
        })
        // this.up[0]=this.id;
        // this.up[1]=this.name
        // this.$bus.$emit("load");
        // this.$emit("up",this.up);

        // serverBus.$emit('up', this.up);
        // this.$bus.$emit('up', this.up);
        // this.$emit('up', this.up);

        // this.$router.push("/warehouse");
      },
      render: function(){

      },
      created(){
        this.$router.push({name: "createProduct"})
      }
    }
  }
</script>

<style scoped>
  .total-item-bar{
    width: 20vw;

    position: absolute;
    top: 6vh;
  }

  .navigate img{
    /*text-align: center;*/
  }

  .nav-item{
    border-top: 1px solid lightgray;
    text-align: left;
  }

  .nav-item:hover{
    background-color: lightgray;
  }

  .active{
    background-color: lightgray;
  }
</style>