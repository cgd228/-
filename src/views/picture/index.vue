<template>
  <div class="picture-container">
    <div class="top-img">
      <div>
        <div
          v-for="(item, index) in topPicList"
          :key="index"
          @mouseenter="mouseEnter(index + 1)"
          :class="{ tranAnimate: currentIndex === index + 1 }"
        >
          <img :src="item.img" :alt="item.title" />
          <p v-if="currentIndex === index + 1">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div v-for="(item, index) in swiperList" :key="index + 'a'" :class="{ activeMargin: (index + 1) % 3 === 0 }">
        <img :src="item.img" :alt="item.title" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { topPicList, swiperList } from './data'

export default {
  data() {
    return {
      topPicList,
      swiperList,
      currentIndex: 2
    }
  },
  methods: {
    mouseEnter(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.picture-container {
  .top-img {
    width: 100%;
    background-color: #f5f5f5;
    height: 650px;
    padding-top: 100px;
    box-sizing: border-box;
    & > div {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      div {
        transition: all 0.5s linear;
        width: 300px;
        border-radius: 8px;
        img {
          width: 300px;
          height: 400px;
        }
        p {
          height: 45px;
          line-height: 45px;
          text-align: center;
        }
      }
      .tranAnimate {
        transform: scale(1.1);
        box-shadow: 0px 0px 5px 0px rgb(200, 200, 200);
      }
    }
  }
  .swiper-container {
    margin-top: 100px;
    width: 1200px;
    margin: 50px auto;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 350px;
      margin-right: 75px;
      margin-bottom: 20px;
      img {
        width: 350px;
        height: 200px;
        border-radius: 8px;
      }
      p {
        width: 350px;
        height: 45px;
        line-height: 45px;
        text-align: center;
      }
    }
    .activeMargin {
      margin-right: 0;
    }
  }
}
</style>
