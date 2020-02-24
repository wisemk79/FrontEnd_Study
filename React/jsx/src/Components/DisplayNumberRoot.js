import React, {Component} from 'react'
import DisplayNumber from './DisplayNumber'

export default class DisplayNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Display Number Root</h1>
                {/* this.props.number<--부모컴포넌트에서 물려받은 props */}
                <DisplayNumber number={this.props.number}/>
            </div>
        )
    }
}