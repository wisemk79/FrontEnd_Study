import React, {Component} from 'react';

class MyComponent extends Component{
    state = {
        value : 0
    };

    //getDerivedStateFromProps 해당컴포넌트에 직접 넣지 않고 static값으로 넣어줘야한다.
    static getDerivedStateFromProps(nextProps, prevState){//nextProps 다음으로 받아올 props값, prevState 현재 업데이트되기전의 상태
     if(prevState.value !== nextProps.value){
        return{
            value : nextProps.value
        }
     }
     return null;
    }

    shouldComponentUpdate(nextPorps, prevState){//특정조건에 따라 랜더링을 막아줄수 있다.
        if(nextPorps.value > 10) return false;// nextProps가 10을 넘으면 false를 반환하면서 더이상 업데이트되지 않는다.
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.value !== prevProps.value){//지금 props값과 예전 props값이 다르다면!
            console.log('value 값이 바뀌었다. ' + this.props.value);
        }
    }

    componentWillUnmount(){//메인 컴포넌트에서 만약 그 조건을 넘긴다면 아래내용을 출력시키면서 해당내용이 삭제될 것이다.
        console.log('good bye');
    }




    render(){//리액트의 랜더함수에서 오류가 나게되면 앱 자체가 크래쉬나게된다.
        return(
        <div>
        {/*있지도 않은값(this.props.missing.something)을 불러올때 오류처리하는법(부모컴포넌트(LifeCycleAPI.js)에서해야한다.) */}
            {/*this.props.missing.something*/}
            <p>props : {this.props.value}</p>
            <p>state : {this.state.value}</p>
        </div>
        )
    }
}

export default MyComponent;