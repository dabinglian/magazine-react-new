<template>
  	<div class="home_container">
        <listcontainer></listcontainer>
    </div>
</template>

<script>
import listcontainer from '../../components/listcontainer'

export default {
	name: 'home',
  components: {
  	listcontainer
  },
  created(){
        
  }
}
</script>

<style lang="less" scoped>
    .home_container{
      width: 100%;
      height: 100%;
      background: rgb(239, 246, 232);
      overflow: auto;
    }
</style>
