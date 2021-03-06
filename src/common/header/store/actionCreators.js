import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const data = res.data.data
            dispatch(changeList(data))
        }).catch(err => {
            console.log('err')
        })
    }
}

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (data) => ({
    type: constants.CHANGE_PAGE,
    data
})