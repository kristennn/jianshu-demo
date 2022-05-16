import { connect } from 'react-redux'
import {
    RecommendWrapper,
    RecommendItem,
    QRCodeWrapper,
    QRCodeInfo
} from '../style'

function Recommend (props) {
    const { list } = props
    return (
        <RecommendWrapper>
            {
                list.map(item => 
                    <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                )
            }
            <QRCodeWrapper>
                <img className='code-pic' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-bef8a3919bdba9e8d965956b37291e98.png' />
                <QRCodeInfo>
                    <div className='title'>下载简书手机App</div>
                    <div className='text'>随时随地发现和创作内容</div>
                </QRCodeInfo>
            </QRCodeWrapper>
        </RecommendWrapper>
    )
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend)