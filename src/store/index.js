import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	listTitle: "杂志列表",
    files: [
        {
            year: "2017",
            magazines: [
                {
                    index: "17",
                    date: "2017-04",
                    num : 68,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "13", name: "百奥头条" },
                        { key: "37", name: "新人亮相" },
                        { key: "39", name: "百奥榜" },
                        { key: "43", name: "天下趣趴" },
                        { key: "61", name: "精品游谈" }
                    ]
                },
                {
                    index: "16",
                    date: "2017-03",
                    num : 64,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "13", name: "百奥头条" },
                        { key: "31", name: "新人亮相" },
                        { key: "33", name: "涨姿势" },
                        { key: "37", name: "天下趣趴" },
                        { key: "57", name: "百漫新作" }
                    ]
                },
                {
                    index: "15",
                    date: "2017-02",
                    num : 82,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "13", name: "百奥头条" },
                        { key: "47", name: "新人亮相" },
                        { key: "49", name: "百奥榜" },
                        { key: "53", name: "涨姿势" },
                        { key: "59", name: "天下趣趴" },
                        { key: "75", name: "百漫力荐" }
                    ]
                },
                {
                    index: "14",
                    date: "2017-01",
                    num : 74,
                    catalog: [
                        { key: "07", name: "行业洞察" },
                        { key: "27", name: "百奥头条" },
                        { key: "49", name: "新人亮相" },
                        { key: "51", name: "百奥榜" },
                        { key: "53", name: "涨姿势" },
                        { key: "57", name: "精品游谈" },
                        { key: "61", name: "天下趣趴" }
                    ]
                }
            ]
        },
        {
            year: "2016",
            magazines: [
                {
                    index: "13",
                    date: "2016-12",
                    num : 66,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "11", name: "百田头条" },
                        { key: "23", name: "新人亮相" },
                        { key: "25", name: "天下趣扒" },
                        { key: "57", name: "管理之窗" },
                        { key: "59", name: "精品游谈" }
                    ]
                },
                {
                    index: "12",
                    date: "2016-11",
                    num : 58,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "17", name: "百田头条" },
                        { key: "27", name: "百田榜" },
                        { key: "29", name: "新人亮相" },
                        { key: "31", name: "天下趣扒" },
                        { key: "47", name: "管理之窗" },
                        { key: "49", name: "精品游谈" }
                    ]
                },
                {
                    index: "11",
                    date: "2016-10",
                    num : 52,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "09", name: "百田头条" },
                        { key: "27", name: "百田榜" },
                        { key: "29", name: "新人亮相" },
                        { key: "31", name: "杂谈天下" },
                        { key: "45", name: "管理之窗" },
                        { key: "47", name: "星座秀" }
                    ]
                },
                {
                    index: "10",
                    date: "2016-09",
                    num : 64,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "09", name: "百田头条" },
                        { key: "21", name: "百田榜" },
                        { key: "23", name: "新人亮相" },
                        { key: "25", name: "杂谈天下" },
                        { key: "53", name: "管理之窗" },
                        { key: "59", name: "星座秀" }
                    ]
                },
                {
                    index: "09",
                    date: "2016-08",
                    num : 58,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "09", name: "百田头条" },
                        { key: "27", name: "百田榜" },
                        { key: "29", name: "新人亮相" },
                        { key: "31", name: "田田圈" },
                        { key: "41", name: "杂谈天下" },
                        { key: "51", name: "管理之窗" },
                        { key: "53", name: "星座秀" }
                    ]
                },
                {
                    index: "08",
                    date: "2016-07",
                    num : 58,
                    catalog: [
                        { key: "03", name: "行业洞察" },
                        { key: "09", name: "百田头条" },
                        { key: "37", name: "百田榜" },
                        { key: "39", name: "新人亮相" },
                        { key: "41", name: "田田圈" },
                        { key: "45", name: "杂谈天下" },
                        { key: "51", name: "管理之窗" },
                        { key: "53", name: "星座秀" }
                    ]
                },
                {
                    index: "07",
                    date: "2016-06",
                    num : 42,
                    catalog: [
                        { key: "03", name: "业界动态" },
                        { key: "07", name: "百田头条" },
                        { key: "17", name: "百田榜" },
                        { key: "19", name: "新人亮相" },
                        { key: "21", name: "田田圈" },
                        { key: "25", name: "杂谈天下" },
                        { key: "35", name: "管理之窗" },
                        { key: "37", name: "星座秀" }
                    ]
                },
                {
                    index: "06",
                    date: "2016-05",
                    num : 50,
                    catalog: [
                        { key: "03", name: "业界动态" },
                        { key: "07", name: "百田头条" },
                        { key: "21", name: "百田榜" },
                        { key: "23", name: "新人亮相" },
                        { key: "25", name: "田田圈" },
                        { key: "29", name: "杂谈天下" },
                        { key: "43", name: "管理之窗" },
                        { key: "45", name: "星座秀" }
                    ]
                },
                {
                    index: "05",
                    date: "2016-04",
                    num : 38,
                    catalog: [
                        { key: "03", name: "业界动态" },
                        { key: "07", name: "百田头条" },
                        { key: "15", name: "百田榜" },
                        { key: "17", name: "新人亮相" },
                        { key: "19", name: "杂谈天下" },
                        { key: "29", name: "管理之窗" },
                        { key: "33", name: "星座秀" }
                    ]
                },
                {
                    index: "04",
                    date: "2016-03",
                    num : 62,
                    catalog: [
                        { key: "05", name: "业界动态" },
                        { key: "08", name: "公司动态" },
                        { key: "19", name: "百田榜" },
                        { key: "21", name: "新人亮相" },
                        { key: "23", name: "田田圈" },
                        { key: "25", name: "杂谈天下" },
                        { key: "49", name: "管理之窗" },
                        { key: "55", name: "生日秀" }
                    ]
                },
                {
                    index: "03",
                    date: "2016-02",
                    num : 54,
                    catalog: [
                        { key: "04", name: "业界动态" },
                        { key: "07", name: "公司动态" },
                        { key: "17", name: "百田榜" },
                        { key: "19", name: "新人亮相" },
                        { key: "21", name: "田田圈" },
                        { key: "23", name: "杂谈天下" },
                        { key: "45", name: "管理之窗" },
                        { key: "47", name: "生日秀" }
                    ]
                },
                {
                    index: "02",
                    date: "2016-01",
                    num : 44,
                    catalog: [
                        { key: "04", name: "业界动态" },
                        { key: "08", name: "公司动态" },
                        { key: "17", name: "百田榜" },
                        { key: "19", name: "新人亮相" },
                        { key: "21", name: "杂谈天下" },
                        { key: "35", name: "管理之窗" },
                        { key: "37", name: "生日秀" }
                    ]
                }

            ]
        },
        {
            year: "2015",
            magazines: [
                {
                    index: "01",
                    date: "2015-12",
                    num : 54,
                    catalog: [
                        { key: "02", name: "业界动态" },
                        { key: "06", name: "公司动态" },
                        { key: "13", name: "百田榜" },
                        { key: "15", name: "新人亮相" },
                        { key: "17", name: "田田圈" },
                        { key: "32", name: "杂谈天下" },
                        { key: "47", name: "管理之窗" },
                        { key: "49", name: "生日秀" }
                    ]
                }
            ]
        }
    ],
    curCatalog: {},
    curPageNum: 0,
    curIndex: 0
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})