<template>
  <div class="page">
    <div class="page-header">
      <div class="head-part-case">
        <page-nav></page-nav>
      </div>
    </div>
    <div class="page-center">
      <div class="center-part-case">
        <div class="center-caousel-info">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="center-part-movie">
          <div class="center-part-box">
            <div class="center-top">
              <div class="center-top-head">
                <h3 class="title">电影</h3>
                <a href="#" class="fed-more">更多</a>
              </div>
            </div>
            <div class="center-bottom">
              <div class="center-bottom-left">
                <ul class="imglist">
                  <li>
                    <router-link
                    :to="{
                      path: '/movie/' + 1
                    }"
                    >
                      <div class="img">
                        <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
                      </div>
                      <div class="text">
                        <span>一点就到家</span>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <a>
                      <div class="img">
                        <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
                      </div>
                      <div class="text">
                        <span>暴风眼</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div class="img">
                        <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
                      </div>
                      <div class="text">
                        <span>暴风眼</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div class="img">
                        <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
                      </div>
                      <div class="text">
                        <span>暴风眼</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div class="img">
                        <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
                      </div>
                      <div class="text">
                        <span>暴风眼</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div class="img">
                        <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
                      </div>
                      <div class="text">
                        <span>暴风眼</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div class="img">
                        <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
                      </div>
                      <div class="text">
                        <span>暴风眼</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div class="img">
                        <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
                      </div>
                      <div class="text">
                        <span>暴风眼</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="center-bottom-right">
                <ul>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">1</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">2</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">3</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">4</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">5</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">6</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">7</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">8</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">9</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">10</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">11</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">12</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">13</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">14</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                  <li class="top-line-dot">
                    <a class="text-overflow">
                      <span class="text-red">15</span>
                      <span class="text-right">最新：12集</span>
                      暴风眼
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Navigation = () => import('@/components/Navigation/index');

export default {
  name: 'Home',
  components: {
    'page-nav': Navigation,
  },
  data () {
    return {
      // activeName: 'second'
    }
  },
  methods: {
  // handleClick(tab, event) {
  //   console.log(tab, event);
  // }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, Arial, Microsoft Yahei, sans-serif;
    -webkit-tap-highlight-color: transparent;
}
a {
  color: #333;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
.page {
  background-image: url(../../../assets/images/background.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto 100vh;
  background-size: 100% 100%;
}

.page-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.125rem;
  z-index: 1000;
}

.head-part-case {
  position: relative;
  margin: 0 auto;
}

.page-center {
  /* display: inline-block; */
  margin: 0px;
  padding: 20px 0px;
  box-sizing: border-box;
}

.center-part-case {
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 75%
}

.center-part-movie {
  margin: 0 auto;
  height: 820px;
  width: 100%;
  background: white;
  border-radius: 10px;
}

.center-part-box {
  padding: 10px;
}

.center-top-head {
  height: 50px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #EEEEEE;
}

.title {
  display: inline;
  float: left;
  margin: 10px;
}

.fed-more {
  float: right;
  margin: 10px;
}

.center-bottom-left {
  display: inline-block;
  margin: 10px;
  padding: 5px;
  height: 80%;
  width: 75%;
}

.center-bottom-right {
  display: inline-block;
  margin: 10px;
  padding: 5px;
  height: 80%;
  width: 20%;
}

ul.imglist{ margin:0 auto; width:820px; overflow:hidden} 
ul.imglist li{ float:left; padding:4px 8px; width:200px} 
ul.imglist li img{ display:block; width:180px; height:290px} 
ul.imglist li span{ display:block; width:97%; height:30px; line-height:30px; background:#F6F6F6} 

.img {
  height: 310px;
  padding: 6px 8px;
}

.text-overflow {
  display: block;
  padding: 10px 15px;
}

.top-line-dot {
  position: relative;
  line-height: 27px;
}

.text-red {
  float: left;
  color: red;
}

.text-right {
  float: right;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
