<template>
  <div class="share-container">
    <div class="top-share">
      <div v-for="(item, index) in shareLife" :key="index">
        <img :src="item.img" :alt="item.img" />
        <p>{{ item.title }}</p>
        <i class="el-icon-video-play"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { shareLife } from './data'

export default {
  data() {
    return {
      shareLife
    }
  }
}
</script>

<style lang="less" scoped>
.share-container {
  .top-share {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 100px;
    div {
      width: 550px;
      height: 350px;
      position: relative;
      img {
        width: 550px;
        height: 300px;
        border-radius: 8px;
      }
      p {
        height: 45px;
        line-height: 45px;
      }
      /deep/ .el-icon-video-play {
        cursor: pointer;
        color: #fff;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 60px;
      }
    }
  }
}
</style>
