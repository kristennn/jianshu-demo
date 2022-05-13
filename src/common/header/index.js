import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

function Header () {
    const [focused, setFocused] = useState(false)
    function handleInputFocus () {
        setFocused(true)
    }
    function handleInputBlur () {
        setFocused(false)
    }

    return (
        <HeaderWrapper>
            <Logo />
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
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            className={focused ? 'focused' : ''}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
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

export default Header