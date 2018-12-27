<template>
    <div class="cats-info" >
            <div class="cats-box">
                <p class="cats-box-title">
                    坚果
                </p>
                <div class="detail">
                    <div>
                        <img src="@/assets/坚果1.png" alt="">
                        <span>百草味</span>

                    </div>
                    <div>
                        <img src="@/assets/坚果2.png" alt="">
                        <span>三只松鼠</span>
                    </div>
                    <div>
                        <img src="@/assets/坚果3.png" alt="">
                        <span>憨豆熊</span>
                    </div>
                </div>
            </div>
            <div class="cats-box">
                <p class="cats-box-title">
                    酸奶
                </p>
                <div class="detail">
                    <div>
                        <img src="@/assets/牛奶1.png" alt="">
                        <span>伊利</span>

                    </div>
                    <div>
                        <img src="@/assets/牛奶2.png" alt="">
                        <span>光明</span>
                    </div>
                    <div>
                        <img src="../../assets/牛奶3.png" alt="">
                        <span>蒙牛</span>
                    </div>
                </div>
            </div>
            <div class="cats-box">
                <p class="cats-box-title">
                    方便面
                </p>
                <div class="detail">
                    <div>
                        <img src="../../assets/泡面1.png" alt="">
                        <span>合味道</span>

                    </div>
                    <div>
                        <img src="../../assets/泡面2.png" alt="">
                        <span>汤达人</span>
                    </div>
                    <div>
                        <img src="@/assets/泡面3.png" alt="">
                        <span>康师傅</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cats-info {
  width: 7.333rem;
  padding: 0 0.133rem;
}
.cats-box {
  width: 100%;
}
.cats-box-title {
  margin-top: 0.88rem;
  margin-bottom: 0.56rem;
  width: 100%;
  /* height: 1.667rem; */
  text-align: center;
  font-size: 0.32rem;
  background: url("../../assets/分界线.png") no-repeat center;
  background-size: 2rem;
  font-weight: bolder;
}
.cats-box .detail {
  width: 100%;

  display: flex;
  justify-content: flex-start;
}
.cats-box .detail div {
  background-color: #fff;
  font-size: 0.293rem;
  padding: 0.267rem;
  text-align: center;
  padding-right: 0.1rem;
}
.cats-box img {
  width: 1.867rem;
  margin-bottom: 0.533rem;
}
</style>