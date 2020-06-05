<template>
  <div>
    <h1>Login</h1>
      <div class="container rounded-pill border border-light shadow-lg p-5 mb-5 bg-white rounded">
        <span v-show="isErr" v-for="err in errs" class="text-danger">{{err}}<br></span>
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" v-model="username" class="form-control" id="username">
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" v-model="password" class="form-control" id="password">
        </div>
        <button type="button" @click="redirect" class="btn btn-primary" style="float:right; margin-right: 5%">Submit</button>
      </div>

  </div>

</template>

<script>
  import {formAction} from "@/network/transfer.js"

  export default {
    name: "login",
    components:{
      formAction,
    },
    data(){
      return{
        note: false,

        username: null,
        password: null,
        errs: [],
        isErr:false
      }
    },
    methods:{
      redirect(){
        formAction(this.username, this.password).then(res=>{
          console.log(res);
          if(res.loginData.pro){
            // res.loginData.pro
            this.$session.start();
            this.$session.set("loginData",res.loginData);
            this.$router.push({name: res.loginData.pro,params:{"data":res.loginData.data}});
          }else{
            this.errs = res.loginData.error;
            this.isErr=true;
          }
        }).catch(err=>{
          console.log(err);
          alert(err)
          // this.err=err;
          // this.$router.push("/login");
        })
      },

      addressCheck(){
        // console.log(this.$router.currentRoute.fullPath);
        this.$emit("isShowNavi",this.note);
      }
    },
    created() {
      this.addressCheck();
    }
  }
</script>

<style scoped>
  .container{
    padding: 50%;
    /*background-color: #a6a3a5;*/
    /*border: 1px lightgray solid;*/
    /*border-radius: 3%;*/
  }
</style>