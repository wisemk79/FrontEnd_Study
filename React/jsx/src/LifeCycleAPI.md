# LifeCycleAPI

## 컴포넌트

### Mounting(나타날때)
1. constructor(생성자)
우리가 만든 컴포넌트가 처음 브라우저에서 나타날때,
컴포넌트의 초기값(state) 또는 브라우저가 나타날때 미리해야되는 작업이 있는 경우 여기서 처리를 한다.    
```javascript
<input type = "button"></input>
const dodod = {
    name : "su"
}
```
2. getDerivedStateFromProps
만약, props로 받은 값을 state에 동기화하고 싶은경우 이것을 사용하면된다. 
이것은 mounting단계 뿐만아니라 updating단계에서도 사용하게된다.

3. Rander
어떤 dom을 만들게될지 태그에 어떤 값이 전달이될지 정의해준다

4. componentDidMount
실제로 브라우저상에 나타나게되면 호출이되는 함수

외부 라이브러리를 사용하게될때 특정dom에다가 차트를 그려달라하는 코드를 작성할 수도 있고 
network요청 api ajax요청을 해야하는 경우 여기에서 처리하게된다.
컴포넌트가 나타난 다음에 해당 dom에서 스크롤 이벤트를 읽고싶다 하는 경우도 여기에서 처리한다.

이 영역에서 하는것은 컴포넌트가 나타난 시점에 어떤 작업을 하겠다 라고 명시해주는 것이다.
eventlistening, api요청 

### Updating(업데이트 할때)
2. getDerivedStateFromProps

3. shouldComponentUpdate
컴포넌트가 업데이트되는 성능을 최적화 시킬때 사용

부모컴포넌트가 랜더링되면 자식컴포넌트도 전부 랜더링되는 경우가 있을때
vertualdom에 쓸데없이 전부랜더링되는것을 막아 메모리를 아끼기위해(최적화가 중점임)

여기서는 true값이나 false값을 반환할 수가 있다.

true값이면 이 이하에있는것이 랜더링될 것이고,
false라면 shouldComponentUpdate함수에서 멈추게된다.

new props가 바뀌거나, state가 바뀌었을때 어떤 로직에따라 false를 반환하게되면 실제로 랜더링이되지 않기 때문에 화면에 반영되지 않는다.


4. Rander

5. getSnapshotBeforeUpdate
랜더링을 한다음에 그 결과물이 브라우저상에 반영되기 직전에 호출되는 함수이다.

랜더링을 하고나서 업데이트하기전에 스크롤의 위치, 해당dom의 크기를 사전에 가져오고 싶을때 사용한다.

6. componentDidUpdate
컴포넌트가 업데이트되었을때 하는 작업인데
state가 바뀌었을때 이전의 상태와 지금의 상태가 다르다 할때 어떤 작업을 하겠다. 라고 해주는것


### Unmounting(사라질 때)
1. componentWillUnmounting
컴포넌트가 사라지는 과정에서 호출되는 함수 
eventlistening, api요청등을 componentDidMount에서 했다면 여기서 정해준것을 삭제하는 역할을 해준다.