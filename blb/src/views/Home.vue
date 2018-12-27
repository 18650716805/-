<template>
 <div class="index">
    <headlist></headlist>
    <router-view></router-view>
    
    <foot-list></foot-list>
 </div>
</template>

<script>

import FootList from '../components/footlist/footlist'
import Headlist from '../components/head/head'
export default {
  components:{
      FootList,
      Headlist,
      
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
  background-color: #fff;
}




</style>

