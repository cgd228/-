<template>
  <div class="personal-container">
    <div class="personal-info">
      <div>
        <img src="~assets/images/photo.png" alt="头像" />
        <div>
          <h4>Peter</h4>
          <ul>
            <li v-for="(item, index) in userInfo" :key="index">
              <p>{{ item.name }}：</p>
              <p>{{ item.value }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfo } from './data'

export default {
  data() {
    return {
      userInfo
    }
  }
}
</script>

<style lang="less" scoped>
.personal-container {
  .personal-info {
    width: 100%;
    background-color: #f5f5f5;
    & > div {
      width: 1200px;
      margin: 0 auto;
      padding: 80px 0;
      box-sizing: border-box;
      display: flex;
      border-radius: 8px;
      img {
        width: 500px;
        height: 400px;
        border-radius: 8px;
      }
      div {
        width: 700px;
        height: 400px;
        padding: 60px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 4px;
        h4 {
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #eee;
          font-size: 20px;
        }
        ul {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          li {
            width: 290px;
            display: flex;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
