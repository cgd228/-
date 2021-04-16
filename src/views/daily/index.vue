<template>
  <div class="daily-container">
    <div class="magazine-box">
      <div class="left">
        <p class="year">2021</p>
        <p class="month">01-02</p>
      </div>
      <div class="right">
        <h5>深深的爱，淡淡的香</h5>
        <p>
          一朵花，皎洁，素雅，渐渐地演变成了一幅画，印在了记忆的长河里。那花，叶细长，翠翠的，花开时伸出一只长长的颈，花儿在颈上绽开，花瓣不多，色浅浅的，似白玉般温润、玲珑，淡淡的香气从花蕊中溢出，香薰满屋，沁人肺腑，令人心广神怡，使人宁静安详。
        </p>
        <div>
          <img src="~assets/images/daily01.png" alt="" />
          <img src="~assets/images/daily01.png" alt="" />
          <img src="~assets/images/daily01.png" alt="" />
        </div>
      </div>
    </div>
    <div class="magazine-box">
      <div class="left">
        <p class="year">2021</p>
        <p class="month">01-02</p>
      </div>
      <div class="right">
        <h5>深深的爱，淡淡的香</h5>
        <p>
          一朵花，皎洁，素雅，渐渐地演变成了一幅画，印在了记忆的长河里。那花，叶细长，翠翠的，花开时伸出一只长长的颈，花儿在颈上绽开，花瓣不多，色浅浅的，似白玉般温润、玲珑，淡淡的香气从花蕊中溢出，香薰满屋，沁人肺腑，令人心广神怡，使人宁静安详。
        </p>
        <div>
          <img src="~assets/images/daily01.png" alt="" />
          <img src="~assets/images/daily01.png" alt="" />
          <img src="~assets/images/daily01.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.daily-container {
  width: 1200px;
  margin: 0 auto;
  .magazine-box {
    display: flex;
    margin-bottom: 60px;
    .left {
      // flex: 1.5;
      width: 150px;
      padding-top: 10px;
      box-sizing: border-box;
      .year {
        color: #444;
        font-size: 22px;
        margin-bottom: 10px;
      }
      .month {
        color: #777;
        font-size: 16px;
      }
    }
    .right {
      // flex: 8.5;
      width: 1050px;
      padding-left: 100px;
      box-sizing: border-box;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: #eee;
      }
      h5 {
        color: rgb(68, 68, 68);
        font-weight: 400;
        font-size: 16px;
      }
      p {
        color: rgb(119, 119, 119);
        line-height: 30px;
        font-size: 14px;
        margin: 15px 0;
      }
      div {
        display: flex;
        justify-content: space-between;
        img {
          width: 30%;
        }
      }
    }
  }
}
</style>
