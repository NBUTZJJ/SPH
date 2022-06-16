<template>
<div>

 <TypeNav/>
 <List/>
 <Recommend/>
 <Rank/>
 <Like/>
 <Floor v-for="(floor,index) in floorList.data" :key="floor.id" :list="floor"/>
 <Brand/>
</div>
</template>

<script>
import List from './List/index'
import Recommend from './Recommend/index'
import Rank from './Rank/index'
import Like from './Like/index'
import Floor from './Floor/index'
import Brand from './Brand/index'
import { mapState } from "vuex";
export default {
  components:{List,Recommend,Rank,Like,Floor,Brand},
  mounted() {
    this.$store.dispatch("getFloorList");
    
  },
  computed:{
    ...mapState({
    floorList:(state)=>{
      return state.home.floorList;
    }
    })
  }
};
</script>

<style scoped lang="less">

</style>