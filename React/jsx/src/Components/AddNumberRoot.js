import React, {Component} from 'react'
import AddNumber from '../containers/AddNumber'

export default class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                {/* 자식 컴포넌트에서 받은 props를 onClick으로 받아준다. */}
                <AddNumber onClick={(props)=>this.props.onClick(props)}/>
            </div>
        )
    }
}