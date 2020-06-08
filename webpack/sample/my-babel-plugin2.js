
module.exports = function myBabelPlugin(){
    return{
        visitor:{
            //파싱된 결과를 path로 받는다.
            VariableDeclaration(path){
                console.log('VariableDeclaration() kind:',path.node.kind)// const와 같은 변수 선언된것을 찾음 

                if(path.node.kind === 'const'){//path.node.kind의 값이 const면 var로 변환해준다.
                    path.node.kind = 'var'
                }
            }
        }
    }
  };