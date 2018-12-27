<template>
    <div class="cats-main" >
        <div class="cats-list">
            <ul>
                <li class="active">
                    <a href="#">为您推荐</a>
                </li>
                <li v-for="(cat,index) in cats" :key="index" @click="active">
               {{cat.cat_name}}  </li>
            </ul>
        </div>
        <router-view :cid='cid'></router-view>
        
    </div>
</template>

<script>
import $ from "jquery";
import { cats } from "../components/common/api.js";


export default {
  data() {
    return {
      cats: [],
      cid: '',
    
    };
  },

  methods: {
    active() {
      let that = this;
      $(".cats-list ul li").on("touchstart", function() {
        var index = $(this).index();
        that.$router.push({ path: "/home/catsmainshow/catslist/" + index });
        that.cid=index
        $(this)
          .addClass("active")
          .siblings()
          .removeClass();
        $(".cats-info")
          .eq(index)
          .show()
          .siblings(".cats-info")
          .hide();
      });
    }
  },
  mounted() {
    cats().then(data => {
      Array.from(data.data.data).forEach(element => {
       
     
        this.cats.push(element);
        

        // $('.cats-list ul').append(` <li ><a href="#${id}">${element.cat_name}</a></ul>`)
        // $('.cats-main').append(`<div class="cats-info" id="${id}" style="display: none;"> </div>`)
      });
    });
  }
};
</script>

<style scoped>
.cats-main {
  background-color: #f4f4f4;
  padding-top: 0.08rem;
  display: flex;
}
.cats-list {
  width: 2.667rem;
}
.cats-list ul li {
  width: 100%;
  height: 1.733rem;
  background-color: #fff;
  border-bottom: 1px solid #f4f4f4;
  font-size: 0.32rem;
  text-align: center;
  line-height: 1.733rem;
}
.cats-list ul li a {
  text-decoration: none;
  color: #000;
}
.cats-list ul .active {
  background-color: #f4f4f4;
  border-bottom: none;
  border-left: 0.053rem solid #ffa11b;
  color: #ffa11b;
  margin: 0.08rem 0;
}
</style>
