<template>
  <div class="page">
    <div class="page-header">
      <div class="head-part-case">
        <page-nav></page-nav>
      </div>
    </div>
    <div class="page-center">
      <div class="center-first">
        <div class="center-part">
          <div class="part-thumb">
            <img src="http://tvax4.sinaimg.cn/large/006sgDEely1gnxsw2qmhcj307i0aiq3t.jpg">
          </div>
          <div class="part-details">
            <h2></h2>
            <ul>
              <li>
                <span>主演:</span>
                <a></a>
              </li>
              <li>
                <span>导演:</span>
                <a></a>
              </li>
              <li>
                <span>分类:</span>
                <a></a>
              </li>
              <li>
                <span>简介:</span>
                <a></a>
              </li>
            </ul>
          </div>
          <div class="video-play">
            <button>
              <a>立即播放</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VideoSource }   from '@/api/play';
const Navigation = () => import('@/components/Navigation/index')
export default {
  name: 'movie',
  components: {
    'page-nav': Navigation,
  },
  data() {
    return {
      id: 0,
      MovieSourceData: []
    };
  },

  // watch: {
  //   $route: {
  //     handler() {
  //       this.getSearch();
  //     },
  //     deep: true,
  //   },
  // },

  methods: {
    // getSearch: debounce(function delay() {
    //   this.url();
    // }, 100),

    async url() {
      console.log('111');
      console.log(this.id);
      const result = await VideoSource({
      }, this.id);
      this.MovieSourceData = result;
      console.log(this.MovieSourceData);
    }
  },

  mounted() {
    this.id = this.$route.params.id;
    this.url();
  },



}
</script>

<style>
.page {
  height: 1000px;
  width: 100%;
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
.center-first {
  position: relative;
  margin: 0 auto;
  padding: 10px 20px;
  height: 100%;
  width: 75%;
  background: white;
  border-radius: 10px;
}
.center-part {
  position: relative;
  overflow: hidden;
  margin: 20px 25px;
}
.part-thumb {
  float: left;
  height: 100%;
  width: 25%;
}
.part-details {
  height: 100%;
  width: 70%;
  float: right;
}
ul {
  overflow: hidden;
  list-style: none;
}
ul li span {
  float: left;
  margin: 5px 10px;
}
</style>