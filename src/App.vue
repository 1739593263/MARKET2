<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link>-->
<!--      <router-link to="/about">About</router-link>-->
<!--      <router-link to="/login">Login</router-link>-->
<!--    </div>-->
    <total-navi-bar v-if="naviMark"/>

    <transition name="into">
      <router-view @note="noc"/>
    </transition>

    {{this.$route.params}}
  </div>
</template>

<script>
  import totalNaviBar from "./components/totalNaviBar/totalNaviBar";
  export default {
    name:"app",
    data() {
      return{
        naviMark: true,
      }
    },
    components:{
      totalNaviBar,
    },
    methods:{
      noc(item){
        console.log("yy",item);
        this.naviMark = item;
      },
    },
    mounted() {

    }
  }
</script>

<style>
  @import "assets/css/base.css";

  @keyframes fadeIn{  0%{    opacity: 0;  }  50%{    opacity: 0.5;  }  100%{    opacity: 1;  }}
  @keyframes moveInUp{ 0%{  transform: translateY(0); }  100%{  transform: translateY(-400px); }}

  .into-enter-active{
    /*opacity: 0;  transition: opacity 1s ease-in;*/
    animation: fadeIn 1s ease-in;
  }
  .into-leave-active{
    animation: moveInUp .2s ease-in;
  }

  .rou{

  }

</style>
