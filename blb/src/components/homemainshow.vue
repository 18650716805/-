<template>
    <div class="banner">
    
        <div class="swiper-container" id='swiper1'>
    
            <div class="swiper-wrapper">
    
                <div class="swiper-slide">
    
                    <a href="">
    
                        <img src="../assets/indeximg/piclunbo.png" alt="">
    
                    </a>
    
                </div>
    
                <div class="swiper-slide">
    
                    <a href="">
    
                        <img src="../assets/indeximg/piclunbo.png" alt="">
    
                    </a>
    
                </div>
    
                <div class="swiper-slide">
    
                    <a href="">
    
                        <img src="../assets/indeximg/piclunbo.png" alt="">
    
                    </a>
    
                </div>
    
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    
        <div class="cargolist">
    
            <ul>
    
                <a href="">
    
                    <li>
    
                        <img src="../assets/indeximg/限时抢购.png" alt="">
    
                        <span>限时抢购</span>
    
                    </li>
    
                </a>
    
                <a href="">
    
                    <li>
    
                        <img src="../assets/indeximg/newthing.png" alt="">
    
                        <span>今日上新</span>
    
                    </li>
    
                </a>
    
                <a href="">
    
                    <li>
    
                        <img src="../assets/indeximg/rank.png" alt="">
    
                        <span>好货排行</span>
    
                    </li>
    
                </a>
    
                <a href="">
    
                    <li>
    
                        <img src="../assets/indeximg/need.png" alt="">
    
                        <span>出行必备</span>
    
                    </li>
    
                </a>
    
                <a href="">
    
                    <li>
    
                        <img src="../assets/indeximg/wood.png" alt="">
    
                        <span>家具护理</span>
    
                    </li>
    
                </a>
    
                <a href="">
    
                    <li>
    
                        <img src="../assets/indeximg/electir.png" alt="">
    
                        <span>五金家电</span>
    
                    </li>
    
                </a>
    
                <a href="">
    
                    <li>
    
                        <img src="../assets/indeximg/shanpoo.png" alt="">
    
                        <span>清洁洗护</span>
    
                    </li>
    
                </a>
    
                <a href="">
    
                    <li>
    
                        <img src="../assets/indeximg/drink.png" alt="">
    
                        <span>酒水饮料</span>
    
                    </li>
    
                </a>
    
            </ul>
    
        </div>
    
        <div class="notice">
    
            <!-- <div class="one">
    
                    <p>畅饮尝新季，低至满99减20！</p>
    
                    <p class="line">初夏奶货据上火。有机奶粉馆两件8折！</p>
    
                </div>
    
                <div class="two">
    
                    <p>pppppp！</p>
    
                    <p class="line">pppppp
    
                        </>
    
                </div> -->
    
            <div class="swiper-container" id='swiper2'>
    
                <div class="swiper-wrapper">
    
                    <div class="swiper-slide">
    
                        <a href="">
    
                            <p>畅饮尝新季，低至满99减20！</p>
    
                        </a>
    
                        <a href="">
    
                            <p class="line">初夏奶货据上火。有机奶粉馆两件8折！</p>
    
                        </a>
    
                    </div>
    
                    <div class="swiper-slide">
    
                        <a href="">
    
                            <p>畅饮尝新季，低至满99减20ssssssssssssssssssssssss！</p>
    
                        </a>
    
                        <a href="">
    
                            <p class="line">初夏奶货据上火。有机奶粉馆两件8折sssssssssssssssssssssssssssssssssssssssss！</p>
    
                        </a>
    
                    </div>
                </div>
                <!-- 如果需要分页器 -->
            </div>
            <span>更多</span>
    
        </div>
    
        <div class="gray"></div>
    
        <div class="classify">
    
            <div>
    
                <div class="snacks">
    
                    <span>花样零食</span>
    
                </div>
    
                <a href="">
    
                    <img src="../assets/indeximg/picmain1.png" alt="">
    
                </a>
    
                <a href="">
    
                    <img src="../assets/indeximg/picmain2.png" alt="">
    
                </a>
    
            </div>
    
            <div>
    
                <div class="snacks">
    
                    <span>
    
                            个人清洁
    
                        </span>
    
                </div>
    
                <a href="">
    
                    <img src="../assets/indeximg/picmain3.png" alt="">
    
                </a>
    
                <a href="">
    
                    <img src="../assets/indeximg/picmain4.png" alt="">
    
                </a>
    
            </div>
    
        </div>
    
        <div class=" subject">
            <a href="">
                <img src="../assets/indeximg/picmain5.png" alt="" class="subject-marginRight">
            </a>
            <a href="">
                <img src="../assets/indeximg/picmain6.png" alt="">
            </a>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
    
  mounted() {
    new Swiper("#swiper1", {
      //   direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      speed: 300,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });

     new Swiper("#swiper2", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      speed: 300,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
  }
};
</script>

<style scoped>
.banner {
  background-color: #fff;

  padding-bottom: 1.307rem;
}

.banner img {
  width: 10rem;
}

.swiper-pagination-bullet {
  width: 0.16rem !important;

  height: 0.16rem !important;

  background-color: #f94431 !important;

  border: 1px solid #c4b27f;
}

.cargolist {
  width: 100%;

  font-size: 0.302rem;

  background-color: #fff;

  display: flex;

  flex-direction: column;

  justify-content: flex-start;
}

.cargolist ul li {
  float: left;

  width: 2.433rem;

  list-style-type: none;

  height: 1.627rem;

  padding-left: 0.567rem;

  padding-right: 0.433rem;

  text-align: center;

  margin-bottom: 0.507rem;

  background-color: #fff;
}

.cargolist ul li img {
  width: 1.167rem;

  height: 1.167rem;
}

.cargolist ul a {
  text-decoration: none;

  color: black;
}

.notice {
  width: 100%;

  height: 1rem;

  padding-left: 2.4rem;

  font-size: 0.32rem;

  background: url("../assets/indeximg/gonggao.png") no-repeat 18.5px 0;

  background-size: 1.547rem;

  padding-bottom: 0.213rem;

  overflow: hidden;

  position: relative;
}

.notice a {
  color: #000;

  text-decoration: none;
}

.notice p {
  width: 6rem;

  overflow: hidden;

  white-space: nowrap;

  text-overflow: ellipsis;
}

.line {
  float: left;
}

.notice span {
  position: absolute;

  right: 6px;

  top: 16px;

  margin-left: 0.604rem;

  border-left: 1px solid #808080;

  padding-left: 0.32rem;
}

.gray {
  width: 100%;

  height: 0.32rem;

  background-color: #f4f4f4;
}

.classify {
  width: 100%;

  display: flex;

  flex-direction: row;
}

.classify div {
  width: 50%;
}

.classify div .snacks {
  background: url("../assets/indeximg/personcommon.png") no-repeat 22px 12px;

  background-size: 3.92rem;
}

.classify div div {
  text-align: center;

  font-size: 0.453rem;

  color: #4086a2;

  width: 100%;

  height: 1.067rem;
}

.classify div img {
  width: 2.371rem;

  float: left;
}

.subject {
  width: 100%;

  padding-top: 0.267rem;

  padding-bottom: 0.133rem;

  background-color: #f4f4f4;

  overflow: hidden;
}

.subject img {
  float: left;

  width: 4.87rem;
}

.subject-marginRight {
  margin-right: 0.24rem;
}
</style>
    