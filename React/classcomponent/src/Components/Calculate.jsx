import React, { Component } from 'react'

export default class Calculate extends Component {
    render() {
        return (
            <div>
                <button style={{border: "1px solid black", padding:"5px"}}>+</button>
                <input style={{border: "1px solid black", padding:"5px", width:"30px"}} type="text"/>
                <button style={{border: "1px solid black", padding:"5px"}}>-</button>
            </div>
        )
    }
}
