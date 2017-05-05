<template>
  	<div class="home_container">
    	<itemcontainer></itemcontainer>
  	</div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
	name: 'item',
  components: {
   	itemcontainer
  },
  created(){
  }
}

</script>

<style lang="less" scoped>
    .home_container{
      width: 100%;
      height: 100%;
      background: url(../../images/img/bg.jpg) repeat;
    }

</style>
