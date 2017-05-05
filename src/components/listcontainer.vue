<template>
  	<div class="magazine-list">
    	<div>
    		<p class="list-title">{{ listTitle }}</p>
    	</div>
    	<div class="list-box">
    		<div class="list-item" v-for="(file, index) in files">
    			<p class="item-year">{{ file.year }}</p>
    			<ul>
    				<li v-for="(item, index) in file.magazines">
    					<a href="javascript:void(0)" @click="gotoPage(item.index)">
    						<img v-bind:src="getImgSrc(item.index)">
    						<p class="item-title">第{{ item.index }}期</p>
    					</a>
    				</li>
    			</ul>
    		</div>
    	</div>
  	</div>
</template>

<script>  
import { mapState, mapActions } from 'vuex'
export default {
	name: 'listcontainer',
	data() {
		return {
			baseSrc: "../images/img/thumb/thumb_",
			jpg: ".jpg",
			imgSrc: require("../images/img/thumb/thumb_01.jpg")
		}
	},
  	computed: mapState({
  		listTitle: state => state.listTitle,
	  	files: state => state.files
	}),
  	methods: {
  		getImgSrc(index) {
  			const imgSrc = require("../images/img/thumb/thumb_"+index+".jpg");
  			return imgSrc;
  		},
  		gotoPage(index) {
  			if(index){
  				this.$router.push('item/'+index);
  			}
  		}
	},
	created(){
		this.$store.commit("SET_DEFAULT");
	}
}
</script>

<style lang="less">
	.magazine-list{
		position: relative;
    	padding: 30px 5%;

		.list-title{
			font-size: 22px;
		    font-family: "Microsoft YaHei";
		    font-weight: normal;
		    border-bottom: 1px dotted #ccc;
		    padding-bottom: 5px;
		    color: #444;
		}

		.list-item{
			position: relative;
    		margin-top: 15px;

    		.item-year{
    			border-left: 5px solid #78d020;
    			padding-left: 5px;
    			font-size: 20px;
    			color: #666;
    		}

    		ul{
    			position: relative;
			    margin-bottom: 40px;
			    width: 100%;
			    padding-bottom: 5px;
			    overflow: hidden;

			    li{
			    	float: left;
				    width: 200px;
				    margin-left: 15px;
				    margin-right: 15px;
				    margin-top: 30px;
				    background: #fff;
				    position: relative;
				    -webkit-box-shadow: 0 2px 10px #ccc;
				    -moz-box-shadow: 0 2px 10px #ccc;
				    box-shadow: 0 2px 10px #ccc;

				    a{
					    display: block;
					    width: 200px;
					    margin: 0 auto;

					    img{
					    	width: 200px;
    						height: 288px;
    						vertical-align: middle;
					    }

					    p{
					    	width: 180px;
						    font-size: 14px;
						    text-align: center;
						    overflow: hidden;
						    white-space: nowrap;
						    text-overflow: ellipsis;
						    padding: 8px 10px;
						    border-top: 1px solid #eee;
					    }
				    }
			    }

			    li:hover{
			    	box-shadow: 0 0 10px #999;
				    -webkit-box-shadow: 0 0 10px #999;
				    -moz-box-shadow: 0 0 10px #999;
			    }
    		}
		}
	}
</style>
