<template>
  <div id="created-blank">
<!--    <h2 v-if="toBlank">HHH</h2>-->
    <form action="">
      <div v-for="(item,index) in toBlank['A']" class="alert alert-primary" role="alert">
        primary+{{index}}
        <b style="float: right" @click="remove('A')">X</b>
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

    </form>
  </div>
</template>

<script>
  export default {
    name: "createdBlank",
    props:{
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

    right: 0px;
  }
</style>