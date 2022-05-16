import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'

function Header (props) {
    const {
        focused, list, page, totalPage, mouseIn, 
        handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, handleChangePage
    } = props
    const pageList = []
    const jsList = list.toJS()
    if (jsList.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            pageList.push(
                <SearchInfoItem key={jsList[i]}>{ jsList[i] }</SearchInfoItem>
            )
        }
    }
    const getListArea = () => {
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    return (
        <HeaderWrapper>
            <Link to='/'>
                <Logo />
            </Link>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition timeout={200} in={focused} classNames="slide">
                        <NavSearch
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                            className={focused ? 'focused' : ''}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</i>
                    { getListArea() }
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <i className="iconfont">&#xe6eb;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // focused: state.get('header').get('focused')
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus (list) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage (page, totalPage) {
            const data = page + 1 > totalPage ? 1 : page + 1
            dispatch(actionCreators.changePage(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)