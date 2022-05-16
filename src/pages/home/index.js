import { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

function Home (props) {
    const { showScroll, changeHomeData, changeScrollTopShow } = props
    useEffect(() => {
        changeHomeData()
        bindEvents()
        return componentDestroy()
    }, [])

    const componentDestroy = () => {
        window.removeEventListener('scroll', changeScrollTopShow)
    }

    const bindEvents = () => {
        window.addEventListener('scroll', changeScrollTopShow)
    }

    const handleScrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <HomeWrapper>
            <HomeLeft>
                <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png" />
                <Topic />
                <List />
            </HomeLeft>
            <HomeRight>
                <Recommend />
                <Writer />
            </HomeRight>
            { showScroll && <BackTop onClick={handleScrollTop}>回到顶部</BackTop> }
        </HomeWrapper>
    )
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData:  () => {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow: (e) => {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)