import axios from 'axios'
import * as constants from './constants'

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (result, page) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: result,
    nextPage: page
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            dispatch(changeHomeData(res.data.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then(res => {
            dispatch(addHomeList(res.data.data, page + 1))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})