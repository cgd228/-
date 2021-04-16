<template>
  <div class="standard-layout-container">
    <div class="layout-header">
      <img src="../../assets/images/photo.png" alt="头像" class="photo" />
      <h4>WELCOME</h4>
      <p>程序员一枚，代码使我快乐，欢迎来撩...</p>
      <ul>
        <li
          v-for="item in moduleInfo"
          :key="item.type"
          :class="{ activeStyle: item.type === currentType }"
          @click="selectType(item.type)"
          v-text="item.moduleName"
        />
      </ul>
    </div>
    <!-- <img :src="cuttentModule.img" alt="" class="current-img"> -->
    <div class="router-box">
      <div v-if="currentType !== 'main'">
        <h4>{{ moduleTitle.nameE }}</h4>
        <p>{{ moduleTitle.name }}</p>
      </div>
      <router-view />
    </div>
    <!-- 底部 -->
    <div class="layout-footer">
      <h4>WELCOME</h4>
      <ul class="module">
        <li
          v-for="item in moduleInfo"
          :key="item.type"
          @click="selectType(item.type, 'scroll')"
          v-text="item.moduleName"
        />
      </ul>
      <ul class="concat-list">
        <li v-for="(item, index) in contactList" :key="index">
          <p>{{ item.name }}：</p>
          <p>{{ item.value }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { contactList, moduleMap } from './data'

export default {
  data() {
    return {
      currentType: 'main',
      contactList
    }
  },
  created() {
    this.getHomeInfo()
    this.currentType = this.$route.name
  },
  computed: {
    ...mapState('home', {
      moduleInfo: state => state.homeInfo
    }),
    cuttentModule() {
      return this.moduleInfo.find(item => item.type === this.currentType)
    },
    moduleTitle() {
      return moduleMap.get(this.currentType)
    }
  },
  methods: {
    ...mapActions('home', ['getHomeInfo']),
    selectType(val, scroll) {
      this.currentType = val
      this.$router.push({ name: val })
      if (scroll && val === this.currentType) {
        console.log(123)
        // window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.standard-layout-container {
  .layout-header {
    height: 350px;
    width: 100%;
    background: linear-gradient(0deg, rgba(144, 202, 248, 1) 0%, rgba(165, 214, 167, 1) 99.12280701754386%);
    padding-top: 25px;
    box-sizing: border-box;
    .photo {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      margin: 0 auto;
    }
    h4 {
      margin-top: 15px;
      font-size: 20px;
      text-align: center;
      color: rgb(68, 68, 68);
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        width: 40px;
        background-color: rgb(255, 192, 1);
      }
    }
    p {
      color: rgb(119, 119, 119);
      margin-top: 30px;
      text-align: center;
      font-size: 16px;
    }
    ul {
      display: flex;
      justify-content: center;
      li {
        padding: 0 25px;
        margin: 35px 30px 0 30px;
        line-height: 50px;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        color: #777;
      }
      .activeStyle {
        color: rgb(255, 192, 1);
        border-color: rgb(255, 192, 1);
      }
    }
  }
  .current-img {
    height: 300px;
    width: 100%;
  }
  .router-box {
    margin-top: 80px;
    background-color: #fff;
    h4 {
      font-size: 26px;
      text-align: center;
      position: relative;
      color: #444;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -15px;
        transform: translateX(-50%);
        height: 2px;
        width: 20px;
        background-color: rgb(255, 192, 1);
      }
    }
    p {
      text-align: center;
      color: #444;
      font-size: 18px;
      margin: 25px 0 50px 0;
    }
  }
  .layout-footer {
    height: 300px;
    width: 100%;
    padding-top: 60px;
    box-sizing: border-box;
    background-color: #1e1e1e;
    h4 {
      color: rgb(255, 192, 1);
      font-size: 24px;
      text-align: center;
      font-weight: 400;
    }
    .module {
      display: flex;
      justify-content: center;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -30px;
        width: 1200px;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.1);
        left: 50%;
        transform: translateX(-50%);
      }
      li {
        margin: 40px 50px 0 50px;
        cursor: pointer;
      }
      li:hover {
        color: #fff;
      }
    }
    .concat-list {
      display: flex;
      justify-content: space-between;
      width: 1200px;
      margin: 0 auto;
      margin-top: 80px;
      li {
        width: 25%;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
