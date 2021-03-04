<template>
  <div class="head-navs-info">
    <ul class="head-ul-info">
      <li class="head-li-info"><h3>Azz影院</h3></li>
      <li class="head-li-info"><a href="/">首页</a></li>
      <li class="head-li-info"><a href="play">电影</a></li>
      <li class="head-li-info"><a href="#">电视剧</a></li>
      <li class="head-li-info"><a href="#">动漫</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .head-navs-info {
    background-color: white;
    padding: 0 200px;
  }
  .head-ul-info {
    margin-left: 200px;
    margin-right: 200px;
    background-color: white;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 60px;
  }
  .head-li-info {
    display: inline;
    float: left;
  }
  li a {
    display: inline-block;
    color: #333;
    text-align: center;
    padding: 20px 16px;
    text-decoration: none;
  }

  li a:hover {
    color: red;
  }
</style>