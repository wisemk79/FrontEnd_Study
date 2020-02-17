import React, {Component} from 'react';//리액트 모듈이 설치되어있는데 그것을 사용하겠다.
//리액트를 사용할땐 꼭 React를 import해줘야한다.
import PhoneForm from './Components/PhoneForm';
import PhoneInfoList from './Components/PhoneInfoLIst';

class App extends Component{//클래스를 이용해서 컴포넌트를 만들어준다.
    //데이터를 추가할 때마다 데이터의 고유한 id값을 줘보자.
    id = 3;


  state = {
    information : [
      {
        id : 0,
        name : '홍길동',
        phone : '010 - 0000 - 0001'
      },
      {
        id : 1,
        name : '김민준',
        phone : '010 - 0000 - 0002'
      },
      {
        id : 2,
        name : '김벨로퍼트',
        phone : '010 - 0000 - 0003'
      }
    ],//전화번호부를 information이라는 배열에 넣어준다.
    keyword : '',
  }

  handleChange = (e) => {
    this.setState({
      keyword : e.target.value
    })
  }

  handleCreate = (data) => {//hadleCreate의 data를 information 배열에 넣어준다.
    //this.state.information.push()<--이렇게 밀어 넣으면 절대로 안된다. 애초에 이렇게하면 리랜더링되지 않는다.
    const {information} = this.state;//<--이렇게 비구조 할당 문법을 사용하면 아래의 코드가 간결해진다. 
    this.setState({
      // information : this.state.information <--이렇게 해도 안된다.왜냐하면 리액트는 불변성을 유지해줘야하기 때문
      //information : this.state.information.concat(data)//concat은 배열을 합쳐주는 역할을한다.
      //information : information.concat(data)<-고유한 아이디 값을 주기위해선 아래와 같이 변경한다.
      //information : information.concat({Object.assign({}, data, { id : this.id++ })
      information : information.concat({
        ...data,
        id : this.id++
      })
    })
    console.log(data)
  }

  handleRemove = (id) => {
    const {information} = this.state;//비구조화 할당
    this.setState({
      information : information.filter(info => info.id !== id)//information안의 info값의 info.id가 파라메터로 받은 id값이 아닌경우에는
    })
  }

  handleUpdate = (id, data) =>{
    const {information} = this.state;
    this.setState({
      information : information.map(
        info => {
          if (info.id === id){
            return{
              id,
              ...data//<---name과 phone값이 들어오게된다.
            }
          }
          return info;
        }
      )
    })
  }

  render(){//랜더 메소드, js형태의 코드를 리턴해줘야한다.
    return(//기존에 input 태그도 /로 닫아줘야한다. 또한 div가 2개이상인 경우 div로 감싸줘야한다. 들어가면 안된다.
      <div>
        <PhoneForm onCreate = {this.handleCreate}/>
        <input
          value = {this.state.keyword}
          onChange = {this.handleChange}
          placeholder = "검색..."
        />
        {/* JSON.stringify() 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환한다. */}
        {/* {JSON.stringify(this.state.information)} */}
        {/* InfoList에 data값을 전달한다.  */}
        <PhoneInfoList 
          data = {this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;