import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
    static defaultProps = {
        data : []
    }
    render() {
        const {data, onRemove, onUpdate} = this.props;//PhoneInfo의 props를 배열로 가져오고
        //onRemove라는 것을 props로 받아왔다.
        //if(!data) return null; <--type에러 나는경우

        console.log('renderinglist')

        const list = data.map(//data.map을 해줘서 해당 배열의 info를 랜더링하고 key값을 id로준다.
        info => (
            <PhoneInfo 
                onRemove = {onRemove}
                onUpdate = {onUpdate}
                info = {info} 
                key = {info.id}/>)//info 컴포넌트로 변환해준것이다.
        )
        return (
            <div>
                {list}{/* 랜더링해준것 */}
            </div>
        )
    }
}
