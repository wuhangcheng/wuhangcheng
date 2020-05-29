<template>
  <div class="home">
    <header>
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccbfedf698680df61909930d17219b72.jpg?w=5120&h=240"
        alt
      />
    </header>
    <nav>
      <div class="navLeft">
        <ul>
          <li>小米商城</li>
          <li>MIUI</li>
          <li>LoT</li>
          <li>云服务</li>
          <li>金融</li>
          <li>小米商城</li>
          <li>MIUI</li>
          <li>LoT</li>
          <li>云服务</li>
          <li>金融</li>
          <li>云服务</li>
          <li>金融</li>
        </ul>
      </div>
      <div class="navCenter">
        <ul>
          <li>登录</li>
          <li>注册</li>
          <li>消息通知</li>
        </ul>
      </div>
      <div class="navRight">购物车</div>
    </nav>

    <section>
      <div class="silde">
        <ul>
          <li>手机 电话卡   <i class="el-icon-arrow-right"></i> </li>
          <li>电视 盒子  <i class="el-icon-arrow-right"></i></li>
          <li>笔记本 显示器  <i class="el-icon-arrow-right"></i></li>
          <li>平板  <i class="el-icon-arrow-right"></i></li>
          <li>家电 插线板  <i class="el-icon-arrow-right"></i></li>
          <li>出行 穿戴  <i class="el-icon-arrow-right"></i></li>
          <li>智能 路由器  <i class="el-icon-arrow-right"></i></li>
          <li>电源 配件  <i class="el-icon-arrow-right"></i></li>
          <li>健康 儿童  <i class="el-icon-arrow-right"></i></li>
          <li>耳机 音箱  <i class="el-icon-arrow-right"></i></li>
          <li>生活 箱包  <i class="el-icon-arrow-right"></i></li>
        </ul>
      </div>
      <div class="swiper">
        <template>
          <div class="block">
            <el-carousel trigger="click" height="150px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b60e10dd517a4cf61b7346dbb18c4f38.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
                    alt
                  />
                </h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </template>
      </div>
    </section>

    <footer>
      <div class="Time">
        <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
      </div>
      <div class="flashsale-list">
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>

      </div>
    </footer>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },
  activated() {},
  created() {},
  methods: {},
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true
    });
  }
};
</script>
<style lang="less"  scoped>
.home {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  nav {
    width: 100%;
    height: 40px;
    background: #333;
    padding: 0px 200px;
    box-sizing: border-box;
    .navLeft {
      width: 700px;
      height: 100%;
      color: #b0b0b0;
      float: left;
      ul {
        list-style: none;
        display: flex;
        margin: 0px;
        li {
          flex: 1;
          font-size: 10px;
          text-align: center;
          line-height: 40px;
        }
      }
    }
    .navCenter {
      height: 100%;
      font-size: 10px;
      float: left;
      color: #b0b0b0;
      ul {
        list-style: none;
        margin: 0px;
        li {
          padding: 0px 5px;
          box-sizing: border-box;
          display: inline-block;
          line-height: 40px;
        }
      }
    }
    .navRight {
      width: auto;
      height: 100%;
      float: right;
      padding: 0px 10px;
      box-sizing: border-box;
      text-align: center;
      color: #b0b0b0;
      font-size: 10px;
      line-height: 40px;
    }
  }
  section {
    width: 100%;
    height: 460px;
    padding: 0px 200px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    .silde {
      width: 234px;
      height: 100%;
      background: rgba(105, 101, 101, 0.6);
      ul {
        width: 100%;
        height: 100%;
        li {
          width: 100%;
          height: 42px;
          line-height: 42px;
          font-size: 10px;
          display: block;
          padding-left: 30px;
          box-sizing: border-box;
          i{
            float: right;
            padding-right: 20px;
            box-sizing: border-box;
            line-height: 42px;
          }
        }
        li:hover{
          background: #ff6700;
        }
      }
    }
    .swiper {
      flex: 1;
      .block {
        width: 100%;
        height: 100%;
        .el-carousel {
          height: 460px;
          .el-carousel__container {
            height: 460px;
            .el-carousel__item {
              height: 460px;
              h3 {
                width: 100%;
                height: 460px;
                margin: 0;
                padding: 0;
                img {
                  width: 100%;
                  height: 460px;
                  display: block;
                }
              }
            }
          }
        }
      }
    }
  }
  footer {
    width: 100%;
    height: 340px;
    padding: 0px 200px;
    box-sizing: border-box;
    display: flex;
    .Time {
      width: 234px;
      height: 100%;
      background: #f1eded;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .flashsale-list{
      flex: 1;
      
    }
  }
}
</style>