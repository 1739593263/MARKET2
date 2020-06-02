<template>
  <div id="total-navi-bar">
    <navi-bar>
      <navi-bar-item>
        <span slot="leftTitle" class="navbar-brand">
          <img src="@/assets/img/logo/codesandbox.svg" alt="logo">
          &nbsp;
          <span>Title</span>
        </span>

        <ul class="nav justify-content-end" slot="personal">
          <li class="nav-item navbar-brand">
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
            </form>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <router-link to="/login">login</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">link2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><img src="@/assets/img/NaviBar/account_box-24px.svg" alt=""></a>
          </li>
        </ul>

      </navi-bar-item>
    </navi-bar>
  </div>
</template>

<script>
  import NaviBar from "../../commons/NaviBar/NaviBar";
  import NaviBarItem from "../../commons/NaviBar/NaviBarItem";

  export default {
    name: "totalNaviBar",
    components:{
      NaviBar,
      NaviBarItem
    }
  }
</script>

<style scoped>
</style>