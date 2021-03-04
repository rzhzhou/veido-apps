<template>
  <div class="page">
    <div class="page-header">
      <div class="head-part-case">
        <page-nav></page-nav>
      </div>
    </div>
    <div class="page-content">
      <div class="center-part-case">
        <div class="center-play-info">
        	<video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer" 
            :playsinline="true" 
            :options="playerOptions"
          ></video-player>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Navigation = () => import('@/components/Navigation/index')

export default {
  name: 'veidoplay',
  components: {
    'page-nav': Navigation,
  },
  data () {
    return {
      // activeName: 'second'
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          // type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          // src: require("@/assets/images/海贼王-953.mp4") //url地址
          // src: 'http://1251316161.vod2.myqcloud.com/5f6ddb64vodsh1251316161/089966885285890807026217148/a1eAwQPfSV0A.mp4'
          type: 'application/x-mpegURL',
          // src: 'https://iqiyi.cdn9-okzy.com/20201206/19289_f866b1a5/index.m3u8'
          src: 'https://iqiyi.cdn9-okzy.com/20201206/19289_f866b1a5/index.m3u8'
        }],
        poster: require("@/assets/images/playground.jpg"), //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
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

.center-part-case {
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 75%
}


.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
