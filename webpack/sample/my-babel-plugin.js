
module.exports = function myBabelPlugin(){
    // 커스텀플러인은 visitor 라는 객체를 갖고있는 객체를 반환해야한다.
    return{
        visitor:{
            //visitor 객체에는 Identifier라는 객체가 들어있는데, 
            //Identifier는 path라는 객체를 받는데 그것을 바벨이 넣어준다.
            //이것은 path.node.name을 통해서 파싱된 결과물에 접근할 수 있다.
            Identifier(path){
                const name = path.node.name;

                // 바벨이 만든 AST 노드를 출력한다 <--파싱된 결과물 출력
                console.log("Identifier name: ", name)

                // 변환작업: 코드의 문자열을 역순으로 변환한다.
                path.node.name = name 
                .split('')
                .reverse()
                .join('');
            }
        }
    }
  };