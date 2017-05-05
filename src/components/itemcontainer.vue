<template>
  	<div class="magazine-detail">
  		<div class="top-bar">
  			<ul>
  				<li v-for="item in catalog">
  					<a href="javascript:void(0)" v-bind:data-key="item.key">{{ item.name }}</a>
  				</li>
  			</ul>
  			<a class="back-btn" href="javascript:void(0)">返回列表</a>
  		</div>
 		<div class="page-detail">
 			<div class="turn-page">
		  		<div class="turn-container">
		  			<div v-for="key in pageNum">
		  				<img v-bind:src="getImgUrl(key, curIndex, pageNum)">
		  			</div>
		  		</div>
	  		</div>
	  		<div class="slider-container">
	  			<a class="prev" title="上一页" href="javascript:void(0)"></a>
	  			<a class="next" title="下一页" href="javascript:void(0)"></a>
	  		</div>
  		</div>
  	</div>
</template>

<script>  
import { mapState, mapActions } from 'vuex'
import $ from 'jquery'
import '../config/turn.js'

export default {
	name: 'itemcontainer',
	data() {
		return {
		
		}
	},
  	computed: mapState({
  		curIndex: state => state.curIndex,
	  	catalog: state => state.curCatalog,
	  	pageNum: state => state.curPageNum
	}),
  	methods: {
  		setCur: function(){
  			const path = this.$router.history.current.path;
  			this.$store.dispatch("setCur", path);
  		},
  		getImgUrl: function(key, index, pageNum){
  			if(key == 1){
  				key = "front";
  			}else if(key == pageNum){
  				key = "back";
  			}else{
  				if((key-1).toString().length == 1){
	  				key = "0" + (key-1);
	  			}else{
	  				key = key - 1;
	  			}
  			}
  			
  			const url = require("../images/page" + index + "/" + key + ".jpg");
  			return url;
  		},
  		renderPage: function(){
			$(".turn-container").turn({
			  width: 1080,
			  height: 779,
			  autoCenter: true,
			  gradients: true
			});
  		},
  		initEvents: function(){
  			var self = this;
			$(".prev").on("click", function(){
				$(".turn-container").turn("previous");
			});

			$(".next").on("click", function(){
				$(".turn-container").turn("next");
			});

			$(".top-bar li").on("click", function(e){
				const _this = $(e.currentTarget);
				const key = _this.find("a").data("key");
				$(".turn-container").turn("page", Number(key)+1);
			});

			$(".back-btn").on("click", function(){
				self.$router.push('/');
			});
  		}
	},
	created(){
		this.setCur();
	},
	mounted(){
		this.renderPage();
		this.initEvents();
	}
}
</script>

<style lang="less">
	.magazine-detail{
		width: 100%;
		height: 100%;

		.top-bar{
		    height: 40px;
		    width: 100%;
		    background: url(../images/img/navbg.png) repeat;
		    position: relative;

		    ul{
		    	width: 100%;
			    height: 40px;
			    text-align: center;
			    overflow: hidden;

			    li{
			    	display: inline-block;
				    font-size: 14px;
				    padding: 3px 10px;
				    color: #fff;
				    border: 1px solid #fff;
				    border: 1px solid rgba(255,255,255,0.8);
				    border-radius: 3px;
				    margin-top: 8px;
				    margin-left: 10px;
				    margin-right: 10px;
				    cursor: pointer;
				    box-shadow: 0 0 3px #fff;

				    a{
				    	display: block;
				    	color: #fff;
				    }
			    }
		    }

		    .back-btn{
		    	position: absolute;
			    right: 10px;
			    top: 0;
			    display: block;
			    width: 100px;
			    height: 26px;
			    margin-top: 8px;
			    margin-right: 10px;
			    color: #f5f5f5;
			    font-size: 14px;
			    line-height: 26px;
			    background: #108ee9;
			    border-radius: 26px;
			    text-align: center;
		    }

		    .back-btn:hover{
		    	background: #1385d8;
    			color: #f5f5f5;
		    }
		}

		.page-detail{
			.turn-page{
				width: 1080px;
				height: 779px;
				margin: 40px auto;
				overflow: hidden;
				position: relative;
			}

			.slider-container{
				a{
					width: 48px;
					height: 88px;
					position: absolute;
					top: 50%;
					margin-top: -44px;
				}

				.prev{
					background: url("../images/img/btnPre.png") no-repeat;
					left: 50%;
					margin-left: -600px;
				}

				.prev:hover{
					background: url("../images/img/btnPreHover.png") no-repeat;
				}

				.next{
					background: url("../images/img/btnNext.png") no-repeat;
					right: 50%;
					margin-right: -600px;
				}

				.next:hover{
					background: url("../images/img/btnNextHover.png") no-repeat;
				}
			}
		}
	}
</style>
