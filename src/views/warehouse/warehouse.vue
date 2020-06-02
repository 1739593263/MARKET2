<template>
  <div>
    <h1>WAREHOUSE</h1>
    <button type="button" class="btn btn-danger float-right" @click="DeleteAll" style="margin-right: 16%; margin-bottom: 2px">删除</button>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">
          <input type="checkbox" v-model="isAllChecked" @click="checkAll"/>
        </th>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">attributeA</th>
        <th scope="col">attributeB</th>
        <th scope="col">attributeC</th>
        <th scope="col">
          Operation
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(data,index) in formDatas">
        <td>
          <input type="checkbox" v-model="isChecked" :id="index" :value="data" :click="clickEvent"/>
        </td>
        <td>{{data.id}}</td>
        <td>{{data.name}}</td>
        <td>{{data.attributeA}}</td>
        <td>{{data.attributeB}}</td>
        <td>{{data.attributeC}}</td>
        <td>
          <button type="button" class="btn btn-info" data-toggle="modal" data-target="#update">修改</button>
          &nbsp;
          <button type="button" @click="remove(index)" class="btn btn-danger">删除</button>
        </td>

        <!-- Update Modal -->
        <div class="modal fade" id="update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update data</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" class="form-control" id="name" :value="data.name">
                  </div>
                  <div class="form-group">
                    <label for="attributeA">attributeA</label>
                    <input type="text" class="form-control" id="attributeA" :value="data.attributeA">
                  </div>
                  <div class="form-group">
                    <label for="attributeB">attributeB</label>
                    <input type="text" class="form-control" id="attributeB" :value="data.attributeB">
                  </div>
                  <div class="form-group">
                    <label for="attributeC">attributeC</label>
                    <input type="text" class="form-control" id="attributeC" :value="data.attributeC">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </tr>
      </tbody>
    </table>
    <span>{{isChecked}}</span>
  </div>
</template>

<script>
  import {serverBus} from "../../main.js"
  import {showDatas} from "../../network/proTrans";

  export default {
    name: "warehouse",
    data(){
      return{
        formDatas:[],
        markedData:[],
        isChecked: [],
        isAllChecked: false
      }
    },
    methods:{
      fullForm(){
        showDatas().then((res)=>{
          console.log(res);
          console.log(res.created.CreatedData);
          this.formDatas=res.created.CreatedData;
        }).catch((err)=>{
          console.log(err);
        })
      },

      remove(index){
        console.log(this.isChecked);

        let i = false;
        this.isChecked.map((item)=>{
          if(index==(item.id-1)){
            i=true;
          }
        });

        if (i) this.isChecked.splice(index,1);
        this.formDatas.splice(index,1)
      },

      checkAll(){
          this.isChecked=[];

          if(!this.isAllChecked){
            this.formDatas.map((item)=>{
              this.isChecked.push(item)
            })
          }
      },

      addressCheck(){
        this.$emit("note",true);
      },

      DeleteAll(){
        console.log(this.isChecked);
        this.isChecked.map((item)=>{
          console.log("delete item id"+item.id);
          this.remove(item.id-1);
        });
      }
    },
    computed:{
      clickEvent(){
        console.log(this.formDatas.length+"??"+this.isChecked.length);
        this.isAllChecked = (this.isChecked.length === this.formDatas.length);
      },
    },
    created(){
      this.fullForm();
      this.addressCheck();
    },
    mounted() {
      // this.$bus.$on("load",()=>{
      //   console.log("-----");
      // });
      //
      // serverBus.$on('up', (up) => {
      //   console.log(up);
      // });
      //
      // this.$bus.$on('up', (up) => {
      //   console.log(up);
      // });
      //
      // this.$on('up',(up) => {
      //   console.log(up);
      // })
    }
  }
</script>

<style scoped>

</style>