<template>
  <div id="blankComponent">
    <blank>
      <nav aria-label="breadcrumb" slot="introduce">
        <ul class="nav">
          <li class="breadcrumb-item"><h4>创建列表</h4></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ul>
      </nav>

      <img src="@/assets/img/blank/file-submodule.svg" width="400" height="500" slot="contest" alt="">
    </blank>
  </div>
</template>

<script>
  import blank from "../../commons/blank/blank";

  export default {
    name: "blankComponent",
    components:{
      blank
    }
  }
</script>

<style scoped>
  #blankComponent{
    width: 70vw;

    position: fixed;
    left: 24vw;
    top: 7vh;

  }

  #blankComponent img{
    opacity: 0.5;
    margin-left: 20vw;
  }
</style>