<template>
     <div class="cats-info" >
            <div class="cats-box">
                <p class="cats-box-title">
                    坚果
                </p>
                <div class="detail" v-for="(list,index) in catslists" :key="index">
                    <div>
                        <img :src='list.show_img' alt="">
                        <span>{{list.goods_name}}</span>
                    </div>
                </div>
            </div>
            
        </div>
</template>

<script>
import { catslist } from "@/components/common/api.js";
export default {
    props:['cid'],
    data(){
        return{
            catslists:[],
           
        }
    },
mounted(){
    catslist(this.cid).then(res=>{
       this.catslists=res.data.data.goods_list

    })
}
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