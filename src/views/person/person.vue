<template>
    <div id="person-page">

        <div class="registerData card">
           <h4 class="card-header">注册信息</h4>
              <div class="card-body">
<!--                  <h5 class="card-title">Special title treatment</h5>-->
<!--                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
                  <form>
                      <div class="form-group row" v-for="(value, key) in person">
                          <label :for="key" class="col-sm-5 col-form-label">{{key}}</label>
                          <div class="col-sm-5">
                              <input type="text" readonly class="form-control-plaintext" :id="key" :value="value">
                          </div>
                      </div>
                  </form>

              </div>
<!--            {{this.person}}-->
        </div>

    </div>
</template>

<script>
    export default {
        name: "person",
        data(){
            return{
                person:{
                    // type:Array,
                    // default(){
                    //     return [];
                    // }
                    "用户类型":'',
                    "账号":'',
                    "密码":'',
                }
            }
        },
        methods:{
            getPersonData(){
                this.person.用户类型 = this.$session.get("loginData").type;
                this.person.账号 = this.$session.get("loginData").data.user;
                this.person.密码 = this.$session.get("loginData").data.pwd;
                // this.$session.get("loginData").data.map((item)=>{
                //
                // });
                // this.person = this.$session.get("loginData");
                console.log(this.person);
            }
        },
        created() {
            this.getPersonData();
        }
    }
</script>

<style scoped>
    #person-page{
        padding-left: 15vw;
        padding-right: 15vw;
        padding-top: 3vw;
        width: 100vw;
        height: 100vh;
        background-color: rgba(100,100,100,.1);;

        display: flex;
        flex: 1;

        position: relative;
        top: 7vh;
    }

    .registerData{
        width: 30vw;
        height: 50vh;
    }
</style>