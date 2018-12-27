<template>
     <div class="nav">
        <!-- <div class="nav-top">
            <div class="nav-top-left">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                中国电信
                <img src="../assets/indeximg/Wifi Icon.png" alt="">
            </div>
            <div class="nav-top-middle">
                <span>23:52</span>
            </div>
            <div class="nav-top-right">
                <img src="../assets/indeximg/suoping.png" alt="" class="suoping">
                <img src="../assets/indeximg/导航.png" alt="" class="navigate">
                <img src="../assets/indeximg/clock.png" alt="" class="clock">
                <span>70%</span>
                <img src="../assets/indeximg/power.png" alt="" class="power">
            </div>
            <img src="./img/indeximg/导航栏.png" alt="">
        </div> -->
        <div class="nav-search">
            <div class="nav-search-left">
                <img src="../../assets/indeximg/扫一扫.png" alt="">
            </div>

          <router-link to='/search' style="display:inline-flex"> <input type="text" name="" placeholder="百草味零食"></router-link> 

            <div class="nav-search-right">
                <img src="../../assets/indeximg/message.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.nav {
  width: 100%;
  background-color: #ffa11b;
}

.nav-top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav-top-left {
  width: 3rem;
  color: #fff;
  padding-left: 0.187rem;
  font-size: 0.293rem;
}

.nav-top-left span {
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  background-color: #fff;
}

.nav-top-left img {
  width: 0.373rem;
  height: 0.267rem;
}

.nav-top-middle {
  width: 1rem;
  font-size: 0.293rem;
  color: #fff;
}

.nav-top-right {
  font-size: 0.267rem;
  color: #fff;
  padding-right: 0.187rem;
}

.nav-top-right .suoping {
  width: 0.347rem;
  height: 0.293rem;
}

.nav-top-right .navigate {
  width: 0.267rem;
  height: 0.267rem;
}

.nav-top-right .clock {
  width: 0.267rem;
  height: 0.267rem;
}

.nav-top-right span {
  display: inline-block;
  width: 0.64rem;
  height: 0.267rem;
}

.nav-top-right .power {
  width: 0.68rem;
  height: 0.28rem;
}

/* .nav-top {
  
    width: 100%;
    height: .520rem;
    
}

.nav-top img {
    width: 10rem;
} */

.nav-search {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

/* .nav-search .nav-search-left,
.nav-search-right {

    display: flex;
    align-items: center;
} */

.nav-search .nav-search-left img {
  width: 0.587rem;
  height: 0.587rem;
  margin-left: 0.32rem;
}

.nav-search input {
  width: 7.533rem;
  height: 0.587rem;
  border-radius: 20px;
  outline: none;
  border: none;
  padding-left: 0.933rem;
  background: url("../../assets/indeximg/搜索.png") no-repeat #fff 15px 5px;
  background-size: 0.373rem;
}

.nav-search .nav-search-right img {
  width: 0.587rem;
  height: 0.587rem;
  margin-right: 0.453rem;
}

</style>
