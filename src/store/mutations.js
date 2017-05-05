const CUR_CATALOG = 'CUR_CATALOG'
const CUR_NUM = 'CUR_NUM'
const CUR_INDEX = 'CUR_INDEX'
const SET_DEFAULT = 'SET_DEFAULT'

export default {
	[CUR_INDEX](state, payload) {
		state.curIndex = payload.index;
	},

	[CUR_CATALOG](state, payload) {
		state.curCatalog = payload.catalog;
	},

	[CUR_NUM](state, payload) {
		state.curPageNum = payload.pageNum;
	},

	[SET_DEFAULT](state, payload) {
		state.curIndex = 0;
		state.curCatalog = {};
		state.curPageNum = 0;
	}
}