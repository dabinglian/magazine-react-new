export default {
	setCur({ commit, state }, path) {
		var index = path.split("/")[2];
		var catalog = [];
		var pageNum = 0;
		for(var i in state.files){
			for(var j in state.files[i].magazines){
				if(state.files[i].magazines[j].index == index){
					catalog = state.files[i].magazines[j].catalog;
					pageNum = state.files[i].magazines[j].num;
				}
			}
		}
		commit('CUR_INDEX', { index });
		commit('CUR_CATALOG', { catalog });
		commit('CUR_NUM', { pageNum });
	}
}