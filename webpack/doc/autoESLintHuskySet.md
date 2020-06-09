# 자동화  
린트를 코딩할 때 마다 수시로 실행해야되는데, 이러한일은 자동화 하는것이 좋다.  

# Husky  
소스 트래킹 도구로 깃을 사용한다면 깃 훅을 사용하는것이 좋은데,  
허스키가 이러한 기능을 제공한다.  
허스키는 커밋 전, 푸시 전 등에 커멘드 실행시점에 끼여들 수 있는 훅을 제공한다.  
우리는 허스키로 커밋메세지 작성전에 끼어들어 린트로 코드 검사 작업을 추가하고자한다.  
- 설치  
````
npm install -D husky
````  
- package.json  
````
    "husky":{
      "hooks":{
        "pre-commit":"echo \"이것은 커밋전에 출력됨\""
      }
    }
````
- 실행 <-- 빈 커밋을 실행하여 잘 작동하는지 보는것  
````
git commit --allow-empty -m "sample commit"
````
- 결과  
````
husky > pre-commit (node v13.8.0)
이것은 커밋전에 출력됨
[master 27f06e5] sample commit
````  
#### eslint 설정을 package.json에 설정
- package.json  
````
  "husky": {
    "hooks": {
      "pre-commit": "eslint prettier.js --fix"
    }
  }
````
### lint stage  
린트 스테이지는 커밋한 파일만 린트로 검사하고 싶을때 사용하는것이다.  
- 설치  
````
npm install lint-staged
````
- package.json  
````
  "lint-staged":{
    "*.js": "eslint --fix"
  }
````