<template>
    <div class="search">
         <div class="nav">
            <div class="nav-top">
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
                <!-- <img src="./img/indeximg/导航栏.png" alt=""> -->
            </div>
            <div class="nav-search">
                <router-link to='/home'> <div class="nav-search-left">
                    <img src="../assets/back.png" alt="">
                </div></router-link>

                <input type="search" name="" placeholder="百草味零食">

                <div class="nav-search-right">
                    搜索
                </div>
            </div>
        </div>
        <div class="hotsearch">
            <p class="hot">热搜</p>
            <div class="hotsearch-hot">
                <p>电蚊香</p>
                <p>花露水</p>
                <p>三只松鼠</p>
                <p>百草味</p>
                <p>抽纸</p>
            </div>
        </div>
        <div class="gray"></div>
        <div class="search-history">
            <p>历史搜索</p>
            <ul id="search-ul">
                
            </ul>
            <div>清空搜索历史</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.search{
     width: 100%;
    height: 100%;
    background-color: #fff
}
.nav {
    width: 100%;
    background-color: #ffa11b
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
    padding-left: .187rem;
    font-size: .293rem;
}

.nav-top-left span {
    display: inline-block;
    width: .16rem;
    height: .16rem;
    border-radius: 50%;
    background-color: #fff;
}

.nav-top-left img {
    width: .373rem;
    height: .267rem;
}

.nav-top-middle {
    width: 1rem;
    font-size: .293rem;
    color: #fff;
}

.nav-top-right {
    font-size: .267rem;
    color: #fff;
    padding-right: .187rem;
}

.nav-top-right .suoping {
    width: .347rem;
    height: .293rem;
}

.nav-top-right .navigate {
    width: .267rem;
    height: .267rem;
}

.nav-top-right .clock {
    width: .267rem;
    height: .267rem;
}

.nav-top-right span {
    display: inline-block;
    width: .64rem;
    height: .267rem;
}

.nav-top-right .power {
    width: .68rem;
    height: .28rem;
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
    padding: .373rem 0 .293rem 0
}
.nav-search .nav-search-left{

    display: flex;
    align-items: center;
}
.nav-search .nav-search-left img {
    width: .333rem;
    height: .467rem;
    margin-left: .32rem;
  
}

.nav-search input {
    width: 7.533rem;
    height: .587rem;
    border-radius: 20px;
    outline: none;
    border: none;
    padding-left: .933rem;
    background: url("../assets/indeximg/搜索.png") no-repeat #fff 15px 5px;
    background-size: .373rem;
}

.nav-search .nav-search-right  {
  margin-right: .373rem;
    font-size: .453rem;
    color: #fff;
    display: inline-block;
}

.hotsearch {
    width: 100%;
    padding: .347rem .293rem;
}

.hotsearch .hot , .search-history p{
    font-size: 0.427rem;
    color: #000;
    font-weight: bold;
}

.hotsearch .hotsearch-hot {
    display: flex;
    justify-content: space-between;
    font-size: .4rem;
    margin-top: .267rem;
}

.hotsearch-hot p {
    width: 1.627rem;
    height: .747rem;
    background-color: #f0f2f5;
    border-radius: 4px;
    text-align: center;
    line-height: .747rem;
    color: #5e6060;
}

.gray {
    width: 100%;
    height: .267rem;
    background-color: #f4f4f4;
}

.search-history p{
    padding: .453rem .293rem .293rem ;
    border-bottom:1px solid  #f4f4f4;
}
.search-history ul{
    padding-left: .293rem;
    border-bottom: 1px solid  #f4f4f4;
}

.search-history ul li{
    font-size: .4rem;
    color: #5e6060;
    padding: .373rem .293rem;
    border-bottom:1px solid  #f4f4f4;
}
.search-history div{
    width: 4.333rem;
    height: .853rem;
    font-size: .347rem;
    color: #5e6060;
    border: 1px solid #5e6060;
    
    line-height: .853rem;
    border-radius: 4px;
    margin-top: 1.457rem;
    margin-left: 2.96rem;
    padding-left: 1.307rem;
    background: url('../assets/searchdelete.png')no-repeat 28px 4px;
    background-size: .573rem;
}
</style>
