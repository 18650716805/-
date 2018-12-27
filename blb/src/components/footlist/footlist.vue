<template>
    <div class="foot">
        <ul>
            <li v-for="(item,index) in homeitems" :key="index" @touchstart="homeClick(index)" >
                <router-link :to="item.url">
                <img :src="item.url" alt="">
                <span :class="[item.sty, {fontcolor:index==current}]" style="font-size:22px"></span>
                <br>
                <span ref :class="{fontcolor:index==current}">{{item.name}}</span></router-link>
            </li>
             <!-- <li>
              <router-link to="/home">
              <span class="iconfont icon-shangdian" style="font-size:22px"></span>
              <br>
              <span class="fontcolor">
                主页
              </span>
              </router-link>
            </li>
            <li>
              <router-link to="/home/catsmainshow">
              <span class="iconfont icon-shangdian1" style="font-size:22px"></span> <br>
              <span class="fontcolor">
                分类
              </span>
              </router-link>
            </li>
             <li>
              <router-link to="/location">
              <span class="iconfont icon-daohang1" style="font-size:22px"></span> <br>
              <span class="fontcolor">
                地图
              </span>
              </router-link>
            </li>
              <li>
              <router-link to="/home/catsmainshow">
              <span class="iconfont icon-shangdian1" style="font-size:22px"></span> <br>
              <span class="fontcolor">
                购物车
              </span>
              </router-link>
            </li>  <li>
              <router-link to="/home/catsmainshow">
              <span class="iconfont icon-shangdian1" style="font-size:22px"></span> <br>
              <span class="fontcolor">
               我的
              </span>
              </router-link>
            </li> -->
        </ul>
    </div>
</template>

<script>

export default {
  data() {
    return {
      homeitems: [
        { name: "主页", url: '/home/homemainshow',sty:"iconfont icon-shangdian" },
        { name: "分类", url:'/home/catsmainshow',sty:'iconfont icon-shangdian1' },
        { name: "地图", url:'/location',sty:'iconfont icon-daohang1'},
        { name: "购物车",url: '/home',sty:'iconfont icon-unie62d'},
        { name: "我的", url: '/home' ,sty:'iconfont icon-weibiaoti-_huabanfuben'}
      ],
     current:0
    };
  },
  methods:{
      homeClick(index){
        this.current=index
      }
  }
};
</script>

<style>
.foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
}

.foot ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.16rem 0;
}

.foot ul li {
  width: 1rem;
  font-size: 0.32rem;
  text-align: center;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.foot ul li a {
  text-decoration: none;
  color: #000;
}
.foot ul li img {
  width: 0.6809rem;
}

.fontcolor {
  color: #ffa11b;
}
</style>
