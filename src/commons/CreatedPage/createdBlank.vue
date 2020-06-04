<template>
  <div id="created-blank">
<!--    <h2 v-if="toBlank">HHH</h2>-->
    <form action="" id="A_form">
      <scroll class="create_A_scroll">
        <h3>{{param.name}}商品创建</h3>
        <br>
        <div class="form-group row">
          <label for="pName" class="col-sm-2 col-form-label">产品名</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="pName" name="pName">
          </div>
        </div>
        <div class="form-group row">
          <label for="charger" class="col-sm-2 col-form-label">负责人</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="charger" name="charger">
          </div>
        </div>

        <div class="form-group row">
          <div class="form-check form-check-inline col-sm-3">
            <label class="form-check-label">是否批量生产</label>
          </div>
          <div class="form-check form-check-inline col-sm-4">
            <input class="form-check-input" v-model="M_product" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes">
            <label class="form-check-label" for="inlineRadio1">是</label>
          </div>
          <div class="form-check form-check-inline col-sm-4">
            <input class="form-check-input" v-model="M_product" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="no">
            <label class="form-check-label" for="inlineRadio2">否</label>
          </div>
        </div>


        <div class="form-group row" v-if="M_product=='yes'">
          <label for="company" class="col-sm-2 col-form-label">厂家</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="company" name="company">
          </div>
        </div>

        <div v-for="(item,index) in toBlank['A']" class="alert alert-primary" role="alert">
          <b style="float: right" @click="remove('A')">X</b>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="province">City</label>
              <input type="text" class="form-control" id="province" placeholder="省份" required>
              <!--            <div class="invalid-tooltip">-->
              <!--              请输入正确省份-->
              <!--            </div>-->
            </div>
            <div class="col-md-3 mb-3">
              <label for="city">State</label>
              <input type="text" class="form-control" id="city" placeholder="城市/乡镇" required>
              <!--            <div class="invalid-tooltip">-->
              <!--              Please provide a valid state.-->
              <!--            </div>-->
            </div>
            <div class="col-md-3 mb-3">
              <label for="post">邮编</label>
              <input type="text" class="form-control" id="post" placeholder="邮编" required>
              <!--            <div class="invalid-tooltip">-->
              <!--              Please provide a valid zip.-->
              <!--            </div>-->
            </div>
          </div>
        </div>

        <div v-for="(item,index) in toBlank['B']" class="alert alert-secondary" role="alert">
          secondary+{{index}}
          <b style="float: right" @click="remove('B')">X</b>
        </div>

        <div v-for="(item,index) in toBlank['C']" class="alert alert-success" role="alert">
          success+{{index}}
          <b style="float: right" @click="remove('C')">X</b>
        </div>

        <div v-for="(item,index) in toBlank['D']" class="alert alert-warning" role="alert">
          warning+{{index}}
          <b style="float: right" @click="remove('D')">X</b>
        </div>

        <div v-for="(item,index) in toBlank['E']" class="alert alert-info" role="alert">
          info+{{index}}
          <b style="float: right" @click="remove('E')">X</b>
        </div>

        <div class="submit">
          <button type="button" class="btn btn-info">完成创建</button>
        </div>
      </scroll>

    </form>
  </div>
</template>

<script>
  import Scroll from "../Scroll/Scroll";

  export default {
    name: "createdBlank",
    props:{
      param:{
        name:"",
      },
      toBlank:{
        // type: Boolean,
        // default: false,
        A:0,
        B:0,
        C:0,
        D:0,
        E:0,
      }
    },
    data(){
      return{
        M_product: '',
      }
    },
    components:{
      Scroll,
    },
    methods:{
      remove(Alphabet){
        this.$emit("remove", Alphabet);
        // this.toBlank--;
      },
    },
    computed:{

    },
    created() {

    }
  }
</script>

<style scoped>
  #created-blank{
    width: 40vw;
    height: 100vh;
    margin-left: 15px;
    box-shadow: -3px 3px 10px rgba(100,100,100,.3);
    right: 0px;
  }

  .create_A_scroll{
    overflow: hidden;
  }

  #created-blank form{
    text-align: center;
    padding: 3vh 5vw 3vh;
  }

  #created-blank form div{
    /*margin-top: 2vh;*/
    /*vertical-align: center;*/
  }

  .submit{
    margin-top: 6vh;
    border-top: #666666;
  }
</style>