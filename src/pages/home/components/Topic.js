import { connect } from 'react-redux'
import {
    TopicWrapper,
    TopicItem
} from '../style'

function Topic (props) {
    const { list } = props
    return (
        <TopicWrapper>
            { list.map(item => (
                <TopicItem key={ item.get('id') }>
                    <img className='topic-pic' src={ item.get('imgUrl') } />
                    { item.get('title') }
                </TopicItem>
            ))}
        </TopicWrapper>
    )
}

const mapState = (state) =>  ({
    list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)
