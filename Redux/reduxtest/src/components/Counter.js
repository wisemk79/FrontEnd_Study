import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //react-redux의 connect 를 import 합니다.


class Counter extends Component { 
    render() { 
        return ( 
        <div> 
        {/* code 1의 7번 줄(<h1>Value : {this.props.store.getState().counter.value}</h1>)이 
        code 2의 8번 줄과 같이 바뀝니다. 
        store을 통해 state를 가져올 필요 없이 props.value로 store 값을 가져 올 수 있게 됩니다. 
        이것이 가능한 이유는 밑에서 설명드릴 connect 메소드 덕분입니다. */}
            <h1>Value : {this.props.value}</h1> 
        </div> ); 
        } 
    } 
    
    //store의 state를 props로 매핑 해주는 부분입니다.
    let mapStateToProps = (state) => { 
        return { value: state.counter.value } 
    } 
    
    Counter = connect(mapStateToProps)(Counter); 
    
/**
 * 참고 - connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
         connect는 react-redux의 API 입니다. 이 함수는 컴포넌트를 store에 연결해 줍니다.
         connect 함수는 특정 컴포넌트 클래스의 props를 store에 연결시켜주는 함수를 리턴합니다. 
         리턴된 함수에 컴포넌트를 인수로 넣어주면 기존 컴포넌트가 수정되는 것이 아니라 새로운 컴포는터를 리턴합니다. 
         
 */

export default Counter;



// import React, { Component } from 'react'; 

// class Counter extends Component { 
//     render() { 
//         return ( 
//         <div> 
//         {/* store.getState()로 store에 저장된 state를 가져와, counter.value를 출력합니다. */}
//             <h1>Value : {this.props.store.getState().counter.value}</h1> 
//         </div> ); 
//         } 
// } 

// /**
//  * 
//  * store의 state 구조는 아래와 같습니다.
//  * { counter: { value: 0, diff: 1 } }
//         필드명을 가지고, 그 필드명 하위로 state가 구성되어 있는 것을 확인 할 수 있습니다. 
//         필드명은 reducer에서 combineReducers 메소드에서 정의한 키와 동일 합니다. 
//         별도의 key를 설정하지 않았다면 reducer의 이름과 동일한 필드명을 가지게 됩니다.
//  */

// export default Counter;
