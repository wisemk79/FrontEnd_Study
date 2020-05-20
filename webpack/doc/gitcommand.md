## 원격 저장소 branch 확인  
원격 저장소의 branch 리스트를 확인하는 방법이 있다. $ git branch -r -r   
옵션을 주면 원격 저장소의 branch 리스트를 볼 수 있고, $ git branch -a   
-a 옵션을 주면 로컬, 원격 모든 저장소의 branch 리스트를 볼 수 있다.  

## 원격 저장소의 branch 가져오기  
위의 상황에서 만약 원격 저장소의 feature/create-meeting branch를   
가져오고 싶다면, $ git checkout -t origin/feature/create-meeting 처럼 하면 된다.  
-t 옵션과 원격 저장소의 branch 이름을 입력하면 로컬의 동일한 이름의  
branch를 생성하면서 해당 branch로 checkout을 한다.

`````
git checkout -t origin/1-webpack/1-entry

오류나는 경우 git fetch 해줄것
`````

## 원격 저장소의 branch 참고하기  
어떤 경우에는 수정 내역을 원격 저장소에 push 하지는 않지만   
해당 branch를 참고하기 위해 로컬에 받아서 테스트 해보고 싶은 경우도 있다.  
$ git checkout [원격 저장소의 branch 이름] 아무런 옵션없이 원격 저장소의 branch를   
checkout 하면 ‘detached HEAD’ 상태로 소스를 보고 변경 해볼 수도 있지만   
변경사항들은 commit, push 할 수 없으며 다른 branch로 checkout하면 사라진다.   

## vscode에서 실행하는방법  
````
code .    <-- 중간에 띄어쓰기
````